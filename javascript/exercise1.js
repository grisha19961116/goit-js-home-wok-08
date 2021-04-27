import galleryItems from "./galleryItems.js";

const jsGallery = document.querySelector(".js-gallery");

const createPhotoByUrl = galleryItems.map((elem, i) => {
  const readyLi = document.createElement("li");
  readyLi.classList.add("gallery__item");
  const createRefWithHighQuality = document.createElement("a");
  createRefWithHighQuality.setAttribute("href", elem.original);
  createRefWithHighQuality.classList.add("gallery__link");
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
const closeSlider = document.getElementById("button-close");
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
const toggleArrowFill = (btn) => {
  setTimeout(() => {
    btn[0].style.fill = "#42a325";
  }, 300);
};
const arrowLeft = () => {
  const left = document.getElementsByClassName("overlay__svg--left");
  left[0].style.fill = "#f88d02";
  if (id === 0) {
    id = quantityImg;
    refreshSetInSlider();
    toggleArrowFill(left);
    return;
  }
  id -= 1;
  refreshSetInSlider();
  toggleArrowFill(left);
};
const arrowRight = () => {
  const right = document.getElementsByClassName("overlay__svg--right");
  right[0].style.fill = "#f88d02";
  if (id === quantityImg) {
    id = 0;
    refreshSetInSlider();
    toggleArrowFill(right);
    return;
  }
  id += 1;
  refreshSetInSlider();
  toggleArrowFill(right);
};

function handleKeyupPhoto(e) {
  if (e.code === "Escape") {
    removeKeyupListener();
    return;
  }
  if (e.code === "ArrowLeft") arrowLeft();
  if (e.code === "ArrowRight") arrowRight();
}

function removeKeyupListener() {
  readyDiv.classList.remove("is-open");
  closeByHtml.removeEventListener("keyup", handleKeyupPhoto, false);
}

function handleClickByReadyDiv(e) {
  const target = e.target.id;
  if (target === "left") arrowLeft();
  if (target === "right") arrowRight();
  if (target !== "left" && target !== "right") {
    removeKeyupListener(e);
    readyDiv.removeEventListener("click", handleClickByReadyDiv);
  }
}

function handleClickPhoto(e) {
  e.preventDefault();
  target = e.target;

  closeByHtml.addEventListener("keyup", handleKeyupPhoto, false);
  readyDiv.addEventListener("click", handleClickByReadyDiv);
  closeSlider.addEventListener("click", removeKeyupListener);

  if (target.nodeName !== "IMG") return;

  id = Number(target.id);

  AddPhoto();
}

jsGallery.append(...createPhotoByUrl);

jsGallery.addEventListener("click", handleClickPhoto);

// Divide exercise on several part and additional tasks : +
// 1) Create render DOM  by data from array and use done template . +
// 2) Introduce handle event on ul.js-gallery and get url big img . +
// 3) Open modal window by click element from gallery . +
// 4) Change element's src by click  img.lightbox__image. +
// 5) Close modal window by click button [data-action="close-modal"]. +
// 6) Clear value attribute "src" in element img.lightbox__image.It require for that +
//  during next opening modal window when img is downloading ,we do not see previous . +
// Additional :
//  Next ability are not require for pass task , but
//  will be excellent experience by work with events .
// 7) Close modal window by click on div.lightbox__overlay. +
// 8) Close modal window by tap key ESC from keyboard.  +
// 9) Swipe gallery images during open modal window pres key  "left" and "right". +
// Done with my wish :
// 10) Add svg arrow and change style , they also work with arrow "left" and arrow "right" +
