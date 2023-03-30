
import { initialCards } from "./constants.js";
import { config } from "./constants.js";
import { FormValidation } from "./FormValidator.js";
import Card from "./card.js";
import { openPopup, closePopup } from "./utils.js";


const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type_job");
const popupFormEdit = document.querySelector(".popup__form_type_edit")
const popupFormCards = document.querySelector(".popup__form_type_cards")
const popups = document.querySelectorAll('.popup');
const formList = document.querySelectorAll('.popup__form')
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");
const cardsContainer = document.querySelector(".cards__container");
const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
const cardsLinkInput = document.querySelector(".popup__input_type_card-link");
const closeBtns = document.querySelectorAll('.popup__btn-close');



function addedNewCard(card) {
  const cardElement = new Card(card, '#template-card')
  cardsContainer.prepend(cardElement.createCard())
}

closeBtns.forEach(button => {
  button.addEventListener('click', closePopup)
})

function renderFormCard() {
  popupFormCards.reset()
  new FormValidation(config, popupFormCards).renderForm()
  openPopup(popupAddCards)
}

profileAddBtn.addEventListener("click", renderFormCard)

function renderEditForm() {
  popupInputName.value = profileTitle.textContent.trim();
  popupInputJob.value = profileSubtitle.textContent.trim();
  new FormValidation(config, popupFormEdit).renderForm()
  openPopup(popupEditProfile)
}

profileBtnEdit.addEventListener("click", renderEditForm)


function closeOnOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup()
  }

}

popups.forEach(popup => {
  popup.addEventListener('mousedown', closeOnOverlayClick)
})


function handleFormSubmitAddCard(evt) {
  evt.preventDefault()
  addedNewCard({ name: cardsTitleInput.value, link: cardsLinkInput.value });
  closePopup(popupAddCards);
  evt.target.reset()
}
popupFormCards.addEventListener('submit', handleFormSubmitAddCard)


function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;
  closePopup(popupEditProfile);
}
popupFormEdit.addEventListener('submit', handleFormSubmitEdit)


formList.forEach(form => {
  const validationForm = new FormValidation(config, form)
  validationForm.enableValidation()
})

initialCards.forEach(card => {
  addedNewCard(card)
})

