export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._closeButton = this._popup.querySelector('.popup__btn-close')
        this._closeToEscape = this._handleEscClose.bind(this)
        this._clickToOverlay = this._handleClickOverlay.bind(this)
    }
    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._closeToEscape)
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._closeToEscape)
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()

        }
    }
    _handleClickOverlay(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__btn-close')) {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._clickToOverlay)
        this._closeButton.addEventListener('click', () => {
            this.close()
        })
    }
}