import './index.css'
import { initialCards, infoSelectors, profileAddBtn, profileBtnEdit, config } from "../utils/constants.js"
import FormValidation from "../components/FormValidator.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js'
import Card from "../components/Card.js";



const userInfo = new UserInfo(infoSelectors)

const popupWithImage = new PopupWithImage('.popup_type_image')
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', (info) => {
  userInfo.setUserInfo(info)
  popupEditProfile.close()
})

function createCard(card) {
  const newCard = new Card(card, '#template-card', () => {
    popupWithImage.open(card)
  })
  return newCard.createCard()
}

const cardList = new Section({
  renderer: (item) => {

    const card = createCard(item)

    cardList.addItem(card)
  }

}, '.cards__container')

cardList.renderItems(initialCards)



const popupAddCard = new PopupWithForm('.popup_type_add-card', (card) => {
  const newCard = createCard(card)
  cardList.addItem(newCard)
  popupAddCard.close()
})

// Функция для валидации всех форм на странице (все валидаторы в обьекте formValidators)

const formValidators = {}

function validationForms() {
  Array.from(document.forms).forEach(form => {
    const validate = new FormValidation(config, form)
    const formName = validate.formElement.getAttribute('name')
    formValidators[formName] = validate
    validate.enableValidation()
  })
}

validationForms()

function renderFormCard() {
  popupAddCard.open()
  formValidators['popup-form-cards'].renderForm()
}

function renderEditForm() {
  popupEditProfile.open()
  const infoValues = userInfo.getUserInfo()
  popupEditProfile.setInputValues(infoValues)
  formValidators['popup-form-edit'].renderForm()
}


function setEventListenersForAll() {
  Array.from([popupEditProfile, popupWithImage, popupAddCard]).forEach(popup => popup.setEventListeners())
  profileAddBtn.addEventListener("click", renderFormCard)
  profileBtnEdit.addEventListener("click", renderEditForm)
}

setEventListenersForAll()
