/**
 * @customElement
 * @polymer
 */
class LdsInterviewApp extends Polymer.Element {
  static get is() {
    return 'lds-interview-app';
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lds-interview-app'
      }
    };
  }
}

window.customElements.define(LdsInterviewApp.is, LdsInterviewApp);