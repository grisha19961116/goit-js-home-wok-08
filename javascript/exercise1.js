import galleryItems from './galleryItems.js';
const jsGalerry = document.querySelector('.js-gallery')
const createPhotoByUrl = galleryItems.map(elem => {
    const readyLi = document.createElement('li');
    readyLi.classList.add("gallery__item");
    const createRefWithHighQuality = document.createElement('a');
    createRefWithHighQuality.setAttribute("href",elem.original);
    createRefWithHighQuality.classList.add('gallery__link');
    readyLi.appendChild(createRefWithHighQuality);
    const cretePhotoLitle = document.createElement('img');
    cretePhotoLitle.classList.add('gallery__image')
    cretePhotoLitle.setAttribute("src",elem.preview);
    cretePhotoLitle.setAttribute("data-source",elem.original);
    cretePhotoLitle.setAttribute('alt',elem.description)
    createRefWithHighQuality.appendChild(cretePhotoLitle);
    readyLi.appendChild(createRefWithHighQuality);
    return readyLi;
})
jsGalerry.append(...createPhotoByUrl);
console.log(jsGalerry);
jsGalerry.addEventListener('click', handleClickPhoto);
function handleClickPhoto(event) {
  event.preventDefault();
  const readyDiv = document.querySelector('.js-lightbox');
  const closeSlider = document.querySelector('button');
  const addContentInSlider = document.querySelector(".lightbox__image");
  const target = event.target;
  closeSlider.addEventListener('click', event => {
    readyDiv.classList.remove('is-open');
    addContentInSlider.removeAttribute("src");
    addContentInSlider.removeAttribute("alt");
  });
  if (target.nodeName === "IMG"  ){
    readyDiv.classList.add('is-open');
    const getDataHref = target.dataset.source;
    const addAltText = target.alt;
    addContentInSlider.setAttribute("src",getDataHref);
    addContentInSlider.setAttribute("alt",addAltText)
  }
};
// Разбей задание на несколько подзадач:+
// 1)Создание и рендер разметки по массиву данных и предоставленному шаблону.  +
// 2)Реализация делегирования на галерее ul.js-gallery и получение url большого изображения   +
// 3)Открытие модального окна по клику на элементе галереи.    +
// 4)Подмена значения атрибута src элемента img.lightbox__image.  +
// 5)Закрытие модального окна по клику на кнопку button[data-action="close-modal"].  +
// 6))Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,    +
//  чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.