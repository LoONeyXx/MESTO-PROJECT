export function openPopup(popup) {
    popup.classList.add("popup_opened");
    addOverlayListeners()
}

export function closePopup() {
    document.querySelector('.popup_opened').classList.remove("popup_opened");
    removeOverlayListeners()
}

function addOverlayListeners() {
    document.addEventListener('keydown', escapeFromPopup)
}

function removeOverlayListeners() {
    document.removeEventListener('keydown', escapeFromPopup)
}

function escapeFromPopup(event) {
    if (event.key === 'Escape') {
        closePopup()
    }
}
