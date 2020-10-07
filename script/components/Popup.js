
//  Открытие/закрытие попапов
export default class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector('.popup__button_close');
    this._popupInputs = this._popupElement.querySelectorAll('.popup__input');
      //приватный метод: закрытие попапа клавишей Esc
    this._handleEscClose =(evt) => {
      if (evt.key ==='Escape'){
        this.closePopup();
      }
    }
    this._handleOverlayClose = (evt) => {
      if(evt.target.classList.contains('popup')){
        this.closePopup();
  }
}
  };


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

  //публичный метод: открытие окна
  openPopup() {
    this._popupElement.classList.remove('popup_hidden');
    //добавляем слушатель нажатия клавиши Esc
    document.addEventListener('keyup', this._handleEscClose);
    //добавляем слушатель клика на оверлей
    document.addEventListener('mousedown',this._handleOverlayClose);
  }

 //публичный метод: закрытие окна
 closePopup() {
  this._popupElement.classList.add('popup_hidden');

  //удаляем слушатель нажатия клавиши Esc
  document.removeEventListener('keyup', this._handleEscClose);
  //удаляем слушатель клика на оверлей
  document.removeEventListener('mousedown',this._handleOverlayClose);
  }


  //публичный метод: добавляет слушатели
  setEventListeners() {
    //слушатель клика по иконке закрытия попапа
    this._popupCloseBtn.addEventListener('click', () =>{
      this.closePopup()
    })
  }
}