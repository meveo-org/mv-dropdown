import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-button";
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
    `;
  }

  render() {
    return html`
      <div class="main">
        <mv-container>
          <div class="container">
            <div class="item top left">
              Test for
              <mv-dropdown container hover justify="left" position="bottom">
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header>Header</mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
              <mv-dropdown container justify="center" position="bottom">
                <mv-dropdown trigger><mv-button>Click</mv-button></mv-dropdown>
                <mv-dropdown header>
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
              <mv-dropdown container justify="right" position="bottom">
                <mv-dropdown trigger>
                  <mv-button type="circle">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header>Header</mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
                theme="light"
              >
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header theme="light">Header</mv-dropdown>
                <mv-dropdown content theme="light">
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
                <mv-dropdown header theme="light">Second Header</mv-dropdown>
                <mv-dropdown content theme="light">
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
                theme="light"
              >
                <mv-dropdown trigger><mv-button>Click</mv-button></mv-dropdown>
                <mv-dropdown header theme="light">
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content theme="light">
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
                <mv-dropdown header theme="light">Second Header</mv-dropdown>
                <mv-dropdown content theme="light">
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
                theme="light"
              >
                <mv-dropdown trigger>
                  <mv-button type="circle">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header theme="light">Header</mv-dropdown>
                <mv-dropdown content theme="light">
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
                <mv-dropdown header theme="light">Second Header</mv-dropdown>
                <mv-dropdown content theme="light">
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
              <mv-dropdown container hover justify="left" position="top">
                <mv-dropdown trigger>hoverable</mv-dropdown>
                <mv-dropdown header>Header</mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
              <mv-dropdown container justify="center" position="top">
                <mv-dropdown trigger><mv-button>Click</mv-button></mv-dropdown>
                <mv-dropdown header>
                  Header <span @click="${this.hideDropdown}">&#x2a2f;</span>
                </mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
              <mv-dropdown container justify="right" position="top">
                <mv-dropdown trigger>
                  <mv-button type="circle">
                    <b>&#8943;</b>
                  </mv-button>
                </mv-dropdown>
                <mv-dropdown header>Header</mv-dropdown>
                <mv-dropdown content>
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
                <mv-dropdown header>Second Header</mv-dropdown>
                <mv-dropdown content>
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
}

customElements.define("mv-dropdown-demo", MvDropdownDemo);
