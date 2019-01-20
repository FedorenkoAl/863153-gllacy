var button = document.querySelector(".address-button");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup button::before");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-clik");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-clik");
});

