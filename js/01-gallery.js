import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');


//create gallery
for (var image of galleryItems) {
  
  gallery.insertAdjacentHTML("beforeend", `
    <div class="gallery__item">
      <a  class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.desciption}" />
      </a>
    </div>
  `);
}

gallery.addEventListener('click', (event) => {
  
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt ="${event.target.alt}">`)
  console.log(event.target.dataset.source);
  instance.show();

  document.addEventListener("keydown", (event) => {
    const visible = basicLightbox.visible();
    if (visible && event.key === "Escape") {
      instance.close()
    }
  })
});


