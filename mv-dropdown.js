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
      hidden: { type: Boolean, attribute: false },

      // valid justify values are: left, center, right
      // default value: left
      justify: { type: String, attribute: true },

      // valid position values are: top, bottom
      // default value: bottom
      position: { type: String, attribute: true },

      // valid theme values are: light, dark
      // default value: dark
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
			:host {
				font-family: var(--font-family, Arial);
				font-size: var(--font-size-m, 10pt);
        --trigger-height: var(--mv-dropdown-trigger-height, 26px);
        --trigger-padding: var(--mv-dropdown-trigger-padding, 5px);
        --min-width: var(--mv-dropdown-min-width, 188px);
        --max-width: var(--mv-dropdown-max-width, 300px);
        --content-max-height: var(--mv-dropdown-content-max-height, 150px);
        --content-margin: var(--mv-dropdown-content-margin, 0); 
        --header-padding: var(--mv-dropdown-header-padding, 5px 15px);
      }

      @-webkit-keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity:1 ;}
      }

      .mv-dropdown-container {
        display: inline-block;
        position: relative;
        padding: var(--trigger-padding) 0;
      }

      .mv-dropdown-container:hover {
        cursor: pointer;
      }

      .mv-dropdown {
        min-width: var(--min-width);
        max-width: var(--max-width);
        border: var(--mv-dropdown-border, 1px solid #1E3843);
        background: var(--mv-dropdown-background, #3F4753);
        color: var(--mv-dropdown-color, #999999);
        position: absolute;
        border-radius: 5px;
        box-shadow: 0 0 20px 1px rgba(93, 94, 97, 0.35);
        z-index: 10;
        visibility: visible;
        -webkit-animation: fadeIn 0.3s;
        animation: fadeIn 0.3s;
      }

      .mv-dropdown.light {
        border: var(--mv-dropdown-light-border, 1px solid #4E686D);
        background: var(--mv-dropdown-light-background, #FFFFFF);
        color: var(--mv-dropdown-light-color, #818181);
      }

      .mv-dropdown.top{
        bottom: var(--trigger-height);
      }

      .mv-dropdown.bottom{
        top: var(--trigger-height);
      }

      .mv-dropdown-slot-container {
        position: relative;
        display: flex;        
        flex-direction: column;
      }

      .mv-dropdown-slot-container.top {
        justify-content: flex-end;
      }

      .mv-dropdown-slot-container.bottom {
        justify-content: flex-start;
      }

      .mv-dropdown-slot-container.left {
        align-items: flex-start;        
      }

      .mv-dropdown-slot-container.center {
        align-items: center;
      }

      .mv-dropdown-slot-container.right {
        align-items: flex-end;
      }
      
      .mv-dropdown-header {
        color: var(--mv-dropdown-header-color, #FFFFFF);
        box-shadow:  0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: var(--header-padding);
      }

      .mv-dropdown-header.light {
        color: var(--mv-dropdown-header-light-color, #000000);        
      }

      .mv-dropdown-footer {
        box-shadow:  0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: 5px 15px;
      }

      .mv-dropdown-content {
        overflow: auto;
        max-height: var(--content-max-height);
      }

      .mv-dropdown-content.scrollbar {
        width: calc(100% - 8px);
        float: left;
        overflow-y: auto;
        margin: 0;
        // fallback for firefox
        scrollbar-color: #5A6473 #788394;
        scrollbar-width: thin;
        margin: var(--content-margin);
      }

      .mv-dropdown-content.scrollbar:focus {
        outline: transparent auto 0;
      }
    
      .mv-dropdown-content.scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }
    
      .mv-dropdown-content.scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }
    
      .mv-dropdown-content.scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5A6473;
      }
    
      .mv-dropdown-content.scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1D9BC9 #EAEBF0 !important;
      }

      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #EAEBF0 !important;
      }
  
      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar {
        background-color: #1D9BC9;
      }
  
      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008FC3;
      }

      .hidden {
        display: none;
        visibility: hidden;
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
    this.justify = "left";
    this.position = "bottom";
    this.theme = "dark";
  }

  render() {
    const { hidden, position, justify, theme } = this;
    const hiddenClass = hidden ? " hidden" : "";
    const positionClass = position || "bottom";
    const justifyClass = justify || "left";
    const dropdownClass = `mv-dropdown${hiddenClass} ${positionClass} ${theme}`;
    const slotClass = `mv-dropdown-slot-container ${positionClass} ${justifyClass}`;

    if (this.container) {
      return html`
        <mv-click-away @clicked-away="${this.hideDropdown}">
          <div
            class="mv-dropdown-container"
            @mouseup="${this.triggerClicked}"
            @mouseenter="${this.triggerMouseOver}"
            @mouseleave="${this.triggerMouseOut}"
          >
            <div class="${slotClass}">
              <div class="mv-dropdown-trigger">
                <slot name="trigger"></slot>
              </div>
              <div class="${dropdownClass}">              
                  <slot></slot>
              </div>
            </div>
          </div>
        </mv-click-away>
      `;
    }
    if (this.header) {
      return html`
        <div class="mv-dropdown-header ${theme}">
          <slot></slot>
        </div>
      `;
    }
    if (this.footer) {
      return html`
        <div class="mv-dropdown-footer ${theme}">
          <slot></slot>
        </div>
      `;
    }
    if (this.content) {
      return html`
        <div class="mv-dropdown-content scrollbar ${this.theme}">
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

  hideDropdown = () => {
    this.hidden = true;
  };

  triggerClicked = () => {
    if (this.hidden && !this.hover) {
      this.hidden = false;
    }
  };

  triggerMouseOver = () => {
    if (this.hover) {
      this.hidden = false;
    }
  };

  triggerMouseOut = () => {
    if (this.hover) {
      this.hidden = true;
    }
  };
}

customElements.define("mv-dropdown", MvDropdown);
