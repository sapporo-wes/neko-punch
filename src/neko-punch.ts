import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("neko-punch")
export class NekoPunch extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `

  @property()
    sapporoLocation?: string = "http://localhost:1122"
  @property()
    workflowUrl?: string = undefined

  render() {
    return html`<p>Hello, ${this.sapporoLocation}!</p>`
  }
}
