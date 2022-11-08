import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
let instance;

//create gallery
for (var image of galleryItems) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
      <a  class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.desciption}" />
      </a>
    </div>
  `
  );
}

//modal
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  //avoid the image previewing when we click between the images
  if (event.target.nodeName !== "IMG") {
    return;
  }

  //light box create and show
  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt ="${event.target.alt}">`
  );
  console.log(event.target.dataset.source);
  instance.show();
});

// on esc close
document.addEventListener("keydown", (event) => {
  const visible = basicLightbox.visible();
  if (visible && event.key === "Escape") {
    console.log("Esc klikniety!");
    instance.close();
  }
});
