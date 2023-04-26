
export default class Card {
    constructor(data, templateSelector,handleClickImage) {
        this._name = data.name;
        this._link = data.link
        this._templateSelector = templateSelector
        this._openPopup = () => handleClickImage({name:this._name,link:this._link})

    }

    createCard() {
        this._element = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true)
        this._likeBtn = this._element.querySelector('.cards__like-btn')
        const titleCard = this._element.querySelector('.cards__title')
        this._imgCard = this._element.querySelector('.cards__image')
        titleCard.textContent = this._name
        this._imgCard.src = this._link
        this._imgCard.alt = this._name
        this._setEventListeners()
        return this._element
    }

    _setEventListeners() {
        const deleteButton = this._element.querySelector('.cards__delete-btn')

        this._likeBtn.addEventListener('click', () => {
            this._toogleLike()
        })
        deleteButton.addEventListener('click', () => {
            this._deleteCard()
        })
        this._imgCard.addEventListener('click', this._openPopup)
    }


    _toogleLike() {
        this._likeBtn.classList.toggle('cards__like-btn_active')
    }

    _deleteCard() {
        this._element.remove()
    }

}
