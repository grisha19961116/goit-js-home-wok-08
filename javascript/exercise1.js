import galleryItems from "./galleryItems.js";

const jsGallery = document.querySelector(".js-gallery");

const createPhotoByUrl = galleryItems.map((elem, i) => {
  const readyLi = document.createElement("li");
  readyLi.classList.add("gallery__item");
  const createRefWithHighQuality = document.createElement("a");
  createRefWithHighQuality.setAttribute("href", elem.original);
  createRefWithHighQuality.classList.add("gallery__link");
  readyLi.appendChild(createRefWithHighQuality);
  const cretePhotoLittle = document.createElement("img");
  cretePhotoLittle.classList.add("gallery__image");
  cretePhotoLittle.setAttribute("id", i);
  cretePhotoLittle.setAttribute("src", elem.preview);
  cretePhotoLittle.setAttribute("data-source", elem.original);
  cretePhotoLittle.setAttribute("alt", elem.description);
  createRefWithHighQuality.appendChild(cretePhotoLittle);
  readyLi.appendChild(createRefWithHighQuality);
  return readyLi;
});

const quantityImg = createPhotoByUrl.length - 1;
let target;
let id;

const readyDiv = document.querySelector(".js-lightbox");
const closeSlider = document.querySelector("button");
const closeByHtml = document.querySelector("html");
const addContentInSlider = document.querySelector(".lightbox__image");

const AddPhoto = () => {
  readyDiv.classList.add("is-open");
  readyDiv.classList.add("is-open");
  addContentInSlider.removeAttribute("src");
  addContentInSlider.removeAttribute("alt");
  addContentInSlider.setAttribute("src", target.dataset.source);
  addContentInSlider.setAttribute("alt", target.alt);
};

const refreshSetInSlider = () => {
  const img = document.getElementById(id);
  addContentInSlider.src = img.dataset.source;
  addContentInSlider.alt = img.alt;
};

function handleKeyupPhoto(e) {
  if (e.code === "Escape") {
    removeKeyupListener();
    return;
  }

  if (e.code === "ArrowRight") {
    if (id === quantityImg) {
      id = 0;
      refreshSetInSlider();
      return;
    }
    id += 1;
    refreshSetInSlider();
  }

  if (e.code === "ArrowLeft") {
    if (id === 0) {
      id = quantityImg;
      refreshSetInSlider();
      return;
    }
    id -= 1;
    refreshSetInSlider();
  }
}

function removeKeyupListener() {
  readyDiv.classList.remove("is-open");
  closeByHtml.removeEventListener("keyup", handleKeyupPhoto, false);
}

function handleClickPhoto(e) {
  e.preventDefault();
  target = e.target;

  closeByHtml.addEventListener("keyup", handleKeyupPhoto, false);
  readyDiv.addEventListener("click", removeKeyupListener);
  closeSlider.addEventListener("click", removeKeyupListener);

  if (target.nodeName !== "IMG") return;

  id = Number(target.id);

  AddPhoto();
}

jsGallery.append(...createPhotoByUrl);

jsGallery.addEventListener("click", handleClickPhoto);

// Divide exercise on several part and additional tasks : +
// 1)Create render DOM  by data from array and use done template . +
// 2)Introduce handle event on ul.js-gallery and get url big img . +
// 3)Open modal window by click element from gallery . +
// 4)Change element's src by click  img.lightbox__image. +
// 5)Close modal window by click button [data-action="close-modal"]. +
// 6))Clear value attribute "src" in element img.lightbox__image.It require for that +
//  during next opening modal window when img is downloading ,we do not see previous . +
// Additional
//  Next ability are not require for pass task , but
//  will be excellent experience by work with events .
// 7) Close modal window by click on div.lightbox__overlay. +
// 8) Close modal window by tap key ESC from keyboard.  +
// 9) Swipe gallery images during open modal window pres key  "left" and "right". +
