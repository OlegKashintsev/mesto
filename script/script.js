const buttonClose = document.querySelector('.popup__button_close');
const buttonEdit = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const container = document.querySelector('.popup__container');
const buttonSave = document.querySelector('.popup__button_save');
let nameInput = document.querySelector('.popup__input_name');
let professionInput = document.querySelector('.popup__input_profession');
let nameForm = document.querySelector('.profile__name');
let professionForm = document.querySelector('.profile__profession');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameForm.textContent;
  professionInput.value = professionForm.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened')
};

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
buttonSave.addEventListener('click', closePopup);

function formSubmitHandler (evt) {       
  evt.preventDefault();
nameForm.textContent = nameInput.value;
professionForm.textContent = professionInput.value;
};

container.addEventListener('submit', formSubmitHandler);
