export class FormValidator {
  constructor (formConfig, formElement){
    this._formConfig = formConfig;
    this._formElement = formElement;
  }


// Приватный метод: добавляет класс с ошибкой
_showInputError = (formElement, inputElement, errorMessage, formConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formConfig.inputErrorSelector); //'popup__input-error'
  errorElement.textContent = errorMessage; // Показывает сообщение об ошибке
  errorElement.classList.add(formConfig.inputErrorClass); //'popup__input-error_active'
};

// Приватный метод: удаляет класс с ошибкой
_hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(formConfig.inputErrorSelector); // Скрываем сообщение об ошибке
  errorElement.classList.remove(formConfig.inputErrorClass); // Очищаем ошибку
  errorElement.textContent = '';
};

// Приватный метод: проверка валидности полей
_hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// Приватный метод: переключение активации кнопки
_toggleButtonState = (inputList, buttonSubmit, formConfig) => {
  if (this._hasInvalidInput(inputList)) {
   buttonSubmit.classList.add(formConfig.inactiveButtonClass);
   buttonSubmit.disabled = true;
 } else {
   buttonSubmit.classList.remove(formConfig.inactiveButtonClass);
   buttonSubmit.disabled = false;
 }
};

// Приватный метод: проверяем валидность поля
_checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    this._showInputError(formElement, inputElement, inputElement.validationMessage, formConfig);
  } else {
    this._hideInputError(formElement, inputElement, inputElement.validationMessage, formConfig);
  }
};

// Приватный метод: добавляем слушатели всем полям ввода внутри формы
_setEventListeners = (formElement, formConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(formConfig.inputSelector));
  const buttonSubmit = formElement.querySelector(formConfig.submitButtonSelector);
    this._toggleButtonState(inputList, buttonSubmit, formConfig);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(formElement, inputElement, formConfig);
      this._toggleButtonState(inputList, buttonSubmit, formConfig);
    });
  });
};

// Публичный метод: включаем валидацию формы
enableValidation() {
  this._setEventListeners(this._formElement, this._formConfig);
}
}
  
 
  


 
