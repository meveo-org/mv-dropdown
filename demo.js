import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-button";
import "mv-font-awesome";
import "./mv-dropdown.js";

export class MvDropdownDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .main {
        display: flex;
        flex-direction: column;

      }

      mv-container {
        --mv-container-min-width: 300px;        
        --mv-container-margin: auto 0;
        --mv-container-padding: 20px 30px;        
      }

      .main > * + * {
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <div class="main">
        <mv-container>
          <mv-dropdown container hover>
            <mv-dropdown trigger><mv-button>Inside</mv-button></mv-dropdown>
            <mv-dropdown header>Header</mv-dropdown>
            <mv-dropdown content>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </mv-dropdown>
            <mv-dropdown header>Second Header</mv-dropdown>
            <mv-dropdown content>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </mv-dropdown>
            <mv-dropdown footer>Footer</mv-dropdown>
          </mv-dropdown>
        </mv-container>
        <mv-dropdown container>
          <mv-dropdown trigger><mv-button>Test</mv-button></mv-dropdown>
          <mv-dropdown header>Header</mv-dropdown>
          <mv-dropdown content>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </mv-dropdown>
          <mv-dropdown header>Second Header</mv-dropdown>
          <mv-dropdown content>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </mv-dropdown>
          <mv-dropdown footer>Footer</mv-dropdown>
        </mv-dropdown>
      </div>
    `;
  }
}

customElements.define("mv-dropdown-demo", MvDropdownDemo);
