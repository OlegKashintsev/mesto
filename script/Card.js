const cards = [
    {
      name: 'Казань',
      link: "./images/kazan.jpg"
  },
  {
      name: 'Казбег',
      link: "./images/kazbeg.jpg"
  },
  {
      name: 'Алтай',
      link: "./images/altay.jpg"
  },
  {
      name: 'Йошкар-Ола',
      link: "./images/yoshkar-ola.jpg"
  },
  {
      name: 'Тюмень',
      link: "./images/tyumen.jpg"
  },
  {
      name: 'Байкал',
      link: "./images/baikal.jpg"
  }
  ];
'use strict';
import {popupImage, popupFullscreenImage, popupFigcaption, togglePopup} from './index.js';


export class Card {
    constructor(item, cardSelector) {
        this._link = item.link;
        this._name = item.name;
        this._cardSelector = cardSelector;
    }


_addNewCard(item) {
    const placeElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.place')
    .cloneNode(true);
    this._element = addNewCard();
    this._setEventListeners();
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('place__image').alt = this._name
    this._element.querySelector('place__title').textContent = this._name;
    return placeElement
}


// _setEventListeners() {
//     this._element.querySelector('.')
// }

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
  
}

//установка слушателей


  




