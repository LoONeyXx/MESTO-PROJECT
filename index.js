// Обьявление переменных

const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const popupInput = popup.querySelectorAll(".popup__input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const popupBtnClose = popup.querySelector(".popup__btn-close");
const popupBtnSave = popup.querySelector(".popup__btn-save");
const popupForm = popup.querySelector(".popup__form");
const elementsItems = document.querySelectorAll(".elements__item");



//Функция для рендера инпут полей

function renderInput() {
	popupInput.forEach((el) => {
		if (
			el.id === "name" &&
			(el.value === "" || el.value !== profileTitle.textContent)
		) {
			el.value = profileTitle.textContent.trim(" ");
		}

		if (
			el.id === "job" &&
			(el.value === "" || el.value !== profileSubtitle.textContent)
		) {
			el.value = profileSubtitle.textContent.trim(" ");
		}
	});
} 

//Функция для открывания popup и поведение кнопки 'Сохранить'

function handleFormSubmit(evt) {
	evt.preventDefault();
	popupInput.forEach((el) => {
		if (el.id === "name" && el.value !== profileTitle.textContent) {
			profileTitle.textContent = el.value.trim(" ");
			el.value = profileTitle.textContent.trim(" ");
			popup.classList.remove("popup_opened");
			document.querySelector(".page").style.overflow = "";
		}
		if (el.id === "job" && el.value !== profileSubtitle.textContent) {
			profileSubtitle.textContent = el.value.trim(" ");
			el.value = profileSubtitle.textContent.trim(" ");
			popup.classList.remove("popup_opened");
			document.querySelector(".page").style.overflow = "";
		}
	});
	renderInput();
}


//Прослушка событий для кнопок close и edit в профиле

profileBtnEdit.addEventListener("click", () => {
	if (popup.classList !== "popup_opened") {
		popup.classList.add("popup_opened");
		document.querySelector(".page").style.overflow = "hidden";

	}
});

popupBtnClose.addEventListener("click", (el) => {
	if (popup.classList[1] === "popup_opened") {
		popup.classList.remove("popup_opened");
		document.querySelector(".page").style.overflow = "";
		renderInput();
	}
	
});

popupForm.addEventListener("submit", handleFormSubmit);




// Активация смены состояния like на карточке при нажатии на нее

elementsItems.forEach((el) => {
	const likeBtn = el.querySelector(".elements__like-btn");
	likeBtn.addEventListener("click", () => {
		const activeLike = el.querySelector(".elements__like-active");
		const disabledLike = el.querySelector(".elements__like-disabled");
		if (likeBtn.classList[2] !== "elements__like-btn_active") {
			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
			likeBtn.classList.toggle("elements__like-btn_active");
			console.log(el)
			setTimeout(() => {
				likeBtn.style.transform = "scale(1) translateZ(0)";
			}, 075);
			setTimeout(() => {
				disabledLike.style.display = "none";
				activeLike.style.display = "block";
			}, 075);
		} else {
			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
			likeBtn.classList.toggle("elements__like-btn_active");
			setTimeout(() => {
				likeBtn.style["-webkit-transform"] = "scale(1) translateZ(0)";
			}, 075);
			setTimeout(() => {
				disabledLike.style.display = "block";
				activeLike.style.display = "none";
			}, 075);
		}
	});
});
//Render при загрузке страницы что бы в поля инпута попали данные из профиля
renderInput();
