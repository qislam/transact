import {html, css, LitElement} from 'lit'

export class TransactAccountList extends LitElement {
  static properties = {
    accounts: []
  }
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
    `
  }

  render() {
    if (!this.accounts) {
      return html`<p>No accounts found</p>`;
    }
    return html`
      <p>Accounts List</p>
        ${this.accounts.map(account => html`
          <p><b>${account.name}</b> - ${account.balance}</p>
        `)}
    `;
  }
}

customElements.define('transact-account-list', TransactAccountList);