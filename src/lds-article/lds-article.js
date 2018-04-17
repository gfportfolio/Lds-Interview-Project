class LdsArticle extends Polymer.Element {
  static get is() {
    return 'lds-article';
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
    this.sampleData = sampleArticleData;
  }
}

window.customElements.define(LdsArticle.is, LdsArticle);