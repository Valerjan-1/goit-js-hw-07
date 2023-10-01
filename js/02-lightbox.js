import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(`.gallery`);
const imgList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join(``);
list.innerHTML = imgList;

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
  enableKeyboard: true,
});
