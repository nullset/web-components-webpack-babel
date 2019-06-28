import { LitElement, html } from "lit-element";

class AhaModal extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
    };
  }
  constructor() {
    super();
    // this.open = this.open || false;
  }
  connectedCallback() {
    super.connectedCallback();
    // console.log(this.shadowRoot.childNodes)
  }

  firstUpdated() {
    // const mainSlot = this.renderRoot.querySelector('slot');
    // debugger;
    // mainSlot.addEventListener('slotchange', (e) => {
    //   debugger
    // });
  }

  updated(lastProps) {
    if (this.open && this.open !== lastProps.open) {
      this.renderRoot.firstElementChild.showModal();
    } else if (!this.open && this.open !== lastProps.open) {
      this.renderRoot.firstElementChild.close();
    }
    // debugger
    // if (this.hasAttribute('open')) {
    //   this.renderRoot.firstElementChild.showModal();
    // }
  }

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    return html`
      <dialog>
        <div>
          <slot></slot>
        </div>
      </dialog>
    `;
  }
}
customElements.define("aha-modal", AhaModal);
