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
      largeImage: {
        type: Object,
      },
      images: {
        type: Array,
        observer: '_imagesChanged'
      }
    };
  }
  _imagesChanged(images) {
    if (!images)
      return;
    this.largeImage = images[0];
  }
  changeImage(element) {
    let clickedImage = element.currentTarget.dataArgs;
    this.largeImage = clickedImage;
  }
}

window.customElements.define(LdsArticleImageSlideshow.is, LdsArticleImageSlideshow);