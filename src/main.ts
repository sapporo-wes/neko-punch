import jsyaml from "js-yaml"
import { html, LitElement } from "lit"
import { customElement, property, state } from "lit/decorators.js"

import { bulmaStyles } from "./bulma"

// only fetch or upload
type WfAttachment = {
  target: string
  type: "primary" | "secondary" | "other" | "fetch" | "upload"
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

// TODO remove wf engine choice
// TODO remove wf engine params form
// TODO registered only mode
// TODO default engine parameters
// TODO supported_wes_versions
// TODO license, wf name, version, readme
// TODO wf engine attr
// TODO loading
// Run name

@customElement("neko-punch")
export class NekoPunch extends LitElement {
  static styles = [bulmaStyles]

  @property({ attribute: "wes-location", type: String })
  wesLocation?: string
  @property({ attribute: "yevis-metadata-url", type: String })
  yevisMetadataUrl?: string

  @state()
  protected serviceInfo: any
  @state()
  protected yevisMetadata: any
  @state()
  protected globalError: any

  @state()
  protected activeTab = "Execute"

  // === state for run form ===
  // for run name
  @state()
  protected runName = ""
  // for workflow engine
  @state()
  protected wfEngine = ""
  // for workflow attachments
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
  // for workflow parameters
  @state()
  protected wfParams = "{}"
  // for workflow engine parameters
  @state()
  protected wfEngineParams = "{}"

  // === state for run result ===
  @state()
  protected latestRunId = ""
  @state()
  protected runs: Run[] = []
  @state()
  protected selectedRun: Run | undefined

  // === state for run ===
  @state()
  protected runLogs: { [key: string]: RunLog } = {}

  // === computed properties ===

  get wfName(): undefined | string {
    return this.yevisMetadata?.workflow?.name
  }

  get wfType(): string {
    return this.yevisMetadata?.workflow?.language?.type ?? "CWL"
  }

  get wfTypeVersion(): string {
    return this.yevisMetadata?.workflow?.language?.version ?? "v1.0"
  }

  get wfEngines(): string[] {
    return (
      Object.entries(this.serviceInfo?.workflow_engine_versions ?? {}).map(
        ([key, value]) => `${key} ${value}`
      ) ?? []
    )
  }

  get wfUrl(): string {
    // TODO: error handling
    const primaryFiles =
      this.yevisMetadata?.workflow?.files.filter(
        (file: any) => file.type === "primary"
      ) ?? []
    return primaryFiles[0].url
  }

  // === lifecycle ===

  async connectedCallback() {
    super.connectedCallback()

    // Check if the required attributes are set
    if (!this.wesLocation) {
      this.globalError =
        "The attribute 'sapporo-location' is required, please set it as <neko-punch sapporo-location='http://localhost:1122'>"
      return
    }
    if (!this.yevisMetadataUrl) {
      this.globalError =
        "The attribute 'yevis-metadata-url' is required, please set it as <neko-punch yevis-metadata-url='https://raw.githubusercontent.com/sapporo-wes/yevis-cli/main/tests/test-metadata-CWL-validated.yml'>"
      return
    }

    await Promise.all([this.getServiceInfo(), this.readYevisMetadata()])

    this.setInitialRunName()
    this.setInitialWfEngine()
    this.setInitialWfAttachments()
    this.setInitialWfParams()
    this.setInitialWfEngineParams()

    // Get the previous runs from the local storage
    const runs = localStorage.getItem("neko-punch-runs")
    if (runs) {
      this.runs = JSON.parse(runs)
      if (this.runs.length !== 0) {
        this.selectedRun = this.runs[0]
        this.fetchRunLog(this.runs[0])
      }
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
    if (this.wfType !== undefined) {
      if (this.wfType === "CWL") {
        this.wfEngine =
          this.wfEngines?.find((engine) => engine.includes("cwltool")) ?? ""
      } else if (this.wfType === "WDL") {
        this.wfEngine =
          this.wfEngines?.find((engine) => engine.includes("cromwell")) ?? ""
      } else if (this.wfType === "NFL") {
        this.wfEngine =
          this.wfEngines?.find((engine) => engine.includes("nextflow")) ?? ""
      } else if (this.wfType === "SMK") {
        this.wfEngine =
          this.wfEngines?.find((engine) => engine.includes("snakemake")) ?? ""
      }
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
        type: "secondary",
      })),
      ...otherFiles.map((file: any) => ({
        url: file.url,
        target: file.target,
        type: "other",
      })),
    ]
  }

  // TODO cache
  private setInitialWfParams() {
    const wfParamsFile = this.yevisMetadata?.workflow?.testing?.[0]?.files.find(
      (file: any) => file.type === "wf_params"
    )
    if (wfParamsFile !== undefined) {
      fetch(wfParamsFile.url)
        .then((res) => res.text())
        .then((text) => {
          this.wfParams = text
        })
    }
  }

  // TODO cache
  private setInitialWfEngineParams() {
    const wfEngineParamsFile =
      this.yevisMetadata?.workflow?.testing?.[0]?.files.find(
        (file: any) => file.type === "wf_engine_params"
      )
    if (wfEngineParamsFile !== undefined) {
      fetch(wfEngineParamsFile.url)
        .then((res) => res.text())
        .then((text) => {
          this.wfEngineParams = text
        })
    }
  }

  private changeTab(tab: string) {
    this.activeTab = tab
  }

  // === event handlers for run form ===

  private inputRunName(e: Event) {
    // Set the run name
    const target = e.target as HTMLInputElement
    this.runName = target.value
  }

  private selectWfEngine(e: Event) {
    // Set the workflow engine
    const target = e.target as HTMLSelectElement
    this.wfEngine = target.value
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

  private inputWfEngineParams(e: Event) {
    // Set the workflow engine parameters
    const target = e.target as HTMLInputElement
    this.wfEngineParams = target.value
  }

  private runWorkflow() {
    const wfEngine = this.wfEngine.split(" ")[0]
    const formData = new FormData()
    formData.append("workflow_params", this.wfParams)
    formData.append("workflow_type", this.wfType)
    formData.append("workflow_type_version", this.wfTypeVersion)
    formData.append("workflow_engine_name", wfEngine)
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
      } else if (
        attachment.type === "fetch" ||
        attachment.type === "secondary" ||
        attachment.type === "other"
      ) {
        attachmentsArr.push({
          file_name: attachment.target,
          file_url: attachment.url,
        })
      }
    }
    if (attachmentsArr.length !== 0) {
      formData.append("workflow_attachment", JSON.stringify(attachmentsArr))
    }

    fetch(`${this.wesLocation}/runs`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          const runId = json.run_id
          this.latestRunId = runId
          const run = { id: runId, name: this.runName }
          this.runs = [run, ...this.runs]
          this.selectedRun = run
          this.fetchRunLog(run)
          localStorage.setItem("neko-punch-runs", JSON.stringify(this.runs))
          // TODO initialize the form
          this.setInitialRunName()
          this.setInitialWfEngine()
          this.setInitialWfAttachments()
          this.setInitialWfParams()
          this.setInitialWfEngineParams()
        })
      }
    })
  }

  // === render ===

  content() {
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
      ${this.activeTab === "Execute" ? this.execute() : this.result()}
    `
  }

  execute() {
    return html`
      <div class="content">
        <div>
          Service Info:
          <pre>${JSON.stringify(this.serviceInfo, null, 2)}</pre>
        </div>
        <div>
          Yevis Metadata:
          <pre>${JSON.stringify(this.yevisMetadata, null, 2)}</pre>
        </div>
        <div>Yevis name: ${this.wfName}</div>
        <div>${JSON.stringify(this.wfAttachments, null, 2)}</div>

          <input
            class="input is-info"
            type="text"
            placeholder="run name"
            .value="${this.runName}"
            @input="${this.inputRunName}"
          />

          <div>${this.wfEngine}</div>

          <div class="select">
            <select .value="${this.wfEngine}" @change="${this.selectWfEngine}">
              ${this.wfEngines.map(
                (engine) => html`<option>${engine}</option>`
              )}
            </select>
          </div>

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
        }" @input="${this.inputWfEngineParams}"></textarea>

        <button class="button is-link is-light" @click="${
          this.runWorkflow
        }">Run</button>

        =====

        <div>Run ID: ${this.latestRunId}</div>
      </div>
    `
  }

  // === run result ===
  private selectRun(e: Event) {
    const target = e.target as HTMLSelectElement
    const run = this.runs.find((run) => run.name === target.value)
    this.selectedRun = run
    this.fetchRunLog(run as Run)
  }

  private fetchRunLog(run: Run) {
    fetch(`${this.wesLocation}/runs/${run.id}`).then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          const stdout =
            typeof json.run_log.stdout === "string"
              ? json.run_log.stdout
              : JSON.stringify(json.run_log.stdout, null, 2)
          const stderr =
            typeof json.run_log.stderr === "string"
              ? json.run_log.stderr
              : JSON.stringify(json.run_log.stderr, null, 2)
          // check log (may include null)
          this.runLogs[run.id] = {
            workflow_params: json.request.workflow_params,
            start_time: json.run_log.start_time,
            end_time: json.run_log.end_time,
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

  // <div>Run ID: ${this.latestRunId}</div>
  // <div>Run IDs: ${JSON.stringify(this.runs, null, 2)}</div>
  // <div>${JSON.stringify(this.selectedRun, null, 2)}</div>

  result() {
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
        ${this.globalError ? this.errorNotification() : this.content()}
      </div>
    `
  }
}
