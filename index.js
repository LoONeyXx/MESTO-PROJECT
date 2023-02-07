const popup = document.querySelector(".popup");
const popupContainer = popup.querySelector(".popup__container");
const popupInput = popup.querySelectorAll(".popup__input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileBtnEdit = document.querySelector(".profile__btn-edit");
const popupBtnClose = popup.querySelector(".popup__btn-close");
const popupBtnSave = popup.querySelector(".popup__btn-save");
const popupForm = popup.querySelector(".popup__form");

function handleFormSubmit(evt) {
	evt.preventDefault();
	popupInput.forEach((el) => {
		if (el.id === "name" && el.value !== profileTitle.textContent) {
			profileTitle.textContent = el.value.trim(" ");
			popup.classList.remove("popup_opened");
			document.querySelector(".page").style.overflow = "";
		}
		if (el.id === "job" && el.value !== profileSubtitle.textContent) {
			profileSubtitle.textContent = el.value.trim(" ");
			popup.classList.remove("popup_opened");
			document.querySelector(".page").style.overflow = "";
		}
	});
	renderInput();
}

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
	}
});

popupForm.addEventListener("submit", handleFormSubmit);

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

const elementsItems = document.querySelectorAll(".elements__item");

elementsItems.forEach((el) => {
	const likeBtn = el.querySelector(".elements__like-btn");
	likeBtn.addEventListener("click", () => {
		if (likeBtn.classList[2] !== "elements__like-btn_active") {
			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
			likeBtn.classList.toggle("elements__like-btn_active");
			setTimeout(() => {
				likeBtn.style.transform = "scale(1) translateZ(0)";
			}, 075);

			setTimeout(() => {
				likeBtn.innerHTML = templateLikeActive;
			}, 075);
			console.log();
		} else {
			likeBtn.style["-webkit-transform"] = "scale(0) translateZ(0)";
			likeBtn.classList.toggle("elements__like-btn_active");
			setTimeout(() => {
				likeBtn.style["-webkit-transform"] = "scale(1) translateZ(0)";
			}, 075);
			setTimeout(() => {
				likeBtn.innerHTML = templateLikeDisabled;
			}, 075);
		}
	});
});

const templateLikeActive = `<svg class='like-active'  viewBox="0 0 22 19" fill="black"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z"
                fill="black" />
            </svg>`;
const templateLikeDisabled = `
<svg class="like-disabled" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z"
                fill="black" />
            </svg>`;

renderInput();
