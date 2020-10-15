//  Открытие/закрытие попапов
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__button_close");
    this._popupInputs = this._popupElement.querySelectorAll(".popup__input");
  }

  //приватный метод: закрытие попапа нажатием на оверлей
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.closePopup();
    }
  };

  //приватный метод: закрытие попапа клавишей Esc
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  };

  //публичный метод: открытие окна
  openPopup() {
    this._popupElement.classList.toggle("popup_opened");
    this._addEventListeners();
  }

  //публичный метод: закрытие окна
  closePopup()  {
    this._popupElement.classList.toggle("popup_opened");
    this._removeEventListeners();
  };

  //обработчик закрытия попапа нажатием на крестик
  _handleCloseClick = () =>  {
    this.closePopup();
     }

  //ставим слушателей на открытие/закрытие попапов
  _addEventListeners() {
    document.addEventListener("keyup", this._handleEscClose);
    document.addEventListener("mousedown", this._handleOverlayClose);
    this._popupCloseBtn.addEventListener("click", this._handleCloseClick);
    }
 
  _removeEventListeners() {
    document.removeEventListener("keyup", this._handleEscClose);
    document.removeEventListener("mousedown", this._handleOverlayClose);
    this._popupCloseBtn.removeEventListener("click", this._handleCloseClick);
  }
}

// export function togglePopup(popupElement) {
//   popupElement.classList.toggle('popup_opened');
//  if (popupElement.classList.contains('popup_opened')) {
//    document.addEventListener('keyup', (event) => escClose(event, popupElement))
//  }
//  else {document.removeEventListener('keyup', escClose(event, popupElement))}
// };

// // Закрытие попапа нажатием клавиши Esc
// function escClose(event, popupElement) {
//  if (event.key == 'Escape'){
//   popupElement.classList.remove('popup_opened');
// }
// };

// класс Popup, отвечает за открытие и закрытие попапа
// export default class Popup {
//   constructor (popupSelector) {
//     this._popupElement =  document.querySelector(popupSelector);
//     this._popupCloseBtn = this._popupElement.querySelector('.popup__close-button');
//     this._popupInputs = this._popupElement.querySelectorAll('.popup__input');
//     //приватный метод: закрытие попапа клавишей Esc
//     this._handleEscClose = (evt) => {
//       if(evt.key==='Escape') {
//         this.closePopup();
//       }
//     };
//     //приватный метод: закрытие попапа по клику на оверлей
//     this._handleOverlayClose = (evt) => {
//       if(evt.target.classList.contains('popup')){
//         this.closePopup();
//       }
//     };
//   }
