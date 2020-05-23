const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input-error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonSubmit = formElement.querySelector('.popup__button_submit');
    toggleButtonState(inputList, buttonSubmit);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSubmit);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonSubmit) => {
  if (hasInvalidInput(inputList)) {
   buttonSubmit.classList.add('popup__button_submit_inactive');
   buttonSubmit.disabled = true;
 } else {
   buttonSubmit.classList.remove('popup__button_submit_inactive');
   buttonSubmit.disabled = false;
 }
};

const enableValidation = () => {
const formList = Array.from(document.querySelectorAll('.popup__container'));
formList.forEach((formElement) => {
      setEventListeners(formElement);
  });
};

enableValidation();

// const enableValidation = ({...data}) => {
//   const formSelector = data.formSelector;
//   const inputSelector = data.inputSelector;
//   const inputErrorClass = data.inputErrorClass;
//   const errorClass = data.errorClass;
//   const submitButtonSelector = data.submitButtonSelector;
//   const activeButtonClass = data.activeButtonClass;
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
// evt.preventDefault();
//     });
//     setEventListeners(formElement, inputSelector, inputErrorClass, errorClass, submitButtonSelector, activeButtonClass);
//   });
// };

//    enableValidation({
//      formSelector: '.popup',
//      inputSelector: '.popup__input',
//      inputErrorClass: 'popup__input-error',
//      errorClass: '.popup__input-error_active',
//      submitButtonSelector: '.popup__button_save',
//      activeButtonClass: 'popup__button_save_inactive'
//    });
 


 
