/**
 * @customElement
 * @polymer
 */
class LdsArticleImageSlideshow extends Polymer.Element {
  static get is() {
    return 'lds-article-image-slideshow';
  }
  static get properties() {
    return {
      largeImageUrl: {
        type: String,
        value: 'src/sample-data/images/photo01.jpg'
      }
    };
  }
}

window.customElements.define(LdsArticleImageSlideshow.is, LdsArticleImageSlideshow);