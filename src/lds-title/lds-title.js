class LdsTitle extends Polymer.Element {
  static get is() {
    return 'lds-title';
  }
  static get properties() {
    return {
      sampleData: {
        type: Object,
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.sampleData = sampleTitleData;
  }
}

window.customElements.define(LdsTitle.is, LdsTitle);