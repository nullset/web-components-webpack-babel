// TODO:
// loading


import { LitElement, html, css, unsafeCSS } from 'lit-element';
// import { classMap } from 'lit-html/directives/class-map';
import cc from 'classcat';
import dialogPolyfill from 'dialog-polyfill';
import styles from './aha-modal.less';

// import polyfillStyles from '../node_modules/dialog-polyfill/dist/dialog-polyfill';

console.log(styles.toString())

let stackingIndex = 0;

class AhaModal extends LitElement {
  static get styles() {
    return css`${unsafeCSS(styles.toString())}`;
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
    const styles = window.getComputedStyle(this.ref.firstElementChild, null);
    const transform =
      styles.getPropertyValue('transform') ||
      styles.getPropertyValue('-webkit-transform') ||
      styles.getPropertyValue('-moz-transform') ||
      styles.getPropertyValue('-ms-transform') ||
      styles.getPropertyValue('-o-transform') ||
      false;
    if (transform) {
      const values = transform.match(/-?\d+\.?\d*/g).map(v => Math.round(v));
      this.transformMatrix = values;
    }
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
      'wc': true,
      'wc--open': this.open,
      'wc--top': this.top,
      'wc--is-dragging': this.isDragging,
    }

    const innerClasses = {
      'wc__inner': true,
      [`wc__inner--${this.size}`]: this.size ? true : false,
      'wc__inner--center': this.center,
      'wc__inner--loading': this.loading,
    }

    // Must convert any other class names to an array to ensure that setter works with DOMTokenList.
    if (this.class) {
      this.class.split(' ').forEach((name) => {
        innerClasses[name] = true;
      });  
    }

    const loading = this.loading ? html`<div class="wc__loading-indicator"></div>` : null;


    return html`
      <dialog class="${cc(classes)}" @cancel="${this.handleCancel}">
        <div class="${cc(innerClasses)}" style="${this.transformMatrix ? `transform: matrix(${this.transformMatrix});` : ''}">
          <div class="wc__header modal-header" hidden @mousedown="${this.handleBeginDrag}">
            <slot name="header"></slot>
            ${this.noCloseButton ? null : html`<div class="wc__close"><button type="button" class="wc__close-button" @click="${this.handleClose}">&times;</button></div>`}
          </div>
          <div class="wc__body modal-body" hidden>
            ${loading}
            <slot name="body"></slot>
          </div>
          <div class="wc__footer modal-footer" hidden>
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
