// !модальное окно каталога
const addToBasket = document.querySelector(".card-buy");
const catalogModal = document.querySelector(".catalog-modal");
const catalogModalClose = catalogModal.querySelector(".catalog-modal-close");
const modalFirstButton = catalogModal.querySelector(".catalog-ordering")

addToBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalogModal.classList.add("modal-show");
  modalFirstButton.focus();
  console.log("клик")
});

catalogModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalogModal.classList.remove("modal-show");
});

