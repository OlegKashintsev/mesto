const buttonClose = document.querySelector('.popup__button_close');
const buttonEdit = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const container = document.querySelector('.popup__container');
const buttonSave = document.querySelector('.popup__button_save');

function openPopup() {
  popup.classList.add('popup_opened')
};

function closePopup() {
  popup.classList.remove('popup_opened')
};

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);


function formSubmitHandler (evt) {       
    evt.preventDefault()

    let nameInput = document.querySelector('.popup__input_name')
    let jobInput = document.querySelector('.popup__input_profession') 

    nameInput = nameInput.value
    professionInput = jobInput.value

    let nameForm = document.querySelector('.profile__name') 
    let professionForm = document.querySelector('.profile__profession')

    nameForm.textContent = nameInput
    professionForm.textContent = professionInput
};

container.addEventListener('submit', formSubmitHandler);


function save() {
  popup.classList.remove('popup_opened')
};

buttonSave.addEventListener('click', save);

document.querySelector('.popup__input_name').value = document.querySelector('.profile__name').textContent;
document.querySelector('.popup__input_profession').value = document.querySelector('.profile__profession').textContent;