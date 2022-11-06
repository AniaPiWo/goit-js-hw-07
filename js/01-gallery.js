import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

for (var image of galleryItems) {
  
  gallery.insertAdjacentHTML("beforeend", `
    <div class="gallery__item">
      <a  class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.desciption}" />
      </a>
    </div>
  `);
}

const instance = basicLightbox.create('', {
  className: 'lightbox',
});

const elem = instance.element();

document.querySelectorAll('.gallery__item').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    makeLightbox(
      item.querySelectorAll('a')[0].href
    );
    
  });
});

function makeLightbox(url) {
  
  elem.innerHTML = lightboxHtml(url);
  instance.show();
  
	document.onkeydown = function(evt) {
		evt = evt || window.event;
		var isEscape = false;
		if ( "key" in evt ) {
			isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
		} else {
			isEscape = ( evt.keyCode === 27 );
		}
		if ( isEscape ) {
			instance.close();
		}
	};
  
}

function lightboxHtml(url) {
  let htmlValue = `
    <figure id="lightboxContent" class="lightbox-figure">
      <img class="lightbox-img" src="${url}" />
    </figure>
    `;
  return htmlValue;
}