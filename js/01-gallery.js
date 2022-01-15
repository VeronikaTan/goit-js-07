import { galleryItems } from './gallery-items.js';
// console.log(createGallery(galleryItems))

const galleryDiv = document.querySelector('.gallery')



const createGallery = () => {
   let markUp = galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
       .join('');
    
    galleryDiv.insertAdjacentHTML('beforeend', markUp);
}


function dontClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    } else {
        openImage = basicLightbox.create(`<img src="${evt.target.dataset.source}">`)
        openImage.show()
    }
}
galleryDiv.addEventListener('click', dontClick)

createGallery();
   
