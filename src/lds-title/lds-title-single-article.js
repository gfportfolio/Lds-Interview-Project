/**
 * @customElement
 * @polymer
 */
class LdsTitleSingleArticle extends Polymer.Element {
  static get is() {
    return 'lds-title-single-article';
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

window.customElements.define(LdsTitleSingleArticle.is, LdsTitleSingleArticle);