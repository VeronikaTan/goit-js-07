import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");


const imgItem = galleryItems.map(item => {
    return `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </li>`
}).join("");
// Change code below this line


divGallery.insertAdjacentHTML("afterbegin", imgItem);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});



console.log(galleryItems);