import moscow from '../images/moscow.png'
import ekat from '../images/ekat.png'
import tula from '../images/tula.png'
import peter from '../images/peter.png'
import sochi from '../images/sochi.png'
import yaroslavl from '../images/yaroslavl.png'






export const infoSelectors = {
  description: '.profile__subtitle',
  name: ".profile__title"
}


export const initialCards = [
  {
    name: "Екатеринбург",
    link: ekat,
  },
  {
    name: "Москва",
    link: moscow,
  },
  {
    name: "Санкт-Петербург",
    link: peter,
  },
  {
    name: "Тула",
    link: tula,
  },
  {
    name: "Сочи",
    link: sochi,
  },
  {
    name: "Ярославль",
    link: yaroslavl,
  },
];



export const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
  errorActiveClass: 'popup__input-error_visible',
  fieldSetSelector: '.popup__input-group'
});


export const profileBtnEdit = document.querySelector(".profile__btn-edit");
export const profileAddBtn = document.querySelector(".profile__btn-add");