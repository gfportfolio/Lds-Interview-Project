/**
 * @customElement
 * @polymer
 */
class LdsArticle extends Polymer.Element {
  static get is() {
    return 'lds-article';
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

window.customElements.define(LdsArticle.is, LdsArticle);