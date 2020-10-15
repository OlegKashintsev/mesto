//класс PopupWithForm

import Popup from "./Popup.js";
import formConfig from "../utils/constants.js";
import FormValidator from "./FormValidator.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitCallback) {
    super(popupSelector), 
    this._formSubmitCallback = formSubmitCallback; //CALLBACK
    this._errorInput = this._popupElement.querySelectorAll(
      formConfig.inputErrorSelector
    );
    this._submitButton = this._popupElement.querySelector(".popup__button_submit"); // кнопка сабмита
    this._submitButtonTextContent = this._submitButton.textContent; //сохранение текста кнопки начального
    this._formValidator = new FormValidator(popupSelector); // создаём валидацию
  }

   //приватный метод: собирает данные всех полей формы
  _getInputValues() {
       // достаём все элементы полей
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    // создаём пустой объект
    this._formValues = {};
    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
        });
    // возвращаем объект значений
    return this._formValues;
  }

  //публичный метод: очистки полей формы
  clearInputsValues() {
    this._formValues = "";
  }

  // //добавление надписи Сохранение...
  // addBtnLoading() {
  //   this._submitButton.textContent = 'Сохранение...';
  // }

  // //удаление надписи Сохранение...
  // removeBtnLoading() {
  //   this._submitButton.textContent = this._submitButtonTextContent;
  // }

  //публичный метод: установка слушателя
  _addEventListeners() {
       super._addEventListeners();
    this._popupElement.querySelector(".popup__container").addEventListener("submit", this._handleFormSubmit)
  }

  //
  _handleFormSubmit = (evt) => {
      // Эта строчка отменяет стандартную отправку формы.
      evt.preventDefault();
      this._formSubmitCallback(this._getInputValues());
      this.closePopup()
    }
  

_removeEventListeners() {
  super._removeEventListeners();
  this._popupElement.querySelector(".popup__container").removeEventListener("submit", this._handleFormSubmit)
}
  //публичный метод:перезаписываем родительский метод закрытия окна
  closePopup() {
    super.closePopup();
    this._popupElement.querySelector(".popup__container").reset();
    this._formValidator.deleteAllErrors();
  }
}
