/**
 * @customElement
 * @polymer
 */
class LdsTitle extends Polymer.Element {
  static get is() {
    return 'lds-title';
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lds-title'
      }
    };
  }
}

window.customElements.define(LdsTitle.is, LdsTitle);