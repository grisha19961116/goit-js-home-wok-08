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
    const getDataHref = target.dataset.source;
  event.preventDefault();
  const baseEvent = event;
  const readyDiv = document.querySelector('.js-lightbox');
  const closeSlider = document.querySelector('button');
  const closeByHtml = document.querySelector('html');
  const addContentInSlider = document.querySelector(".lightbox__image");

  const objectLi = target.parentNode.parentNode.parentNode.childNodes;
  const ArrayObjectLi = Array.from(objectLi);
  
  
  const addPicture = () => {
    readyDiv.classList.remove('is-open');
    addContentInSlider.removeAttribute("src");
    addContentInSlider.removeAttribute("alt");
  };

  const addPictureEvent = () => {
    readyDiv.classList.remove('is-open');
    addContentInSlider.removeAttribute("src");
    addContentInSlider.removeAttribute("alt");
  };

  readyDiv.addEventListener('click', addPictureEvent);

  closeSlider.addEventListener('click', addPictureEvent);
  
  if (target.nodeName === "IMG"){
    readyDiv.classList.add('is-open');
    let addAltText = target.alt;
    const getDataHref = target.dataset.source;
    addContentInSlider.setAttribute("src",getDataHref);
    addContentInSlider.setAttribute("alt",addAltText);
    closeByHtml.addEventListener("keyup", event => {

        if(event.code === "Escape"){
            addPicture();  
        }
        if(event.code === "ArrowRight"){
    
             ArrayObjectLi.map((elem,index,array) => {
                if(target.parentNode.parentNode.firstChild.href === elem.firstChild.href){
                addContentInSlider.removeAttribute("src");
                addContentInSlider.removeAttribute("alt");
                const {source} = array[index+1].firstChild.firstChild.dataset;
                addContentInSlider.setAttribute("src",source);
                }
                })
        }
        if(event.code === "ArrowLeft"){
    
            ArrayObjectLi.map((elem,index,array) => {
                if(target.parentNode.parentNode.firstChild.href === elem.firstChild.href){
                    addContentInSlider.removeAttribute("src");
                    addContentInSlider.removeAttribute("alt");
                    const {source} = array[index-1].firstChild.firstChild.dataset;
                    addContentInSlider.setAttribute("src",source);
                }
                })
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
// 9) Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".