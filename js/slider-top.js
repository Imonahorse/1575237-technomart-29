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
