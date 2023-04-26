export default class FormValidation {
  constructor(config, formElement) {
    this._config = config
    this.formElement = formElement
    this.inputList = Array.from(this.formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this.formElement.querySelector(this._config.submitButtonSelector)
  }

  enableValidation() {
    this._setEventListeners();
  };

  renderForm() {
    this._toggleButtonState()
    this.inputList.forEach(inputElement => {
      this._hideInputError(inputElement)
    })
  }

  _setEventListeners() {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    this.inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState()
        this._checkInputValidity(inputElement)
      })
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass)
      this._buttonElement.setAttribute('disabled', 'disabled')
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass)
      this._buttonElement.removeAttribute('disabled')
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.classList.add(this._config.errorActiveClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorActiveClass);
    errorElement.textContent = '';

  }
  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}

