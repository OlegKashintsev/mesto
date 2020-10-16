export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._alt = data.name;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place")
      .cloneNode(true);

    return cardElement;
  }

  //публичный метод удаления карточки из разметки
  removeCard() {
    this._element.remove();
    // Зануляем ссылку на элемент, чтобы сборщик мусора начал работать.
    this._element = null;
  }

  // лайкнуть
  _changeLike() {
    this._element
      .querySelector(".place__button_like")
      .classList.toggle("place__button_like_active");
  }


  //приватный метод установки слушателей
  _setEventListeners() {
    // лайк
    this._element
      .querySelector(".place__button_like")
      .addEventListener("click", () => {
        this._changeLike();
      });
    // удалить
    this._element
      .querySelector(".place__button_remove")
      .addEventListener("click", () => {
        this.removeCard();
      });
    // zoom
    this._element
      .querySelector(".place__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._element);
      });
  }

  //публичный метод создания карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".place__title").textContent = this._name;
    const cardElementImage = this._element.querySelector(".place__image");
    cardElementImage.src = this._link;
    cardElementImage.alt = this._alt;
    return this._element;
  }
}

