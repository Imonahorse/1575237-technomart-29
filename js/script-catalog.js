// !модальное окно каталога
const addToBasket = document.querySelectorAll(".card-buy");
const catalogModal = document.querySelector(".catalog-modal");
const catalogModalClose = catalogModal.querySelector(".catalog-modal-close");
const modalFirstButton = catalogModal.querySelector(".catalog-ordering")


  for (var i = 0; i < addToBasket.length; i++) {
    addToBasket[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogModal.classList.add("modal-show");
    modalFirstButton.focus();
    console.log("клик")
    });
  };

  catalogModalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogModal.classList.remove("modal-show");
  });



