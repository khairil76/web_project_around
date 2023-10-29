let formSubmit = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__edit-button");
let closeButton = formSubmit.querySelector(".popup__close");
let inputName = formSubmit.querySelector(".popup__input-name");
let inputRole = formSubmit.querySelector(".popup__input-role");
let editProfileForm = document.querySelector(".popup__container");
let outputContainerName = document.querySelector(".profile__name");
let outputContainerRole = document.querySelector(".profile__role");

// membuka popup
function openPopup() {
  inputName.value = outputContainerName.textContent;
  inputRole.value = outputContainerRole.textContent;
  formSubmit.classList.add("popup__open");
}

// menutup popup
function closePopup() {
  formSubmit.classList.remove("popup__open");
}

buttonEdit.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  outputContainerName.textContent = inputName.value;
  outputContainerRole.textContent = inputRole.value;
  closePopup();
});
