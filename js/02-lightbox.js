import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

for (var image of galleryItems) {
  
  gallery.insertAdjacentHTML("beforeend", `
   <a class="gallery__item" href="${image.original}">
  <img class="gallery__image"src="${image.preview}" alt="${image.desciption}" />
</a>
  `);
}

var lightbox = new SimpleLightbox('.gallery a', { 
        captionDelay: 250,
        captionSelector: 'alt',
        captionType: 'attr',
        captionsData: 'title',
        captionPosition: 'bottom',
        captionClass: '',
 });
