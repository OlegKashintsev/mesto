export const placeForm = document.querySelector('.popup__input_place_title'); // Название картинки в попапе
export const popupFullscreenImage = document.querySelector('.popup__image_fullscreen'); // Открыть картинку в полноэкранном режиме 
export const popupFigcaption = document.querySelector('.popup__image_figcaption'); // Подпись картинки в полноэкранном режиме
export const popupImage = document.querySelector('.popup_type_image'); // Попап картинки
const Escape = 27; // код клавиши Escape 
export const formConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  inputErrorSelector: '.popup__input-error',
  submitButtonSelector: '.popup__button_submit',
  inactiveButtonClass: 'popup__button_submit_inactive',
  inputErrorClass: 'popup__input-error_active'
  }
  
//  Открытие/закрытие попапов
export function togglePopup(popupElement) {
    popupElement.classList.toggle('popup_opened'); 
   if (popupElement.classList.contains('popup_opened')) {
     document.addEventListener('keyup', (event) => escClose(event, popupElement))
   }
   else {document.removeEventListener('keyup', escClose(event, popupElement))}
 };
 
 // Закрытие попапа нажатием клавиши Esc
 function escClose(event, popupElement) {
   if (event.key == 'Escape'){ 
    popupElement.classList.remove('popup_opened');
  } 
 };

 
 



 