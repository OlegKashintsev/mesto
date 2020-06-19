import {Card} from './Card.js';
import {togglePopup, popupImage, popupFullscreenImage, placeForm} from './Util.js';

//Профиль
const popupProfile = document.querySelector('.popup_type_profile'); // Попап профиля
const buttonEdit = document.querySelector('.profile__button_edit'); // Открыть редактирование профиля
const buttonCloseProfile = document.querySelector('.popup__button_close_profile'); // Закрыть редактирование профиля 
const containerProfile = document.querySelector('.popup__container_edit'); // Контейнер попапа редактирования профиля
const nameInput = document.querySelector('.popup__input_name'); // Имя профиля в попап
const professionInput = document.querySelector('.popup__input_profession'); // Профессия профиля в попап
const nameForm = document.querySelector('.profile__name'); // Имя профиля на странице
const professionForm = document.querySelector('.profile__profession'); // Профессия профиля на странице

//Карточки
const popupAdd = document.querySelector('.popup_type_add'); // Попап добавления карточки
const buttonSubmit = document.querySelector('.popup__button_submit'); // Создать карточку
const buttonAdd = document.querySelector('.profile__button_add'); // Открыть редактирование карточек
const buttonCloseAdd = document.querySelector('.popup__button_close_add');  // Закрыть редактирование карточек 
const containerAdd = document.querySelector('.popup__container_add'); // Контейнер попапа добавления карточки
const placeContainer = document.querySelector('.places'); // Контейнер для создания карточки


//Картинки
const buttonCloseImage = document.querySelector('.popup__button_close_image');  // Закрыть отображение картинки в полноэкранном режиме 
const placeLink = document.querySelector('.popup__input_place_link'); // Ссылка картинки в попапе
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


// Попап редактирования профиля
function profileEdit() {
   nameInput.value = nameForm.textContent; 
   professionInput.value = professionForm.textContent; 
   togglePopup(popupProfile);
   hideInputError(containerProfile, nameInput);
   hideInputError(containerProfile, professionInput);
};

// Попап добавления новой карточки
function addPopup() {
  placeForm.value = ''; 
  placeLink.value = '';
  togglePopup(popupAdd);
};

cards.forEach((item)=>{
  const card = new Card(item, '#card');
  const cardElement = card.generateCard();

  placeContainer.append(cardElement);
})

// Сохранить редакцию профиля
function formEditSubmitHandler (evt) {       
  evt.preventDefault();
 nameForm.textContent = nameInput.value;
 professionForm.textContent = professionInput.value;
 togglePopup(popupProfile);
};

// Отправка формы карточки
function formAddSubmitHandler (evt) { 
  evt.preventDefault();
  const userCard = new Card ({name: placeForm.value, link: placeLink.value, alt: placeForm.value}, '#card')
  const cardElement = userCard.generateCard();
  placeContainer.prepend(cardElement);
  placeForm.value ='';
  placeLink.value ='';
  togglePopup(popupAdd);
};

// Обработчики
containerProfile.addEventListener('submit', formEditSubmitHandler);
containerAdd.addEventListener('submit', formAddSubmitHandler);
buttonSubmit.addEventListener('click', (evt) => togglePopup(evt.target));
buttonEdit.addEventListener('click',profileEdit);
buttonAdd.addEventListener('click', addPopup);
buttonCloseProfile.addEventListener('click', profileEdit);
buttonCloseAdd.addEventListener('click', addPopup);
buttonCloseImage.addEventListener('click',(evt) => togglePopup(evt.target));

popupImage.addEventListener('click', function(e) {
  if (!popupFullscreenImage.contains(e.target)) {
    togglePopup(popupImage);
  }
})
popupProfile.addEventListener('click', function(e) {
  if (!containerProfile.contains(e.target)) {
     togglePopup(popupProfile);
     hideInputError(containerProfile, nameInput);
  }
})
popupAdd.addEventListener('click', function(e) {
  if (!containerAdd.contains(e.target)) {
     togglePopup(popupAdd);
  }
});
