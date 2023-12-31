import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(`.gallery`);
const imgList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join(``);
list.insertAdjacentHTML(`afterbegin`, imgList);
console.dir(list);

list.addEventListener(`click`, showOriginalImage);

function showOriginalImage(event) {
  event.preventDefault();
  const originalImage = event.target.dataset.source;

  const galleryItem = galleryItems.find(
    ({ original }) => original === originalImage
  );
  const instance = basicLightbox.create(
    `
  	<img class="gallery__image js-close-img" src="${galleryItem.original}" alt="${galleryItem.description}">
  `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", modalClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", modalClose);
      },
    }
  );

  instance.show();
  function modalClose(evt) {
    // console.log(event.code);
    if (evt.code !== "Escape") return;
    instance.close();
  }
}
