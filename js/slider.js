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
