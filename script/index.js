const buttonEdit = document.querySelector(".profile__edit-button");
const closeButtonEdit = document.querySelector(".popup__close");
const formEdit = document.getElementById("popupEditProfile");
const inputNameEdit = formEdit.querySelector(".popup__input-name");
const inputRoleEdit = formEdit.querySelector(".popup__input-role");
const outputContainerName = document.querySelector(".profile__name");
const outputContainerRole = document.querySelector(".profile__role");

const buttonAddImage = document.querySelector(".profile__add-button-image");
const formAddImage = document.getElementById("popupAddImage");
const closeButtonAddImage = formAddImage.querySelector(".popup__close");

// membuka popup Edit Profile
function openPopupEdit() {
  inputNameEdit.value = outputContainerName.textContent;
  inputRoleEdit.value = outputContainerRole.textContent;
  formEdit.classList.add("popup__open");
}

// menutup popup Edit Profile
function closePopupEdit() {
  formEdit.classList.remove("popup__open");
}

buttonEdit.addEventListener("click", openPopupEdit);
closeButtonEdit.addEventListener("click", closePopupEdit);

formEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
  outputContainerName.textContent = inputNameEdit.value;
  outputContainerRole.textContent = inputRoleEdit.value;
  closePopupEdit();
});

// membuka popup Add Image
function openPopupAddImage() {
  formAddImage.classList.add("popup__open");
}

// menutup popup Add Image
function closePopupAddImage() {
  formAddImage.classList.remove("popup__open");
}

buttonAddImage.addEventListener("click", openPopupAddImage);
closeButtonAddImage.addEventListener("click", closePopupAddImage);

formAddImage.addEventListener("submit", function (evt) {
  evt.preventDefault();

  closePopupAddImage();
});

formAddImage.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // Ambil nilai dari input form
  const titleValue = formAddImage.querySelector(
    ".popup__input-place-name"
  ).value;
  const imageUrlValue = formAddImage.querySelector(".popup__input-url").value;

  // Tambahkan card ke dalam galeri
  addCard(titleValue, imageUrlValue);

  //menutup popup image-form
  closePopupAddImage();
});

function openPopupAddImage() {
  formAddImage.classList.add("popup__open");
}

function closePopupAddImage() {
  formAddImage.classList.remove("popup__open");
}

buttonAddImage.addEventListener("click", openPopupAddImage);
closeButtonAddImage.addEventListener("click", closePopupAddImage);

const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardsGallery = document.querySelector(".cards-gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("fullImage");
const closeModalButton = document.querySelector(".cards__modal-close");

function addCard(titleValue, imageUrlValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".cards-gallery__item")
    .cloneNode(true);

  cardElement.querySelector(".cards-gallery__image").src = imageUrlValue;
  cardElement.querySelector(".cards-gallery__image").alt = titleValue;
  cardElement.querySelector(".cards-gallery__group-title").textContent =
    titleValue;

  // aktifkan like button
  cardElement
    .querySelector(".cards-gallery__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("cards-gallery__like-button-image");
    });
  cardElement
    .querySelector(".cards-gallery__image")
    .addEventListener("click", function () {
      openModal(imageUrlValue, titleValue);
    });

  // menghapus card
  cardElement
    .querySelector(".cards-gallery__trash")
    .classList.add("cards-gallery__trash");
  cardElement
    .querySelector(".cards-gallery__trash")
    .addEventListener("click", function () {
      cardsGallery.removeChild(cardElement);
    });

  cardsGallery.appendChild(cardElement);
}

// full-image opened
function openModal(imageUrl, title) {
  modalContent.src = imageUrl;
  modalContent.alt = title;

  const existingTitle = document.querySelector(".cards__modal-title");
  if (existingTitle) {
    existingTitle.parentNode.removeChild(existingTitle);
  }

  //full-image title
  const titleElement = document.createElement("p");
  titleElement.textContent = title;
  titleElement.classList.add("cards__modal-title");
  modalContent.parentNode.insertBefore(titleElement, modalContent.nextSibling);

  modal.classList.add("cards__modal-open");

  modal.addEventListener("click", closeModal);
}

function closeModal() {
  const titleElement = document.querySelector(".cards__modal-title");

  if (titleElement) {
    titleElement.parentNode.removeChild(titleElement);
  }
  modal.classList.remove("cards__modal-open");
}

// Tampilkan semua gambar-gambar saat halaman dimuat
initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});
