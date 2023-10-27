import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");


list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryContainer.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target == event.currentTarget) {
    return;
  }
  const currentImg = event.target.closest(".gallery__item");
}

function createMarkup(items) {
    return items
      .map(({ preview, original, description }) => `
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
      `).join("");
}


 