import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item => 
`<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a></div>`
).join('');
galeryEl.innerHTML = `${markup}`;

galeryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault(event);
    window.addEventListener('keydown', onEscDown);
    const instance = basicLightbox.create(`<img  src="${event.target.getAttribute('data-source')}">
	`);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } else {
        instance.show();
    }
    function onEscDown(event) {
        if (event.code !== 'Escape') {
        return;
    } else {
        instance.close();
        window.removeEventListener('keydown', onEscDown);
    }
}
}


console.log(galeryEl);



