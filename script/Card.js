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

import {popupImage, popupFullscreenImage, placeForm, togglePopup, placeContainer} from './script.js';

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }


_getTemplate() {
    const placeElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.place')
    .cloneNode(true);
    // this._element = placeElement;
    return placeElement
}

generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('place__image').alt = this._name
    this._element.querySelector('place__title').textContent = this._name;

    return this._element;
}
 

addCard(card) {
    placeContainer.prepend(addNewCard(card));
  };
  
  
revealCards(cards) {
    cards.forEach(addCard);
  };
}

revealCards(cards);
