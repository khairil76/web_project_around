let container = document.querySelector(".container");
let formSubmit = container.querySelector(".form-submit__container");
let editProfile = container.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form-submit__close");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let inputName = document.querySelector(".form-submit__input-name");
  let inputRole = document.querySelector(".form-submit__input-role");

  let nameValue = inputName.value;
  let jobValue = inputRole.value;

  let outputContainerName = document.querySelector(".profile__name");
  let outputContainerRole = document.querySelector(".profile__role");

  outputContainerName.textContent = `${nameValue}`;
  outputContainerRole.textContent = `${jobValue}`;
}

formSubmit.addEventListener("submit", handleProfileFormSubmit);

editProfile.addEventListener("click", function () {
  formSubmit.style.display = "block";
});

closeButton.addEventListener("click", function () {
  formSubmit.style.display = "none";
});
