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
  rightIndicator.classList.remove("indicator-current");
  leftIndicator.classList.add("indicator-current");
});

buttonLeft.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по слайдеру");
  firstSlide.classList.remove("slider-current");
  secondSlide.classList.add("slider-current");
  rightIndicator.classList.remove("indicator-current");
  leftIndicator.classList.add("indicator-current");
});
