
import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");


const imgItem = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`
}).join("");

divGallery.insertAdjacentHTML("afterbegin", imgItem);

let openImage;

divGallery.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
  openImage = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
openImage.show()
});


console.log(galleryItems);