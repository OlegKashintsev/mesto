import formConfig from "../utils/constants.js";

export default class FormValidator {
  constructor(formSelector) {
    this._formElement = document.querySelector(formSelector);
    this._setEventListeners();
  }

  // Приватный метод: добавляет класс с ошибкой
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(formConfig.inputErrorSelector); //'popup__input-error'
    errorElement.textContent = errorMessage; // Показывает сообщение об ошибке
    errorElement.classList.add(formConfig.inputErrorClass); //'popup__input-error_active'
  };

  // Приватный метод: удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(formConfig.inputErrorSelector); // Скрываем сообщение об ошибке
    errorElement.classList.remove(formConfig.inputErrorClass); // Очищаем ошибку
    errorElement.textContent = "";
  };

  // Приватный метод: проверка валидности полей
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // Приватный метод: переключение активации кнопки
  _toggleButtonState = (inputList, buttonSubmit) => {
    if (this._hasInvalidInput(inputList)) {
      buttonSubmit.classList.add(formConfig.inactiveButtonClass);
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.classList.remove(formConfig.inactiveButtonClass);
      buttonSubmit.disabled = false;
    }
  };

  // Приватный метод: проверяем валидность поля
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Удаление ошибок 
  deleteAllErrors = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(formConfig.inputSelector)
    );
      inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  // Приватный метод: добавляем слушатели всем полям ввода внутри формы
  _setEventListeners = () => {
    const inputList = Array.from(
      this._formElement.querySelectorAll(formConfig.inputSelector)
    );
    const buttonSubmit = this._formElement.querySelector(
      formConfig.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonSubmit);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonSubmit);
      });
    });
  };
}
