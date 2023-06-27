import { LitElement, html, css } from "lit";

class NekoPunch extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--neko-punch-text-color, black);
    }
  `;

  render() {
    return html` <p>Hello, Lit!FooBarBaz!</p> `;
  }
}

customElements.define("neko-punch", NekoPunch);
