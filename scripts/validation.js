
const config = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
  errorActiveClass: 'popup__input-error_visible',
  fieldSetSelector: '.popup__input-group'
});

const showInputError = (formElement, inputElement, errorMessage, config) => {
  console.log('yeah')
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  console.log(errorMessage)
  errorElement.classList.add(config.errorActiveClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorActiveClass);
  errorElement.textContent = '';

};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass)
  } else buttonElement.classList.remove(config.inactiveButtonClass)
}
const checkInputValidity = (formElement, inputElement,config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,config);
  } else {
    hideInputError(formElement, inputElement,config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, buttonElement, config)
      checkInputValidity(formElement, inputElement,config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      console.log(evt)
      evt.preventDefault();
    });

    const fieldset = formElement.querySelector(config.fieldSetSelector);
    setEventListeners(fieldset,config);
  });
};

enableValidation(config);

