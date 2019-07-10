// TODO:
// loading


import { LitElement, html, css, unsafeCSS } from 'lit-element';
// import { classMap } from 'lit-html/directives/class-map';
import cc from 'classcat';
import dialogPolyfill from 'dialog-polyfill';
// import styles from './aha-modal.less';

import polyfillStyles from '../node_modules/dialog-polyfill/dist/dialog-polyfill';


let stackingIndex = 0;

class AhaModal extends LitElement {
  // static get styles() {
  //   return css`${unsafeCSS(styles.toString())}`;
  // }

  // static get styles() {
  //   return css`${unsafeCSS(polyfillStyles)}`;
  // }

  // static get styles() {
  //   return css`dialog {
  //     position: absolute;
  //     left: 0; right: 0;
  //     width: -moz-fit-content;
  //     width: -webkit-fit-content;
  //     width: fit-content;
  //     height: -moz-fit-content;
  //     height: -webkit-fit-content;
  //     height: fit-content;
  //     margin: auto;
  //     border: solid;
  //     padding: 1em;
  //     background: white;
  //     color: black;
  //     display: block;
  //   }
    
  //   dialog:not([open]) {
  //     // display: none;
  //   }
    
  //   dialog + .backdrop {
  //     position: fixed;
  //     top: 0; right: 0; bottom: 0; left: 0;
  //     background: rgba(0,0,0,0.1);
  //   }
    
  //   ._dialog_overlay {
  //     position: fixed;
  //     top: 0; right: 0; bottom: 0; left: 0;
  //   }
    
  //   dialog.fixed {
  //     position: fixed;
  //     top: 50%;
  //     transform: translate(0, -50%);
  //   }`;
  // }

  static get styles() {
    return css`
//     :host.is-top[open] {  -webkit-box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.2);
//       box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.2);
// }
.aha-modal2 {
opacity: 0.1;
position: fixed;
padding: 0;
top: 0;
left: 0;
border: none;
width: 100vw !important;
height: 100vh !important;
background: none;
-webkit-box-sizing: border-box;
      box-sizing: border-box;
}
.aha-modal2[open] {
opacity: 1;
border: 1px solid red;
}
// .aha-modal--top[open]:before {
// background: rgba(0, 0, 0, 0.5);
// content: \"\";
// position: fixed;
// z-index: -1;
// top: 0;
// left: 0;
// height: 100vh;
// width: 100vw;
// }
// .aha-modal--top[open] .aha-modal__inner {
// -webkit-box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.2);
//       box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.2);
// }
// .aha-modal--is-dragging {
// -webkit-user-select: none;
//  -moz-user-select: none;
//   -ms-user-select: none;
//       user-select: none;
// }
// .aha-modal__inner {
// border: 1px solid #e1e0dc;
// display: -webkit-inline-box;
// display: -ms-inline-flexbox;
// display: inline-flex;
// -webkit-box-orient: vertical;
// -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//       flex-direction: column;
// background: #fff;
// position: absolute;
// width: 800px;
// max-width: 94vw;
// max-height: 94vh;
// border-radius: 4px;
// left: 50%;
// top: 40px;
// -webkit-transform: translate(-50%, 0%);
//       transform: translate(-50%, 0%);
// }
// .aha-modal__inner--center {
// top: 50%;
// -webkit-transform: translate(-50%, -50%);
//       transform: translate(-50%, -50%);
// }
// .aha-modal__inner--mini {
// width: 400px;
// }
// .aha-modal__inner--small {
// width: 600px;
// }
// .aha-modal__inner--medium,
// .aha-modal__inner .modal-big {
// width: 800px;
// }
// .aha-modal__inner--large {
// width: 1200px;
// }
// .aha-modal__inner--max,
// .aha-modal__inner .modal-massive {
// min-width: 800px;
// width: 94vw;
// }
// .aha-modal__inner--flex,
// .aha-modal__inner .modal-flex {
// width: auto;
// }
// .aha-modal__inner--max-height {
// bottom: 40px;
// }
// .aha-modal__inner--fullscreen {
// border-radius: 0 !important;
// border: none !important;
// max-width: initial !important;
// max-height: initial !important;
// width: 100vw !important;
// height: 100vh !important;
// top: 0 !important;
// right: 0 !important;
// bottom: 0 !important;
// left: 0 !important;
// -webkit-transform: translate(0, 0) !important;
//       transform: translate(0, 0) !important;
// }
// .aha-modal__inner > form {
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-orient: vertical;
// -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//       flex-direction: column;
// -webkit-box-flex: 1;
//   -ms-flex-positive: 1;
//       flex-grow: 1;
// margin: 0;
// }
// .aha-modal__loading-indicator {
// padding: 10px 15px;
// text-align: center;
// }
// .aha-modal__loading-indicator:before {
// content: \"Loading...\";
// }
// .aha-modal__loading-indicator + .aha-modal__body,
// .aha-modal__loading-indicator + slot:not([name]) {
// visibility: hidden;
// }
// .aha-modal__body:not([hidden]) > .aha-modal__loading-indicator {
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// }
// .aha-modal__body:not([hidden]) > .aha-modal__loading-indicator + * {
// visibility: hidden;
// }
// .aha-modal__body:not([hidden]) ~ .aha-modal__loading-indicator {
// display: none;
// }
// .aha-modal__header,
// .aha-modal__footer {
// -ms-flex-negative: 0;
//   flex-shrink: 0;
// background: #f5f5f5;
// }
// .aha-modal__header,
// .aha-modal__body,
// .aha-modal__footer {
// position: relative;
// }
// .aha-modal__header[hidden],
// .aha-modal__body[hidden],
// .aha-modal__footer[hidden] {
// display: none;
// }
// .aha-modal__header {
// padding: 5px 15px;
// border-top-left-radius: 4px;
// border-top-right-radius: 4px;
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-pack: justify;
//   -ms-flex-pack: justify;
//       justify-content: space-between;
// }
// .aha-modal__header .close {
// -ms-flex-item-align: center;
//   align-self: center;
// margin: 0 -1ch 0 1ch;
// padding: 1px 1ch;
// opacity: 0.3;
// border: none;
// background: none;
// font-size: 16px;
// cursor: pointer;
// position: relative;
// background: gray;
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-pack: center;
//   -ms-flex-pack: center;
//       justify-content: center;
// -webkit-box-align: center;
//   -ms-flex-align: center;
//       align-items: center;
// }
// .aha-modal__header .close:focus,
// .aha-modal__header .close:hover {
// opacity: 1;
// outline: none;
// }
// .aha-modal__body {
// -webkit-box-flex: 1;
//   -ms-flex-positive: 1;
//       flex-grow: 1;
// overflow: hidden auto;
// max-height: calc(94vh - 101px);
// padding: 10px 15px;
// }
// .aha-modal__footer {
// border-bottom-left-radius: 4px;
// border-bottom-right-radius: 4px;
// padding: 10px 15px;
// }
// .aha-modal__close {
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-align: center;
//   -ms-flex-align: center;
//       align-items: center;
// padding-left: 10px;
// }
// .aha-modal__close-button {
// -ms-flex-item-align: center;
//   align-self: center;
// margin: 0 -1ch 0 1ch;
// padding: 1px 1ch;
// opacity: 0.3;
// border: none;
// background: none;
// font-size: 16px;
// cursor: pointer;
// position: relative;
// background: gray;
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// -webkit-box-pack: center;
//   -ms-flex-pack: center;
//       justify-content: center;
// -webkit-box-align: center;
//   -ms-flex-align: center;
//       align-items: center;
// margin-right: -10px;
// }
// .aha-modal__close-button:focus,
// .aha-modal__close-button:hover {
// opacity: 1;
// outline: none;
// }
  
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      center: { type: Boolean, reflect: true },
      loading: { type: Boolean, reflect: true },
      preventDrag: { type: Boolean, reflect: true, attribute: 'prevent-drag' },
      preventCancel: { type: Boolean, reflect: true, attribute: 'prevent-cancel' },
      noCloseButton: { type: Boolean, reflect: true, attribute: 'no-close-button' },
      class: { type: String, reflect: true },
      top: { type: Boolean, reflect: true },
      transformMatrix: { type: Array },
      isDragging: { type: Boolean },
      stackOrder: { type: Number },
      size: { type: String },
    };
  }

  constructor() {
    super();
    this.host = this.shadowRoot;
    this.isDragging = false;
    this.ref;
  }

  set html(val) {
    const fragment = document.createRange().createContextualFragment(val);
    this.innerHTML = '';
    this.appendChild(fragment);
  }

  setPart(content, partName) {
    let oldSlot;
    if (content) {
      const fragment = document.createRange().createContextualFragment(content);
      oldSlot = this.querySelector(`*[slot="${partName}"]`);
      const newSlot = fragment.firstElementChild;
      newSlot.setAttribute('slot', partName);
      if (oldSlot) {
        oldSlot.parentElement.replaceChild(newSlot, oldSlot);  
      } else {
        oldSlot = document.createElement('div');
        oldSlot.setAttribute('slot', partName);
        oldSlot.appendChild(fragment);
        this.appendChild(oldSlot);
      }
    }

    // Clear out any content within the blank slot.
    const blankSlot = this.querySelector(':scope > *:not([slot])');
    if (blankSlot) this.removeChild(blankSlot);
  }

  set header(val) {
    this.setPart(val, 'header');
  }

  set body(val) {
    this.setPart(val, 'body');
  }

  set footer(val) {
    this.setPart(val, 'footer');
  }

  firstUpdated() {
    // Register polyfill for IE11/Safari.
    this.ref = this.host.firstElementChild;
    dialogPolyfill.registerDialog(this.ref);

    // Hide/show pre-defined slots as they are filled.
    let slots = this.shadowRoot.querySelectorAll('slot');
    for (let slot of slots) {
      slot.addEventListener('slotchange', function(e) {
        if (slot.assignedNodes().length > 0) {
          slot.parentNode.removeAttribute('hidden');
        } else {
          slot.parentNode.setAttribute('hidden', '');
        }
      });
    }
  }

  updated(lastProps) {
    // The "show" method needs to call a JS showModal() function and must call it only after the element
    // is in the DOM, therefore we must watch the updated "open" property and respond appropriately.
    const keys = Array.from(lastProps.keys());
    if (keys.indexOf('open') !== -1) {
      if (this.open && this.open !== lastProps.open) {
        this.handleOpen();
      } else if (!this.open && this.open !== lastProps.open) {
        this.handleClose();
      }
    }
  }

  focusAndPrefetch() {
    Array.from(
      this.ref.querySelectorAll(
        '.selectro-trigger[data-fetch]:not([data-selectro-prefetch="false"])'
      )
    ).forEach(trigger => {
      window.SelectroHelper.preFetch(trigger);
    });
  
    // Focus on first form element.
    const focusableElem = this.ref.querySelector('*[data-create-and-new]');
    if (focusableElem) {
      focusableElem.focus();
    } else {
      const form = this.ref.querySelector('form .modal-body');
      if (form) {
        form
          .querySelector('button, select, input:not([type="hidden"]), textarea')
          .focus();
      }
    }
  }

  handleOpen() {
    // Ensure that the most recently opened modal is the "top" modal in z-index stacking order.
    for (const elem of document.querySelectorAll('aha-modal')) {
      if (elem !== this.ref) elem.top = false;
    }
    this.top = true;
    stackingIndex++;
    this.stackOrder = stackingIndex;

    this.focusAndPrefetch(this.ref);

    this.ref.showModal();
    // NOTE: IE11 does not run any code after .showModal() is called. WTF?
    requestAnimationFrame(() => {
      this.roundTransform();
    });
  }

  handleClose() {
    this.open = false;
    this.ref.close();
    this.openedAt = undefined;
    this.transformMatrix = undefined;
    this.stackOrder = null;
    this.top = false;
    this.makeLastOpenedModalTop();
  }

  // Ensure that the most recently opened modal is the "top" modal in z-index stacking order when the top-most modal is closed.
  makeLastOpenedModalTop() {
    let lastTopModal;
    let lastStackOrder = 0;
    for (const elem of document.querySelectorAll('aha-modal')) {
      if (elem !== this.ref && elem.stackOrder > lastStackOrder) {
        lastStackOrder = elem.stackOrder;
        lastTopModal = elem;
      }
    }
    if (lastTopModal) {
      lastTopModal.top = true;
    }
  }
  

  // Give modal the ability to be "un-cancellable" when the user presses "esc" key.
  handleCancel(e) {
    e.preventDefault();
    if (!this.preventCancel) {
      // Set "open" property so that property is reflected to attribute.
      this.open = false;
    }
  }

  // Ensure that transform: translate does not cause Chrome rounding error
  // which results in fuzzy text.
  roundTransform() {
    // const styles = window.getComputedStyle(this.ref.firstElementChild, null);
    // const transform =
    //   styles.getPropertyValue('transform') ||
    //   styles.getPropertyValue('-webkit-transform') ||
    //   styles.getPropertyValue('-moz-transform') ||
    //   styles.getPropertyValue('-ms-transform') ||
    //   styles.getPropertyValue('-o-transform') ||
    //   false;
    // if (transform) {
    //   const values = transform.match(/-?\d+\.?\d*/g).map(v => Math.round(v));
    //   this.transformMatrix = values;
    // }
  }

  handleBeginDrag(e) {
    if (
      !this.preventDrag &&
      e.target.dataset.drag !== 'false' &&
      !document.body.classList.contains('aha-fullscreen') &&
      !document.body.classList.contains('mce-fullscreen')
    ) {
      this.isDragging = true;

      const pageX = e.pageX;
      const pageY = e.pageY;
      const matrixX = this.transformMatrix[4];
      const matrixY = this.transformMatrix[5];

      const mouseMoveListener = e => {
        const deltaX = e.pageX - pageX;
        const deltaY = e.pageY - pageY;
        this.transformMatrix = [
          this.transformMatrix[0],
          this.transformMatrix[1],
          this.transformMatrix[2],
          this.transformMatrix[3],
          matrixX + deltaX,
          matrixY + deltaY,
        ];
      }
      this.ref.addEventListener('mousemove', mouseMoveListener);

      this.ref.addEventListener('mouseup', e => {
        this.isDragging = false;
        this.ref.removeEventListener('mousemove', mouseMoveListener);
        this.roundTransform();
      }, { once: true });
    }
  }

  render() {
    const classes = {
      'aha-modal2': true,
      'aha-modal--open': this.open,
      'aha-modal--top': this.top,
      'aha-modal--is-dragging': this.isDragging,
    }

    const innerClasses = {
      'aha-modal__inner': true,
      [`aha-modal__inner--${this.size}`]: this.size ? true : false,
      'aha-modal__inner--center': this.center,
      'aha-modal__inner--loading': this.loading,
    }

    // Must convert any other class names to an array to ensure that setter works with DOMTokenList.
    if (this.class) {
      this.class.split(' ').forEach((name) => {
        innerClasses[name] = true;
      });  
    }

    const loading = this.loading ? html`<div class="aha-modal__loading-indicator"></div>` : null;


    return html`
      <dialog class="${cc(classes)}" open @cancel="${this.handleCancel}">
        <div class="${cc(innerClasses)}" style="${this.transformMatrix ? `transform: matrix(${this.transformMatrix});` : ''}">
          <div class="aha-modal__header modal-header" hidden @mousedown="${this.handleBeginDrag}">
            <slot name="header"></slot>
            ${this.noCloseButton ? null : html`<div class="aha-modal__close"><button type="button" class="aha-modal__close-button" @click="${this.handleClose}">&times;</button></div>`}
          </div>
          <div class="aha-modal__body modal-body" hidden>
            ${loading}
            <slot name="body"></slot>
          </div>
          <div class="aha-modal__footer modal-footer" hidden>
            <slot name="footer"></slot>
          </div>
          ${loading}
          <slot></slot>
        </div>
      </dialog>
    `;
  }
}
customElements.define("aha-modal", AhaModal);
