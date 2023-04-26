import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form')
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
        this._handleSubmitForm = () => handleSubmitForm(this._getInputValues())  
    }
    _getInputValues() {
        const values = this._inputList.reduce((values, curr) => {
            values[curr.name] = curr.value
            return values
        }, {})
        return values
    }

    setInputValues(values = {}) {
        this._inputList.forEach(input => values[input.getAttribute('name')] ? input.value = values[input.getAttribute('name')].trim() : input.value = '')
    }

    close() {
        super.close()
        this._form.reset()
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', this._handleSubmitForm)

    }
}