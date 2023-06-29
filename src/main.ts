import jsyaml from "js-yaml"
import { html, LitElement } from "lit"
import { customElement, property, state } from "lit/decorators.js"

import { bulmaStyles } from "./bulma"

const RUNS_STORAGE_KEY = "neko-punch-runs"

// === types ===
type WfAttachment = {
  target: string
  type: "fetch" | "upload"
  url?: string
  file?: File
}

type Run = {
  id: string
  name: string
}

type RunLog = {
  workflow_params: string
  start_time: string // YYYY-MM-DDTHH:MM:SSZ
  end_time: string // YYYY-MM-DDTHH:MM:SSZ
  stdout: string
  stderr: string
  state:
    | "UNKNOWN"
    | "QUEUED"
    | "INITIALIZING"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETE"
    | "EXECUTOR_ERROR"
    | "SYSTEM_ERROR"
    | "CANCELED"
    | "CANCELING"
  outputs: {
    file_name: string
    file_url: string
  }[]
}

// === main ===
@customElement("neko-punch")
export class NekoPunch extends LitElement {
  static styles = [bulmaStyles]

  // === attributes ===
  @property({ attribute: "wes-location", type: String })
  wesLocation?: string
  @property({ attribute: "yevis-metadata-url", type: String })
  yevisMetadataUrl?: string
  @property({ attribute: "workflow-engine", type: String })
  workflowEngineAttr?: string // Optional

  // === state first fetch ===
  @state()
  protected serviceInfo: any
  @state()
  protected yevisMetadata: any

  // === state for error handling ===
  @state()
  protected globalError: any
  @state()
  protected apiError: any

  // === tab state ===
  @state()
  protected activeTab: "Execute" | "Result" = "Execute"

  private changeTab(tab: "Execute" | "Result") {
    this.activeTab = tab
  }

  // === computed properties ===
  get wfName(): string {
    return this.yevisMetadata?.workflow?.name ?? ""
  }

  get wfVersion(): string {
    return this.yevisMetadata?.workflow?.version ?? ""
  }

  get wfLicense(): string {
    return this.yevisMetadata?.license ?? ""
  }

  get wfReadme(): string {
    return this.yevisMetadata?.workflow.readme ?? ""
  }

  get wfType(): string {
    return this.yevisMetadata?.workflow?.language?.type ?? "CWL"
  }

  // TODO license, wf name, version, readme

  get wfTypeVersion(): string {
    return this.yevisMetadata?.workflow?.language?.version ?? "v1.0"
  }

  get wfEngines(): string[] {
    return Object.keys(this.serviceInfo?.workflow_engine_versions ?? {}) ?? []
  }

  get wfUrl(): string {
    const primaryFiles =
      this.yevisMetadata?.workflow?.files.filter(
        (file: any) => file.type === "primary"
      ) ?? []
    return primaryFiles.length !== 0 ? primaryFiles[0].url : ""
  }

  // === lifecycle ===
  async connectedCallback() {
    super.connectedCallback()

    // Check if the required attributes are set
    if (!this.wesLocation) {
      this.globalError =
        'The attribute "sapporo-location" is required, please set it as <neko-punch sapporo-location="http://localhost:1122">'
      return
    }
    if (!this.yevisMetadataUrl) {
      this.globalError =
        "The attribute 'yevis-metadata-url' is required, please set it as <neko-punch yevis-metadata-url='https://raw.githubusercontent.com/sapporo-wes/yevis-cli/main/tests/test-metadata-CWL-validated.yml'>"
      return
    }

    await Promise.all([this.getServiceInfo(), this.readYevisMetadata()])

    this.initializeForm()
    this.loadRunsFromLocalStorage()
    if (this.runs.length !== 0) {
      const latestRun = this.runs[0]
      // for Result tab
      this.selectedRun = latestRun
      this.fetchRunLog(latestRun)
    }
  }

  async getServiceInfo() {
    try {
      const res = await fetch(`${this.wesLocation}/service-info`)
      if (!res.ok) {
        throw new Error()
      }
      this.serviceInfo = await res.json()
    } catch (e) {
      this.globalError =
        "Failed to fetch service-info from Sapporo-WES, please check the Sapporo-WES location."
    }
  }

  async readYevisMetadata() {
    try {
      const res = await fetch(`${this.yevisMetadataUrl}`)
      if (!res.ok) {
        throw new Error()
      }
      // Yevis metadata is sometimes in yaml format
      const metadata = await res.text()
      const parsedMetadata = jsyaml.load(metadata)
      this.yevisMetadata = parsedMetadata
    } catch (e) {
      this.globalError =
        "Failed to fetch Yevis metadata, please check the Yevis metadata URL."
    }
  }

  // === state for run form ===
  @state()
  protected runName = ""
  @state()
  protected wfEngine = ""
  @state()
  protected wfAttachments: WfAttachment[] = []
  @state()
  protected wfAttUploadFile: File | undefined
  @state()
  protected wfAttUploadFileName = "No file selected"
  @state()
  protected wfAttUploadTarget = ""
  @state()
  protected wfAttFetchUrl = ""
  @state()
  protected wfAttFetchTarget = ""
  @state()
  protected wfParams = "{}"
  @state()
  protected wfEngineParams = "{}"

  private initializeForm() {
    this.setInitialRunName()
    this.setInitialWfEngine()
    this.setInitialWfAttachments()
    this.setInitialWfParams()
    this.setInitialWfEngineParams()
  }

  private setInitialRunName() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0") // Months are 0 based in JavaScript
    const day = String(now.getDate()).padStart(2, "0")
    const hour = String(now.getHours()).padStart(2, "0")
    const minute = String(now.getMinutes()).padStart(2, "0")
    this.runName = `Run - ${year}/${month}/${day} ${hour}:${minute}`
  }

  private setInitialWfEngine() {
    const DEFAULT_WF_ENGINE = "cwltool"
    this.wfEngine = DEFAULT_WF_ENGINE
    if (this.workflowEngineAttr === undefined) {
      if (this.wfType !== undefined) {
        if (this.wfType === "CWL") {
          this.wfEngine =
            this.wfEngines?.find((engine) =>
              engine.toLocaleLowerCase().includes("cwltool")
            ) ?? DEFAULT_WF_ENGINE
        } else if (this.wfType === "WDL") {
          this.wfEngine =
            this.wfEngines?.find((engine) =>
              engine.toLocaleLowerCase().includes("cromwell")
            ) ?? DEFAULT_WF_ENGINE
        } else if (this.wfType === "NFL") {
          this.wfEngine =
            this.wfEngines?.find((engine) =>
              engine.toLocaleLowerCase().includes("nextflow")
            ) ?? DEFAULT_WF_ENGINE
        } else if (this.wfType === "SMK") {
          this.wfEngine =
            this.wfEngines?.find((engine) =>
              engine.toLocaleLowerCase().includes("snakemake")
            ) ?? DEFAULT_WF_ENGINE
        }
      }
    } else {
      this.wfEngine = this.workflowEngineAttr
    }
  }

  private setInitialWfAttachments() {
    // Set the workflow attachments from the Yevis metadata
    const secondaryFiles =
      this.yevisMetadata?.workflow?.files.filter(
        (file: any) => file.type === "secondary"
      ) ?? []
    const otherFiles =
      this.yevisMetadata?.workflow?.testing?.[0]?.files.filter(
        (file: any) => file.type === "other"
      ) ?? []
    this.wfAttachments = [
      ...secondaryFiles.map((file: any) => ({
        url: file.url,
        target: file.target,
        type: "fetch",
      })),
      ...otherFiles.map((file: any) => ({
        url: file.url,
        target: file.target,
        type: "fetch",
      })),
    ]
  }

  @state()
  protected wfParamsCache: string | undefined
  private setInitialWfParams() {
    if (this.wfParamsCache === undefined) {
      const wfParamsFile =
        this.yevisMetadata?.workflow?.testing?.[0]?.files.find(
          (file: any) => file.type === "wf_params"
        )
      if (wfParamsFile !== undefined) {
        fetch(wfParamsFile.url)
          .then((res) => res.text())
          .then((text) => {
            this.wfParamsCache = text
            this.wfParams = text
          })
          .catch(() => {
            this.apiError = `Failed to fetch "wf_params" file content from ${wfParamsFile.url}, please check the Yevis metadata.`
          })
      }
    } else {
      this.wfParams = this.wfParamsCache ?? "{}"
    }
  }

  @state()
  protected wfEngineParamsCache: string | undefined
  private setInitialWfEngineParams() {
    if (this.wfEngineParamsCache === undefined) {
      const wfEngineParamsFile =
        this.yevisMetadata?.workflow?.testing?.[0]?.files.find(
          (file: any) => file.type === "wf_engine_params"
        )
      if (wfEngineParamsFile !== undefined) {
        fetch(wfEngineParamsFile.url)
          .then((res) => res.text())
          .then((text) => {
            this.wfEngineParamsCache = text
            this.wfEngineParams = text
          })
          .catch(() => {
            this.apiError = `Failed to fetch "wf_engine_params" file content from ${wfEngineParamsFile.url}, please check the Yevis metadata.`
          })
      }
    } else {
      this.wfEngineParams = this.wfEngineParamsCache ?? "{}"
    }
  }

  private loadRunsFromLocalStorage() {
    // Get the previous runs from the local storage
    const runs = localStorage.getItem(RUNS_STORAGE_KEY)
    if (runs) {
      this.runs = JSON.parse(runs)
    }
  }

  // === state for run and its result ===
  @state()
  protected latestRun: Run | undefined
  @state()
  protected runs: Run[] = []
  @state()
  protected selectedRun: Run | undefined
  @state()
  protected runLogs: { [key: string]: RunLog } = {}

  // === event handlers for execute form ===
  private inputRunName(e: Event) {
    // Set the run name
    const target = e.target as HTMLInputElement
    this.runName = target.value
  }

  private attachFile(e: Event) {
    // Attach a upload file as a workflow attachment
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file !== undefined) {
      this.wfAttUploadFile = file
      this.wfAttUploadFileName = file.name
      this.wfAttUploadTarget = file.name
    }
  }

  private inputUploadFileTarget(e: Event) {
    // Set the target of the upload file
    const target = e.target as HTMLInputElement
    this.wfAttUploadTarget = target.value
  }

  private addUploadFile() {
    // Add the upload file to the workflow attachments (button)
    if (this.wfAttUploadFile !== undefined && this.wfAttUploadTarget !== "") {
      this.wfAttachments = [
        ...this.wfAttachments,
        {
          target: this.wfAttUploadTarget,
          type: "upload",
          file: this.wfAttUploadFile,
        },
      ]
      this.wfAttUploadFile = undefined
      this.wfAttUploadFileName = "No file selected"
      this.wfAttUploadTarget = ""
    }
  }

  private inputFetchFileUrl(e: Event) {
    // Set the url of the fetch file
    const target = e.target as HTMLInputElement
    this.wfAttFetchUrl = target.value
    const url = new URL(this.wfAttFetchUrl)
    this.wfAttFetchTarget = url.pathname.split("/").pop() ?? ""
  }

  private inputFetchFileTarget(e: Event) {
    // Set the target of the fetch file
    const target = e.target as HTMLInputElement
    this.wfAttFetchTarget = target.value
  }

  private addFetchFile() {
    // Add the fetch file to the workflow attachments (button)
    if (this.wfAttFetchUrl !== "" && this.wfAttFetchTarget !== "") {
      this.wfAttachments = [
        ...this.wfAttachments,
        {
          target: this.wfAttFetchTarget,
          type: "fetch",
          url: this.wfAttFetchUrl,
        },
      ]
      this.wfAttFetchUrl = ""
      this.wfAttFetchTarget = ""
    }
  }

  private inputWfParams(e: Event) {
    // Set the workflow parameters
    const target = e.target as HTMLInputElement
    this.wfParams = target.value
  }

  @state()
  protected executeLoading = false
  // === Execute workflow (POST /runs) ===
  private executeWorkflow() {
    const formData = new FormData()
    formData.append("workflow_params", this.wfParams)
    formData.append("workflow_type", this.wfType)
    formData.append("workflow_type_version", this.wfTypeVersion)
    formData.append("workflow_engine_name", this.wfEngine)
    formData.append("workflow_engine_parameters", this.wfEngineParams)
    formData.append("workflow_url", this.wfUrl)
    const attachmentsArr = []
    for (const attachment of this.wfAttachments) {
      if (attachment.type === "upload") {
        formData.append(
          "workflow_attachment",
          attachment.file as File,
          attachment.target
        )
      } else if (attachment.type === "fetch") {
        attachmentsArr.push({
          file_name: attachment.target,
          file_url: attachment.url,
        })
      }
    }
    if (attachmentsArr.length !== 0) {
      formData.append("workflow_attachment", JSON.stringify(attachmentsArr))
    }

    this.executeLoading = true
    fetch(`${this.wesLocation}/runs`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => {
            const runId = json.run_id
            const run = { id: runId, name: this.runName }

            this.latestRun = run
            this.runs = [run, ...this.runs]
            this.selectedRun = run
            this.fetchRunLog(run)

            localStorage.setItem(RUNS_STORAGE_KEY, JSON.stringify(this.runs))
            this.initializeForm()
            this.executeLoading = false
          })
        }
      })
      .catch((e) => {
        this.apiError = `Failed to execute workflow with the following error: ${e}`
        this.executeLoading = false
      })
  }

  // === functions for result tab ===
  private selectRun(e: Event) {
    const target = e.target as HTMLSelectElement
    const run = this.runs.find((run) => run.name === target.value)
    this.selectedRun = run
    if (run !== undefined) {
      this.fetchRunLog(run)
    }
  }

  private fetchRunLog(run: Run) {
    fetch(`${this.wesLocation}/runs/${run.id}`).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          const start_time = json.run_log?.start_time ?? ""
          const end_time = json.run_log?.end_time ?? ""
          const stdout =
            typeof json.run_log?.stdout === "string"
              ? json.run_log.stdout
              : JSON.stringify(json.run_log.stdout, null, 2)
          const stderr =
            typeof json.run_log?.stderr === "string"
              ? json.run_log.stderr
              : JSON.stringify(json.run_log.stderr, null, 2)
          this.runLogs[run.id] = {
            workflow_params: json.request.workflow_params,
            start_time,
            end_time,
            stdout,
            stderr,
            state: json.state,
            outputs: json.outputs,
          }
          this.requestUpdate()
        })
      }
    })
  }

  get selectedRunLog() {
    return this.runLogs[this.selectedRun?.id ?? ""]
  }

  // === render ===
  contentRender() {
    return html`
      <div class="tabs is-boxed">
        <ul>
          <li
            class="${this.activeTab === "Execute" ? "is-active" : ""}"
            @click="${() => this.changeTab("Execute")}"
          >
            <a>Execute</a>
          </li>
          <li
            class="${this.activeTab === "Result" ? "is-active" : ""}"
            @click="${() => this.changeTab("Result")}"
          >
            <a>Result</a>
          </li>
        </ul>
      </div>
      ${this.activeTab === "Execute"
        ? this.executeTabRender()
        : this.resultTabRender()}
    `
  }

  executeTabRender() {
    return html`
      <div class="content">
        <div>${JSON.stringify(this.wfAttachments, null, 2)}</div>

          <input
            class="input is-info"
            type="text"
            placeholder="run name"
            .value="${this.runName}"
            @input="${this.inputRunName}"
          />

          <div>${this.wfEngine}</div>

          <div class="file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                @change="${this.attachFile}"
              />
              <span class="file-cta">
                <span class="file-label"> Choose a file… </span>
              </span>
              <span class="file-name">${this.wfAttUploadFileName}</span>
            </label>
          </div>
          <input
            class="input is-info"
            type="text"
            placeholder="wf attach target"
            .value="${this.wfAttUploadTarget}"
            @input="${this.inputUploadFileTarget}"
          />
        </div>
        <button class="button is-link is-light" @click="${this.addUploadFile}">
          Add upload file
        </button>

        <input
          class="input is-info"
          type="text"
          placeholder="wf attach URL"
          .value="${this.wfAttFetchUrl}"
          @input="${this.inputFetchFileUrl}"
        />
        <input
          class="input is-info"
          type="text"
          placeholder="wf attach target"
          .value="${this.wfAttFetchTarget}"
          @input="${this.inputFetchFileTarget}"
        />
        <button class="button is-link is-light" @click="${this.addFetchFile}">
          Add fetch file
        </button>

        <textarea class="textarea is-info" placeholder="Info textarea" .value="${
          this.wfParams
        }" @input="${this.inputWfParams}"></textarea>

        <textarea class="textarea is-info" placeholder="Info textarea" .value="${
          this.wfEngineParams
        }"></textarea>

        <button class="button is-link is-light" @click="${
          this.executeWorkflow
        }">Run</button>

        <div>Run ID: ${this.latestRun}</div>
      </div>
    `
  }

  resultTabRender() {
    return html`
      <div class="content">
        <div class="select">
          <select
            .value="${this.selectedRun?.name}"
            @change="${this.selectRun}"
          >
            ${this.runs.map((run) => html`<option>${run.name}</option>`)}
          </select>
        </div>
        <div>stdout</div>
        <pre>${this.selectedRunLog?.stdout}</pre>
        <div>stderr</div>
        <pre>${this.selectedRunLog?.stderr}</pre>
        <div>outputs</div>
        <ul>
          ${this.selectedRunLog?.outputs.map(
            (file) => html`
              <li>
                <a href="${file.file_url}" download="${file.file_name}"
                  >${file.file_name}</a
                >
              </li>
            `
          )}
        </ul>
        <div>state</div>
        <pre>${this.selectedRunLog?.state}</pre>
        <div>start_time</div>
        <pre>${this.selectedRunLog?.start_time}</pre>
        <div>end_time</div>
        <pre>${this.selectedRunLog?.end_time}</pre>
      </div>
    `
  }

  errorNotification() {
    return html`
      <div class="notification is-danger is-light">${this.globalError}</div>
    `
  }

  render() {
    return html`
      <div class="container box">
        <h1 class="title">Neko-Punch!! 🐈👊</h1>
        <p class="subtitle">
          An execution interface, designed as a web component, for the
          effortless execution of workflows via Sapporo-WES.
        </p>
        <div>Sapporo-WES location: <a>${this.wesLocation}</a></div>
        <div>Yevis Metadata URL: <a>${this.yevisMetadataUrl}</a></div>
        <div>workflow name: ${this.wfName}</div>
        <div>wfVersion: ${this.wfVersion}</div>
        <div>wfLicense: ${this.wfLicense}</div>
        <div>wfReadme: ${this.wfReadme}</div>
        ${this.globalError ? this.errorNotification() : this.contentRender()}
      </div>
    `
  }
}
