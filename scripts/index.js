/*            Popup перменные        */
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type-job");
const popupBtnsClose = document.querySelectorAll(".popup__btn-close");
const popupForm = document.querySelectorAll(".popup__form");
/*               Перменные профиля           */
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");
//  Перменные карточек
const elementsContainer = document.querySelector('.elements__container')
const elementsItem = Array.from(document.querySelectorAll(".elements__item"));
const elementsTitleInput = document.querySelector('.popup__input_type_card-title')
const elementsLinkInput = document.querySelector('.popup__input_type-link')
const elementsImage = document.querySelectorAll('.elements__image')
const templateItem = document.querySelector('.template-item')


/*       Функция добавления новых карточек         */
function addedNewCard() {
  const newCard = document.querySelector('.elements__item').cloneNode(true)
  const imgCard = newCard.querySelector('img')
  const titleCard = newCard.querySelector('h2')
  titleCard.textContent = elementsTitleInput.value
  imgCard.src = elementsLinkInput.value
  elementsContainer.prepend(newCard)
  initialCards.unshift({name: elementsTitleInput.value, link: elementsLinkInput.value})
  console.log(initialCards)
}



// Обьект названия и ссылки карточек

const initialCards = [
  {
    name: "Екатеринбург",
    link: "./images/ekat.png",
  },
  {
    name: "Москва",
    link: "./images/moscow.png",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/peter.png",
  },
  {
    name: "Тула",
    link: "./images/tula.png",
  },
  {
    name: "Сочи",
    link: "./images/sochi.png",
  },
  {
    name: "Ярославль",
    link: "./images/yaroslavl.png",
  },
];
/*     Функция для рендера инпут полей     */

function renderInput(popup) {

  if (popup.classList.value.includes("popup_type_edit-profile")) {
    popupInputName.value = profileTitle.textContent.trim(" ");
    popupInputJob.value = profileSubtitle.textContent.trim(" ");
  } else {
    elementsTitleInput.value = ''.trim(' ')
    elementsLinkInput.value = ''.trim(' ')
}}

/*            Функция переключение состояния кнопки Like             */

function toogleLike(evt) {
  const el = evt.target;
  const activeLike = `url('../../../images/like.svg')`;
  const disabledLike = `url('../../../images/like_active.svg')`;
  el.style.transition = "transform 0.1s linear";
  if (!el.classList.value.includes("elements__like-btn-active")) {
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.add("elements__like-btn-active");
    setTimeout(() => {
      el.style["-webkit-transform"] = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = disabledLike;
    }, 100);
  } else {
    console.log(el.classList[2]);
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.remove("elements__like-btn-active");
    setTimeout(() => {
      el.style.transform = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = activeLike;
    }, 100);
  }
}

/*        Функция добавления свойства Transition            */

function addTransition(el, value) {
  el.style.transition = value;
}
/*             Функция открытия Popup             */

function openPopup(evt) {
  const popupBtn = evt.target;
  if (popupBtn.classList.value.includes("profile__btn-add")) {
    addTransition(popupAddCards, "all 0.3s linear");
    popupAddCards.classList.add("popup_opened");
    renderInput(popupAddCards)
  } else {
    popupEditProfile.classList.add("popup_opened");
    addTransition(popupEditProfile, "all 0.3s linear");
    renderInput(popupEditProfile);
  }
}
/*     Функция закрытия Popup  */

function closePopup(evt) {
  const popupElement = evt.target;

  if (
    popupElement.classList.value.includes("popup__close-btn_type_add-cards") ||
    popupElement.getAttribute("name") === "popup-form-cards"
  ) {
    popupAddCards.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.remove("popup_opened");
  }
}
/*             Функция удаления карточки         */
function deletedCard(evt) {
  const card = evt.target;
  card.parentElement.remove();
}

/*          Функция рендера Карточек        */

function renderCards() {
  elementsItem.map((el, i) => {
    const image = el.querySelector("img");
    const title = el.querySelector("h2");
    image.src = initialCards[i].link;
    title.textContent = initialCards[i].name;
    return el;
  });
}
/*     Функция для открывания popup и поведение кнопки 'Сохранить'     */

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  if (form.getAttribute("name") === "popup-form-edit") {
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputJob.value;
    closePopup(evt);

  } else {
    addedNewCard()
    closePopup(evt);
renderEventListener()
}}

/*     Прослушка событий для кнопок close и edit add в профиле     */
function renderEventListener() {
  const likeBtns = Array.from(document.querySelectorAll(".elements__like-btn"));
  const elementBtnsDelete = Array.from(document.querySelectorAll(".elements__delete-btn"));
  profileAddBtn.addEventListener("click", openPopup);

  profileBtnEdit.addEventListener("click", openPopup);

  popupBtnsClose.forEach((el) => el.addEventListener("click", closePopup));

  popupForm.forEach((el) => el.addEventListener("submit", handleFormSubmit));
  elementBtnsDelete.forEach((el) => el.addEventListener("click", deletedCard));

  likeBtns.forEach((el) => el.addEventListener("click", toogleLike));
}

renderEventListener();
renderCards();


