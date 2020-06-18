'use strict';
import {popupImage, popupFullscreenImage, popupFigcaption, togglePopup} from './index.js';


export class Card {
    constructor(data, cardSelector) {
        this._link = data.link;
        this._alt = data.name;
        this._name = data.name;
        this._cardSelector = cardSelector;
    }


_getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.place')
    .cloneNode(true);
 
    return cardElement
}

// лайкнуть
_changeLike() { 
    this._element.querySelector('.place__button_like').classList.toggle('place__button_like_active');
  };

// Открыть картинку в полноэкранном режиме
 _openFullscreenImage() {
    popupFullscreenImage.src = this._element.querySelector('.place__image').src;
    popupFullscreenImage.alt = this._element.querySelector('.place__image').alt;
    popupFigcaption.textContent = this._element.querySelector('.place__image').alt;
    togglePopup(popupImage);
  };
//приватный метод delete
_deleteButtonHandler(){
        this._element.querySelector('.place__button_remove').closest('.place').remove();
     }


//приватный метод установки слушателей
_setEventListeners(){
    // лайк
    this._element.querySelector('.place__button_like').addEventListener('click', ()=>{this._changeLike()});
    // удалить
    this._element.querySelector('.place__button_remove').addEventListener('click', ()=>{this._deleteButtonHandler()});
    // zoom
    this._element.querySelector('.place__image').addEventListener('click',()=>{this._openFullscreenImage()});
  }

   //публичный метод создания карточки
   generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.place__title').textContent =this._name;
    const cardElementImage = this._element.querySelector('.place__image');
    cardElementImage.src=this._link;
    cardElementImage.alt = this._alt;

    return this._element;
  }

}






