import { html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

import { bulmaStyles } from "./bulma"

@customElement("neko-punch")
export class NekoPunch extends LitElement {
  static styles = [bulmaStyles]

  @property({ attribute: "sapporo-location", type: String })
  sapporoLocation?: string = "http://localhost:1122"
  @property({ attribute: "workflow-url", type: String })
  workflowUrl?: string = undefined

  render() {
    return html`
      <div>
        <p>🐈👊</p>
        <div>SapporoLocation: ${this.sapporoLocation}</div>
        <div>WorkflowUrl: ${this.workflowUrl}</div>
        <div class="columns">
          <div class="column is-half">
            <h1>Hello, Bulma!</h1>
            <div class="buttons">
              <button class="button is-primary">Primary</button>
              <button class="button is-link">Link</button>
            </div>

            <div class="buttons">
              <button class="button is-info">Info</button>
              <button class="button is-success">Success</button>
              <button class="button is-warning">Warning</button>
              <button class="button is-danger">Danger</button>
            </div>
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Bulma</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Components</a>
                </li>
                <li class="is-active">
                  <a href="#" aria-current="page"> Breadcrumb </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `
  }
}
