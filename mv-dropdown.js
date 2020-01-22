import { LitElement, html, css } from "lit-element";
import "mv-click-away";

export class MvDropdown extends LitElement {
  static get properties() {
    return {
      container: { type: Boolean, attribute: true },
      trigger: { type: Boolean, attribute: true },
      header: { type: Boolean, attribute: true },
      footer: { type: Boolean, attribute: true },
      content: { type: Boolean, attribute: true },
      hover: { type: Boolean, attribute: true },
      hidden: { type: Boolean, attribute: false }
    };
  }

  static get styles() {
    return css`
			:host {
				font-family: var(--font-family, Arial);
				font-size: var(--font-size-m, 10pt);
      }

      .mv-dropdown {
        min-width: var(--mv-dropdown-min-width, 0);
        max-width: var(--mv-dropdown-max-width, 188px);
        margin: 0;
        padding: var(--mv-dropdown-padding, 0);
        border: var(--mv-dropdown-border, 1px solid #1E3843);
        background: var(--mv-dropdown-background, #3F4753);
        color: var(--mv-dropdown-color, #999999);
        border-radius: 5px;
        box-shadow: 0 0 20px 1px rgba(93, 94, 97, 0.35);
      }

      .mv-dropdown-header {
        color: var(--mv-dropdown-header-color, #FFFFFF);
        box-shadow:  0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: 5px 15px;
      }

      .mv-dropdown-footer {
        box-shadow:  0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: 5px 15px;
      }

      .hidden {
        display: none;
        opacity: 0;
      }
		`;
  }

  constructor() {
    super();
    this.trigger = false;
    this.header = false;
    this.footer = false;
    this.content = false;
    this.container = false;
    this.hover = false;
    this.hidden = true;
  }

  render() {
    console.log("this.hover :", this.hover);
    const dropdownClass = `mv-dropdown${this.hidden ? " hidden" : ""}`;
    if (this.container) {
      return html`
        <span
          @mouseup="${this.triggerClicked}"
          @mouseenter="${this.triggerMouseOver}"
          @mouseleave="${this.triggerMouseOut}"
        >
          <slot name="trigger"></slot>        
          <mv-click-away @clicked-away="${this.hideDropdown}">
            <div class="${dropdownClass}">
              <slot></slot>
            </div>
          </mv-click-away>
        </span>
      `;
    }
    if (this.header) {
      return html`
        <div class="mv-dropdown-header">
          <slot></slot>
        </div>
      `;
    }
    if (this.footer) {
      return html`
        <div class="mv-dropdown-footer">
          <slot></slot>
        </div>
      `;
    }
    if (this.content) {
      return html`
        <div class="mv-dropdown-content">
          <slot></slot>
        </div>
      `;
    }
    return html`<slot></slot>`;
  }

  connectedCallback() {
    if (this.trigger) {
      this.setAttribute("slot", "trigger");
    }
    super.connectedCallback();
  }

  toggleHidden = () => {
    this.hidden = !this.hidden;
  };

  hideDropdown = () => {
    this.hidden = true;
  };

  triggerClicked = () => {
    console.log("triggerClicked");
    if (this.hidden && !this.hover) {
      this.hidden = false;
    }
  };

  triggerMouseOver = () => {
    console.log("triggerMouseOver");
    console.log("this.hover :", this.hover);
    if (this.hover) {
      this.hidden = false;
    }
  };

  triggerMouseOut = () => {
    console.log("triggerMouseOut");
    console.log("this.hover :", this.hover);
    if (this.hover) {
      this.hidden = true;
    }
  };
}

customElements.define("mv-dropdown", MvDropdown);
