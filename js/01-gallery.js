import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", handleClick);

function createMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
               <li class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                  <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
                </a>
               </li>
      `
    )
    .join("");
}

const instance = basicLightbox.create(`
    <img width="1280" height="auto" src="">
`);

function handleClick(event) {
  event.preventDefault();
  const datasetSource = event.target.dataset.source;
  if (!datasetSource) {
    return;
  }
  instance.element().querySelector("img").src = datasetSource;

  instance.show();
}
