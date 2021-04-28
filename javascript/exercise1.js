import galleryItems from "./galleryItems.js";
const jsGallery = document.querySelector(".js-gallery");
const createPhotoByUrl = galleryItems.map((elem, i) => {
  const readyLi = document.createElement("li");
  readyLi.classList.add("gallery__item");
  readyLi.classList.add(i);
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
  addContentInSlider.removeAttribute("src");
  addContentInSlider.removeAttribute("alt");
  addContentInSlider.setAttribute("src", target.dataset.source);
  addContentInSlider.setAttribute("alt", target.alt);
  jsGallery.classList.add("js-gallery--active");
  const oneImg = 100 / (quantityImg + 1);
  Object.values(document.querySelectorAll(".gallery__item")).map((el) => {
    el.classList.remove("gallery__item");
    el.classList.add("gallery__item--active");
    el.style.maxHeight = `${oneImg * 0.84}%`;
    el.style.maxWidth = `${oneImg / 1.8}%`;
  });
  Object.values(document.querySelectorAll(".gallery__image")).map((el) => {
    el.classList.add("gallery__image--active");
  });
  Object.values(document.querySelectorAll(".gallery__item--active")).map(
    (el) => {
      if (el.classList.contains("gallery__item--active--checked")) {
        el.classList.remove("gallery__item--active--checked");
      }
    }
  );
  const activeImg = document.getElementsByClassName(id)[0];
  activeImg.classList.add("gallery__item--active--checked--orange");
  setTimeout(() => {
    activeImg.classList.remove("gallery__item--active--checked--orange");
    activeImg.classList.add("gallery__item--active--checked");
    const img = document.getElementById(id);
    addContentInSlider.src = img.dataset.source;
    addContentInSlider.alt = img.alt;
  }, 100);
};
const toggleArrowFill = (btn) => {
  setTimeout(() => {
    btn[0].style.fill = "#42a325";
  }, 100);
};

const refreshSetInSlider = (changeId) => {
  document
    .getElementsByClassName(changeId)[0]
    .classList.remove("gallery__item--active--checked");

  const activeImg = document.getElementsByClassName(id)[0];
  activeImg.classList.add("gallery__item--active--checked--orange");
  setTimeout(() => {
    activeImg.classList.remove("gallery__item--active--checked--orange");
    activeImg.classList.add("gallery__item--active--checked");
    const img = document.getElementById(id);
    addContentInSlider.src = img.dataset.source;
    addContentInSlider.alt = img.alt;
  }, 100);
};
const arrowLeft = () => {
  const left = document.getElementsByClassName("overlay__svg--left");
  left[0].style.fill = "#f88d02";
  if (id === 0) {
    id = quantityImg;
    refreshSetInSlider(0);
    toggleArrowFill(left);
    return;
  }
  id -= 1;
  refreshSetInSlider(id + 1);
  toggleArrowFill(left);
};
const arrowRight = () => {
  const right = document.getElementsByClassName("overlay__svg--right");
  right[0].style.fill = "#f88d02";
  if (id === quantityImg) {
    id = 0;
    refreshSetInSlider(quantityImg);
    toggleArrowFill(right);
    return;
  }
  id += 1;
  refreshSetInSlider(id - 1);
  toggleArrowFill(right);
};
function handleKeyupPhoto(e) {
  if (e.code === "Escape") return removeKeyupListener();
  if (e.code === "ArrowLeft") return arrowLeft();
  if (e.code === "ArrowRight") return arrowRight();
}
function removeKeyupListener() {
  jsGallery.classList.remove("js-gallery--active");
  document
    .getElementsByClassName(id)[0]
    .classList.remove("gallery__item--active--checked");
  readyDiv.classList.remove("is-open");
  Object.values(document.querySelectorAll(".gallery__item--active")).map(
    (el) => {
      el.classList.remove("gallery__item--active");
      el.classList.add("gallery__item");
      el.style.maxHeight = `100%`;
      el.style.maxWidth = `100%`;
    }
  );
  Object.values(document.querySelectorAll(".gallery__image")).map((el) => {
    el.classList.remove("gallery__image--active");
  });
  closeByHtml.removeEventListener("keyup", handleKeyupPhoto, false);
}
function handleClickByReadyDiv(e) {
  const target = e.target.id;
  if (target === "left") return arrowLeft();
  if (target === "right") return arrowRight();
  removeKeyupListener(e);
  readyDiv.removeEventListener("click", handleClickByReadyDiv);
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
