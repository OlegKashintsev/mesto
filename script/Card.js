import {popupImage, popupFullscreenImage, placeForm, togglePopup} from './index.js';
'use strict';

export class Card {
    constructor(item, cardSelector) {
        this._name = item.name;
        this._link = item.link;
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
}




