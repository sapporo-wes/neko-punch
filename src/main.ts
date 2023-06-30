import {
  mdiRocketLaunchOutline,
  mdiChartBoxOutline,
  mdiDeleteOutline,
  mdiFileUploadOutline,
  mdiDownloadOutline,
} from "@mdi/js"
import jsyaml from "js-yaml"
import { html, LitElement, css } from "lit"
import { customElement, property, state } from "lit/decorators.js"

import { bulmaStyles } from "./bulma"

const RUNS_STORAGE_KEY = "neko-punch-runs"

// === types ===
type WfAttachment = {
  target: string
  type: "fetch" | "upload"
  url?: string
  file?: File
  secondary: boolean
  other: boolean
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
    return this.yevisMetadata?.workflow?.language?.version ?? ""
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
        secondary: true,
        other: false,
      })),
      ...otherFiles.map((file: any) => ({
        url: file.url,
        target: file.target,
        type: "fetch",
        secondary: false,
        other: true,
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
          .then((res) => {
            if (res.ok) {
              return res.text()
            } else {
              throw new Error()
            }
          })
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
          .then((res) => {
            if (res.ok) {
              return res.text()
            } else {
              throw new Error()
            }
          })
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

  private deleteAttachment(ind: number) {
    // Delete the workflow attachment
    this.wfAttachments = this.wfAttachments.filter((_, i) => i !== ind)
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
          secondary: false,
          other: false,
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
          secondary: false,
          other: false,
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
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((json) => {
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
    fetch(`${this.wesLocation}/runs/${run.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((json) => {
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
      .catch((e) => {
        this.apiError = `Failed to fetch run log with the following error: ${e}`
      })
  }

  private removeRun(run: Run) {
    if (run.id === this.latestRun?.id) {
      this.latestRun = undefined
    }
    this.runs = this.runs.filter((r) => r.id !== run.id)
    const latestRun = this.runs[0]
    this.selectedRun = latestRun
    this.fetchRunLog(latestRun)

    localStorage.setItem(RUNS_STORAGE_KEY, JSON.stringify(this.runs))
  }

  get selectedRunLog() {
    return this.runLogs[this.selectedRun?.id ?? ""]
  }

  // === styles ===
  static styles = [
    bulmaStyles,
    css`
      :host {
        font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans",
          "BIZ UDPGothic", "Helvetica Neue", Arial, Meiryo, sans-serif;
      }
      .header-details {
        display: grid;
        grid-template-columns: 1fr 5fr;
        gap: 20px;
        margin-bottom: 10px;
      }
      .header-detail-key {
        font-weight: bold;
        text-align: left;
        align-self: start;
      }
      .header-detail-value {
        word-wrap: break-word;
      }
      .attach-child:hover {
        background-color: hsl(219, 70%, 96%);
      }
      .code-font {
        font-family: Menlo, Consolas, "DejaVu Sans Mono", Courier, monospace;
      }
      .select:not(.is-multiple):not(.is-loading)::after,
      .navbar-link:not(.is-arrowless)::after {
        margin-top: -2px;
      }
    `,
  ]

  // === render ===
  contentRender() {
    return html`
      <div class="tabs is-boxed">
        <ul>
          <li
            class="${this.activeTab === "Execute" ? "is-active" : ""}"
            @click="${() => this.changeTab("Execute")}"
          >
            <a style="width: 90px">
              <span style="padding-right: 4px; height: 18px;">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="${mdiRocketLaunchOutline}"
                    fill="${this.activeTab === "Execute"
                      ? "hsl(217, 71%, 53%)"
                      : "#4a4a4a"}"
                  />
                </svg>
              </span>
              <span
                style="color: ${this.activeTab === "Execute"
                  ? "hsl(217, 71%, 53%)"
                  : "#4a4a4a"}"
                >Execute</span
              >
            </a>
          </li>
          <li
            class="${this.activeTab === "Result" ? "is-active" : ""}"
            @click="${() => this.changeTab("Result")}"
          >
            <a style="width: 90px">
              <span style="padding-right: 4px; height: 18px;">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="${mdiChartBoxOutline}"
                    fill="${this.activeTab === "Result"
                      ? "hsl(217, 71%, 53%)"
                      : "#4a4a4a"}"
                  />
                </svg>
              </span>
              <span
                style="color: ${this.activeTab === "Result"
                  ? "hsl(217, 71%, 53%)"
                  : "#4a4a4a"}"
                >Result</span
              >
            </a>
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
      <div class="block" style="margin-left: 20px; margin-right: 20px;">
        <div class="block">
          <label class="label">Run Name</label>
          <input
            class="input is-info"
            type="text"
            placeholder="Run Name"
            .value="${this.runName}"
            @input="${this.inputRunName}"
            style="box-sizing: border-box; max-width: 100%;"
          />
        </div>

        <div class="block flex-columns">
          <label class="label">Workflow Attachment</label>
          <div
            class="block"
            style="display: flex-columns; border: 1px solid #dbdbdb; border-radius: 4px;"
          >
            ${this.wfAttachments.map((file, i) => {
              return html`
                <div
                  class="attach-child code-font"
                  style="padding: 8px 12px; display: flex; justify-content: space-between;"
                >
                  <div>
                    ${file.target}
                    ${file.other
                      ? html`<span class="tag is-light is-rounded"
                          >Pre-Defined Test Data</span
                        >`
                      : html``}
                  </div>
                  ${!file.secondary
                    ? html`
                        <a
                          class="tag is-danger is-light"
                          @click=${() => this.deleteAttachment(i)}
                          style="width: 36px;"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18">
                            <path
                              d="${mdiDeleteOutline}"
                              fill="hsl(348, 86%, 43%)"
                            />
                          </svg>
                        </a>
                      `
                    : html``}
                </div>
              `
            })}
          </div>

          <div
            style="display: grid; grid-template-columns: 1fr 3fr 3fr 1fr; grid-gap: 20px; margin-bottom: 10px;"
          >
            <div
              class="label"
              style="align-self: center; margin-bottom: 0; margin-left: 40px; font-size: 14px; width: 80px;"
            >
              Local
            </div>
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  @change="${this.attachFile}"
                />
                <span class="file-cta" style="height: 24px;">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style="margin-right: 4px"
                  >
                    <path d="${mdiFileUploadOutline}" fill="#4a4a4a" />
                  </svg>
                  <span class="file-label">Select a file</span>
                </span>
              </label>
            </div>
            <input
              class="input is-info"
              type="text"
              placeholder="Target Path"
              .value="${this.wfAttUploadTarget}"
              @input="${this.inputUploadFileTarget}"
              style="box-sizing: border-box;"
            />
            <button
              class="button is-info is-light"
              @click="${this.addUploadFile}"
              style="width: 100%; box-sizing: border-box;"
            >
              Add
            </button>
          </div>
          <div
            style="margin-left: 20px; padding-bottom: 10px; border-top: 1px solid #dbdbdb;"
          ></div>
          <div
            style="display: grid; grid-template-columns: 1fr 3fr 3fr 1fr; grid-gap: 20px; align-items: center;"
          >
            <div
              class="label"
              style="align-self: center; margin-bottom: 0; margin-left: 40px; font-size: 14px; width: 80px;"
            >
              Remote
            </div>
            <input
              class="input is-info"
              type="text"
              placeholder="File URL (e.g., https://...)"
              .value="${this.wfAttFetchUrl}"
              @input="${this.inputFetchFileUrl}"
              style="box-sizing: border-box;"
            />
            <input
              class="input is-info"
              type="text"
              placeholder="Target Path"
              .value="${this.wfAttFetchTarget}"
              @input="${this.inputFetchFileTarget}"
              style="box-sizing: border-box;"
            />
            <button
              class="button is-info is-light"
              @click="${this.addFetchFile}"
              style="width: 100%; box-sizing: border-box;"
            >
              Add
            </button>
          </div>
        </div>

        <div class="block">
          <label class="label">Workflow Parameter</label>
          <textarea
            class="textarea is-info code-font"
            placeholder="Workflow Parameter"
            rows="14"
            .value="${this.wfParams}"
            @input="${this.inputWfParams}"
            style="box-sizing: border-box; max-width: 100%;"
          ></textarea>
        </div>
        <div
          class="block"
          style="display: flex; justify-content: flex-end; align-items: center;"
        >
          ${this.latestRun !== undefined
            ? html`<div
                class="label"
                style="margin-bottom: 0; margin-right: 20px;"
              >
                Executed with Run ID: ${this.latestRun?.id}
              </div>`
            : html``}
          <button
            class="button is-info ${this.executeLoading ? "is-loading" : ""}"
            @click="${this.executeWorkflow}"
          >
            ${this.executeLoading
              ? html``
              : html`
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style="padding-right: 8px;"
                  >
                    <path d="${mdiRocketLaunchOutline}" fill="#ffffff" />
                  </svg>
                `}
            Execute
          </button>
        </div>
      </div>
    `
  }

  resultTabRender() {
    return html`
      <div class="block" style="margin-left: 20px; margin-right: 20px;">
        <div
          class="block"
          style="display: flex; justify-content: space-between;"
        >
          <div style="display: flex; align-items: center;">
            <div class="select">
              <select
                .value="${this.selectedRun?.name}"
                @change="${this.selectRun}"
                style="boder-sizing: border-box;"
              >
                ${this.runs.map((run) => html`<option>${run.name}</option>`)}
              </select>
            </div>
            <div
              style="display: flex; height: 56px; padding-top: 16px; margin-left: 20px;"
            >
              <div style="align-self: center;">
                <span
                  class="tag is-medium ${this.selectedRunLog?.state ===
                  "COMPLETE"
                    ? "is-success"
                    : ["QUEUED", "INITIALIZING", "RUNNING", "PAUSED"].includes(
                        this.selectedRunLog?.state
                      )
                    ? "is-link"
                    : [
                        "EXECUTOR_ERROR",
                        "SYSTEM_ERROR",
                        "CANCELED",
                        "CANCELING",
                      ].includes(this.selectedRunLog?.state)
                    ? "is-danger"
                    : "is-light"}"
                  >${this.selectedRunLog?.state}</span
                >
              </div>
              <div
                class="label"
                style="margin-left: 20px; align-self: center; margin-bottom: 0; margin-right: 10px;"
              >
                Duration
              </div>
              ${this.selectedRunLog?.start_time
                ? html`
                    <div style="align-self: center;">
                      <span class="tag"
                        >${this.selectedRunLog.start_time
                          .replace("-", "/")
                          .replace("T", " ")}</span
                      >
                    </div>
                  `
                : html``}
              ${this.selectedRunLog?.end_time
                ? html`
                    <div style="align-self: center;">
                      <span
                        style="font-size: 16px; margin-left: 10px; margin-right: 8px;"
                        >-</span
                      >
                      <span class="tag"
                        >${this.selectedRunLog.end_time
                          .replace("-", "/")
                          .replace("T", " ")}</span
                      >
                    </div>
                  `
                : html``}
            </div>
          </div>
          <div style="display: flex; align-items: center; padding-top: 16px; ">
            <button
              class="button is-link is-light"
              style="box-sizing: border-box; margin-right: 20px;"
              @click="${() => this.fetchRunLog(this.selectedRun as Run)}"
            >
              Reload
            </button>
            <button
              class="button is-danger is-light"
              style="box-sizing: border-box;"
              @click="${() => this.removeRun(this.selectedRun as Run)}"
            >
              Remove
            </button>
          </div>
        </div>

        <div class="block">
          <label class="label">Output</label>
          ${this.selectedRunLog?.outputs
            ? html` <div
                class="block"
                style="display: flex-columns; border: 1px solid #dbdbdb; border-radius: 4px;"
              >
                ${this.selectedRunLog?.outputs?.map((file) => {
                  return html`
                    <div
                      class="attach-child code-font"
                      style="padding: 8px 12px; display: flex; justify-content: space-between;"
                    >
                      ${file.file_name}
                      <a
                        class="tag is-link"
                        href="${file.file_url}"
                        download="${file.file_name}"
                        style="width: 36px;"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18">
                          <path d="${mdiDownloadOutline}" fill="#ffffff" />
                        </svg>
                      </a>
                    </div>
                  `
                })}
              </div>`
            : html``}
        </div>
        <div class="block">
          <label class="label">Stdout</label>
          <textarea
            class="textarea is-info code-font"
            rows="20"
            .value="${this.selectedRunLog?.stdout}"
            style="box-sizing: border-box; max-width: 100%; font-size: 12px;"
            readonly
          ></textarea>
        </div>
        <div class="block">
          <label class="label">Stderr</label>
          <textarea
            class="textarea is-info code-font"
            rows="20"
            .value="${this.selectedRunLog?.stderr}"
            style="box-sizing: border-box; max-width: 100%; font-size: 12px;"
            readonly
          ></textarea>
        </div>
      </div>
    `
  }

  globalErrorNotification() {
    return html`
      <div class="notification is-danger is-light">${this.globalError}</div>
    `
  }

  apiErrorNotification() {
    return html`
      <div class="notification is-danger is-light">${this.apiError}</div>
    `
  }

  render() {
    return html`
      <div class="box" style="margin: 0 auto; border-radius: 12px;">
        <div style="margin: 20px;">
          <div class="content block">
            <h1 class="title">Neko-Punch 🐈👊</h1>
            <div class="block">
              <p class="subtitle">
                An execution interface, designed as a web component, for the
                effortless execution of workflows via GA4GH WES API.
              </p>
            </div>
          </div>
          <div
            class="header-details-container block"
            style="margin-left: 20px; margin-right: 20px;"
          >
            <div class="header-details">
              <div class="header-detail-key">WES Location</div>
              <div class="header-detail-value">
                <a href="${this.wesLocation}">${this.wesLocation}</a>
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Yevis Metadata URL</div>
              <div class="header-detail-value">
                <a href="${this.yevisMetadataUrl}">${this.yevisMetadataUrl}</a>
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow Name</div>
              <div class="header-detail-value">
                ${this.wfName} (${this.wfVersion})
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow License</div>
              <div class="header-detail-value">${this.wfLicense}</div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow Docs</div>
              <div class="header-detail-value">
                <a href="${this.wfReadme}">${this.wfReadme}</a>
              </div>
            </div>
          </div>
          ${this.globalError
            ? this.globalErrorNotification()
            : this.contentRender()}
          ${this.apiError ? this.apiErrorNotification() : html``}
        </div>
      </div>
    `
  }
}
