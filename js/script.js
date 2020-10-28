// Открытие модального окна на главной странице
const loginLink = document.querySelector(".map-help");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const loginLogin = loginPopup.querySelector(".modal-input-login");
const loginPassword = loginPopup.querySelector(".modal-input-password");
const loginForm = loginPopup.querySelector(".modal-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});


// !НИЖНИЙ СЛАЙДЕР

const first = document.querySelector(".slider-delivery");
const second = document.querySelector(".slider-guarantee");
const third = document.querySelector(".slider-credit")
const firstFirst = document.querySelector(".services-delivery");
const secondSecond = document.querySelector(".services-guarantee");
const thirdThird = document.querySelector(".services-credit");

second.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  first.classList.remove("services-button-current");
  third.classList.remove("services-button-current");
  second.classList.add("services-button-current");
  firstFirst.classList.remove("services-slider-item-current");
  thirdThird.classList.remove("services-slider-item-current");
  secondSecond.classList.add("services-slider-item-current");
});

first.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  third.classList.remove("services-button-current");
  second.classList.remove("services-button-current");
  first.classList.add("services-button-current");
  thirdThird.classList.remove("services-slider-item-current");
  secondSecond.classList.remove("services-slider-item-current");
  firstFirst.classList.add("services-slider-item-current");
});

third.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  second.classList.remove("services-button-current");
  first.classList.remove("services-button-current");
  third.classList.add("services-button-current");
  secondSecond.classList.remove("services-slider-item-current");
  firstFirst.classList.remove("services-slider-item-current");
  thirdThird.classList.add("services-slider-item-current");
});


// !ВЕРХНИЙ СЛАЙДЕР

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const firstSlide = document.querySelector(".slider-rotary-hammer");
const secondSlide = document.querySelector(".slider-drill");
const leftIndicator = document.querySelector(".left-indicator");
const rightIndicator = document.querySelector(".right-indicator");


buttonRight.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  firstSlide.classList.remove("slider-current");
  secondSlide.classList.add("slider-current");
});

buttonLeft.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  firstSlide.classList.remove("slider-current");
  secondSlide.classList.add("slider-current");
});

leftIndicator.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  firstSlide.classList.remove("slider-current");
  secondSlide.classList.add("slider-current");
});

rightIndicator.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  secondSlide.classList.remove("slider-current");
  firstSlide.classList.add("slider-current");
});

leftIndicator.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  rightIndicator.classList.remove("indicator-current");
  leftIndicator.classList.add("indicator-current");
});

rightIndicator.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  leftIndicator.classList.remove("indicator-current");
  rightIndicator.classList.add("indicator-current");
});


// !КАРТА

const mapLink = document.querySelector(".map-button");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  mapClose.focus();
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
