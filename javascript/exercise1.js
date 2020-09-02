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

  let target = event.target;

  event.preventDefault();
  const baseEvent = event;
  const readyDiv = document.querySelector('.js-lightbox');
  const closeSlider = document.querySelector('button');
  const closeByHtml = document.querySelector('html');
  const addContentInSlider = document.querySelector(".lightbox__image");
  
  const removeSet = () => {
    target = event.target;
    readyDiv.classList.remove('is-open');
    addContentInSlider.removeAttribute("src");
    addContentInSlider.removeAttribute("alt");
  };

  const AddPhoto = () => {
    readyDiv.classList.add('is-open');
    addContentInSlider.setAttribute("src",target.dataset.source);
    addContentInSlider.setAttribute("alt",target.alt);
  };

  const refreshSetInSlider = () => {
    addContentInSlider.removeAttribute("src");
    addContentInSlider.removeAttribute("alt");
    addContentInSlider.setAttribute("src",target.dataset.source);
    addContentInSlider.setAttribute("alt",target.alt);
  };

  readyDiv.addEventListener('click', removeSet);

  closeSlider.addEventListener('click', removeSet);
  
  if (target.nodeName === "IMG"){
    AddPhoto();
    closeByHtml.addEventListener("keyup", event => {

        if(event.code === "Escape"){
            removeSet();  
        }
        if(event.code === "ArrowRight"){
          refreshSetInSlider();
          const targetNext = target.parentNode.parentNode.nextSibling.firstChild.firstChild;
          target = targetNext;
    if(!target.parentNode.parentNode.nextSibling){
      target  = target.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild;
    }

        }
        if(event.code === "ArrowLeft"){
          const targetPrew = target.parentNode.parentNode.previousSibling.firstChild.firstChild;
          target = targetPrew;
          refreshSetInSlider();
          if(!target.parentNode.parentNode.previousSibling){
            target  = target.parentNode.parentNode.parentNode.lastChild.lastChild.lastChild;
          }
        }
      });
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
// Дополнительно
//  Следующий функционал не обязателен при сдаче задания, но
//  будет хорошей практикой по работе с событиями.
// 7) Закрытие модального окна по клику на div.lightbox__overlay. +
// 8) Закрытие модального окна по нажатию клавиши ESC.  +
// 9) Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо". +