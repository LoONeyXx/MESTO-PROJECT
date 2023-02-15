/*   Popup перменные        */
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCards = document.querySelector(".popup_type_add-card");
const popupInputName = popupEditProfile.querySelector(".popup__input_type_name");
const popupInputJob = popupEditProfile.querySelector(".popup__input_type-job");
const popupBtnsClose = document.querySelectorAll(".popup__btn-close");
const popupForm = document.querySelectorAll(".popup__form");
const popupTypeImage = document.querySelector(".popup_type_image");
const image = document.querySelector(".popup__image");
const imageText = document.querySelector(".popup__image-text");

/*   Перменные профиля           */
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const profileAddBtn = document.querySelector(".profile__btn-add");
//  Перменные карточек
const cardsContainer = document.querySelector(".cards__container");
const cardsItem = Array.from(document.querySelectorAll(".cards__item"));
const cardsTitleInput = document.querySelector(".popup__input_type_card-title");
const cardsLinkInput = document.querySelector(".popup__input_type-link");
const cardsImage = document.querySelectorAll(".cards__image");
const templateItem = document.querySelector(".template-item");

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

/*       Функция добавления новых карточек         */

function addedNewCard() {
  const newCard = document.querySelector(".cards__item").cloneNode(true);
  const imgCard = newCard.querySelector("img");
  const titleCard = newCard.querySelector("h2");
  titleCard.textContent = cardsTitleInput.value;
  imgCard.src = cardsLinkInput.value;
  cardsContainer.prepend(newCard);
  initialCards.unshift({
    name: cardsTitleInput.value,
    link: cardsLinkInput.value,
  });
  const likeBtn = newCard.querySelector(".cards__like-btn");
  const elementBtnDelete = newCard.querySelector(".cards__delete-btn");
  elementBtnDelete.addEventListener("click", deletedCard);
  likeBtn.addEventListener("click", toogleLike);
}

/*     Функция для рендера инпут полей     */

function renderInput(popup) {
  if (popup.classList.value.includes("popup_type_edit-profile")) {
    popupInputName.value = profileTitle.textContent.trim();
    popupInputJob.value = profileSubtitle.textContent.trim();
  } else {
    cardsTitleInput.value = "".trim();
    cardsLinkInput.value = "".trim();
  }
}

/*     Функция переключение состояния кнопки Like             */

function toogleLike(evt) {
  const el = evt.target;
  const activeLike = "url('./images/like.svg')";
  const disabledLike = "url('images/like_active.svg')";
  el.style.transition = "transform 0.1s linear";
  if (!el.classList.value.includes("cards__like-btn-active")) {
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.add("cards__like-btn-active");
    setTimeout(() => {
      el.style["-webkit-transform"] = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = disabledLike;
    }, 100);
  } else {
    el.style["-webkit-transform"] = "scale(0) translateZ(0)";
    el.classList.remove("cards__like-btn-active");
    setTimeout(() => {
      el.style.transform = "scale(1) translateZ(0)";
    }, 100);
    setTimeout(() => {
      el.style.backgroundImage = activeLike;
    }, 100);
  }
}

/*    Функция добавления свойства Transition            */

function addTransition(el, value) {
  el.style.transition = value;
}
/*    Функция открытия Popup             */

function openPopup(evt) {
  const popupBtn = evt.target;
  if (popupBtn.classList.value.includes("profile__btn-add")) {
    addTransition(popupAddCards, "all 0.3s linear");
    popupAddCards.classList.add("popup_opened");
    renderInput(popupAddCards);
  }
  if (popupBtn.classList.value.includes("cards__image")) {
    const cardTitle = popupBtn.parentElement.querySelector(".cards__title");
    image.src = popupBtn.src;
    imageText.textContent = cardTitle.textContent;
    addTransition(popupTypeImage, "all 0.3s linear");
    popupTypeImage.classList.add("popup_opened");
  } else {
    popupEditProfile.classList.add("popup_opened");
    addTransition(popupEditProfile, "all 0.3s linear");
    renderInput(popupEditProfile);
  }
}
/*   Функция закрытия Popup  */

function closePopup(evt) {
  const popupElement = evt.target;

  if (
    popupElement.classList.value.includes("popup__btn-close_type_add-cards") ||
    popupElement.getAttribute("name") === "popup-form-cards"
  ) {
    popupAddCards.classList.remove("popup_opened");
  }
  if (popupElement.classList.value.includes("popup__btn-close_type_image")) {
    popupTypeImage.classList.remove("popup_opened");
  } else {
    popupEditProfile.classList.remove("popup_opened");
  }
}
/*   Функция удаления карточки         */
function deletedCard(evt) {
  const card = evt.target;
  card.parentElement.remove();
}

/*   Функция рендера Карточек        */

function renderCards() {
  cardsItem.map((el, i) => {
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
    addedNewCard();
    closePopup(evt);
    // renderEventListener();
  }
}

/*    Прослушка событий для кнопок close и edit add в профиле     */

const likeBtns = Array.from(document.querySelectorAll(".cards__like-btn"));
const elementBtnsDelete = Array.from(document.querySelectorAll(".cards__delete-btn"));
profileAddBtn.addEventListener("click", openPopup);
profileBtnEdit.addEventListener("click", openPopup);
popupBtnsClose.forEach((el) => el.addEventListener("click", closePopup));
popupForm.forEach((el) => el.addEventListener("submit", handleFormSubmit));
elementBtnsDelete.forEach((el) => el.addEventListener("click", deletedCard));
likeBtns.forEach((el) => el.addEventListener("click", toogleLike));
cardsImage.forEach((el) => el.addEventListener("click", openPopup));

renderCards();
