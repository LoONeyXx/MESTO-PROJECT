import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
       super(popupSelector)
       this._popupImage = this._popup.querySelector('.popup__image')
       this._popupText = this._popup.querySelector('.popup__image-text')
    }

    open(item) {
        super.open()
        this._popupImage.src = item.link
        this._popupImage.alt = item.name
        this._popupText.textContent = item.name
    }

}