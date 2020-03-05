import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-button";
import "./mv-dropdown.js";

export class MvDropdownDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --mv-button-margin: 0;
      }

      mv-container {
        --mv-container-min-width: auto;
        --mv-container-max-width: 900px;
        --mv-container-margin: auto 0;
        --mv-container-padding: 20px 30px;
      }

      .main {
        display: flex;
        flex-direction: column;
        padding: 50px;
      }

      .main > * + * {
        margin-top: 20px;
      }

      .container {
        position: relative;
        width: 900px;
        height: 900px;
      }

      .item {
        position: absolute;
      }

      .top {
        top: 0;
      }

      .middle {
        top: calc(50% - 27px);
      }

      .bottom {
        bottom: 0;
      }

      .left {
        left: 0;
      }

      .center {
        left: calc(50% - 80px);
      }

      .right {
        right: 0;
      }

      .item.center > mv-dropdown {
        --mv-dropdown-trigger-height: 58px;
      }

      .item.right > mv-dropdown {
        --mv-dropdown-trigger-height: 60px;
      }
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius:8px;
        -webkit-border-radius:8px;	
        border-radius:8px;
        color: #818181;
        margin-bottom: 20px;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  render() {
    const { theme } = this;
    return html`
      <div class="main">
        <fieldset>
          <legend>Theme</legend>
          <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
          <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
        <mv-container .theme="${theme}">
          <div class="container">
            <div class="item top left">
              Test for
              <mv-dropdown container hover justify="left" position="bottom" .theme="${theme}">
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item top center">
              <mv-dropdown container justify="center" position="bottom" .theme="${theme}">
                <mv-dropdown trigger><mv-button .theme="${theme}">Click</mv-button></mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item top right">
              <mv-dropdown container justify="right" position="bottom" .theme="${theme}">
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item middle left">
              Test for
              <mv-dropdown
                container
                hover
                justify="left"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item middle center">
              <mv-dropdown
                container
                justify="center"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger><mv-button .theme="${theme}">Click</mv-button></mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item middle right">
              <mv-dropdown
                container
                justify="right"
                position="bottom"
                .theme="${theme}"
              >
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item bottom left">
              Test for
              <mv-dropdown container hover justify="left" position="top" .theme="${theme}">
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
              text
            </div>
            <div class="item bottom center">
              <mv-dropdown container justify="center" position="top" .theme="${theme}">
                <mv-dropdown trigger><mv-button .theme="${theme}">Click</mv-button></mv-dropdown>
                <mv-dropdown header .theme="${theme}">
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
            <div class="item bottom right">
              <mv-dropdown container justify="right" position="top" .theme="${theme}">
                <mv-dropdown trigger>
                  <mv-button type="circle" .theme="${theme}">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown header .theme="${theme}">Second Header</mv-dropdown>
                <mv-dropdown content .theme="${theme}">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                  </ul>
                </mv-dropdown>
                <mv-dropdown footer>Footer</mv-dropdown>
              </mv-dropdown>
            </div>
          </div>
        </mv-container>
      </div>
    `;
  }

  hideDropdown = event => {
    const { target } = event;
    target.dispatchEvent(
      new CustomEvent("close-mv-dropdown", { bubbles: true })
    );
  };

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-dropdown-demo", MvDropdownDemo);
