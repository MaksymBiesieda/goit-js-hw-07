import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item => 
`<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`
).join('');
galeryEl.innerHTML = `${markup}`;

galeryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault(event);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } else {
       const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
    }
}

console.log(galleryItems);

