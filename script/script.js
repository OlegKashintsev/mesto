// Попап

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
const buttonCreate = document.querySelector('.popup__button_create'); // Создать карточку
const buttonAdd = document.querySelector('.profile__button_add'); // Открыть редактирование карточек
const buttonCloseAdd = document.querySelector('.popup__button_close_add');  // Закрыть редактирование карточек 
const containerAdd = document.querySelector('.popup__container_add'); // Контейнер попапа добавления карточки
const placeTemplate = document.querySelector('#card').content; // Шаблон карточки
const placeContainer = document.querySelector('.places'); // Контейнер для создания карточки




//Картинки
const popupImage = document.querySelector('.popup_type_image'); // Открыть картинку по нажатию
const placeForm = document.querySelector('.popup__input_place_title'); // Название картинки в попапе
const placeLink = document.querySelector('.popup__input_place_link'); // Ссылка картинки в попапе
const popupFullscreenImage = document.querySelector('.popup__image_fullscreen'); // Открыть картинку в полноэкранном режиме 
const buttonCloseImage = document.querySelector('.popup__button_close_image');  // Закрыть отображение картинки в полноэкранном режиме 
const popupFigcaption = document.querySelector('.popup__image_figcaption'); // Подпись картинки в полноэкранном режиме


const card = [{}];
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

//  Открытие/закрытие попапов
function togglePopup(popupElement) {
  popupElement.classList.toggle('popup_opened'); 
}


// Открыть картинку в полноэкранном режиме

function openFullscreenImage(evt) {
  popupFullscreenImage.src = evt.target.src;
  popupFullscreenImage.alt = evt.target.alt;
  popupFigcaption.textContent = evt.target.alt;
  togglePopup(popupImage);
}


// Попап редактирования профиля
function ProfileEdit() {
   nameInput.value = nameForm.textContent; 
   professionInput.value = professionForm.textContent; 
   togglePopup(popupProfile);
}

// Попап добавления новой карточки
function AddPopup() {
  placeForm.value = ''; 
  placeLink.value = '';
  togglePopup(popupAdd);
}

// Лайкнуть
function changeLike(evt) {
  evt.target.classList.toggle('place__button_like_active');
  evt.target.classList.toggle('place__button_like_disactive');
  return evt
};

// Удалить карточку
function deleteCard(evt) {
  const placeCard = evt.target.closest('.place'); 
  placeCard.querySelector('.place__button_like_disactive, .place__button_like_active').removeEventListener('click', changeLike);
  placeCard.querySelector('.place__button_remove').removeEventListener('click', deleteCard);
  placeCard.querySelector('.place__image').removeEventListener('click', openFullscreenImage);
  placeCard.remove()
};

// Создать новую карточку 
function addNewCard(item) {
  const placeElement = placeTemplate.cloneNode(true)
  const placeImage = placeElement.querySelector('.place__image');
  placeImage.src = item.link;
  placeElement.querySelector('.place__title').textContent = item.name;
  placeImage.alt = item.name;
  placeElement.querySelector('.place__button_like_disactive').addEventListener('click', changeLike)
  placeElement.querySelector('.place__button_remove').addEventListener('click', deleteCard)
  placeImage.addEventListener('click', openFullscreenImage)
  return placeElement
};

 //  Добавить карточки в разметку
function addCard(card) {
  placeContainer.prepend(addNewCard(card))
};


function revealCards(cards) {
  cards.forEach(addCard)
}; 



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
  const card = addNewCard({
     name: placeForm.value, 
     link: placeLink.value});
  placeContainer.prepend(card);
  togglePopup(popupAdd);
}


// Обработчики
containerProfile.addEventListener('submit', formEditSubmitHandler);
containerAdd.addEventListener('submit', formAddSubmitHandler);
buttonCreate.addEventListener('click', (evt) => togglePopup(evt.target));
buttonEdit.addEventListener('click', ProfileEdit);
buttonAdd.addEventListener('click', AddPopup);
buttonCloseProfile.addEventListener('click', ProfileEdit);
buttonCloseAdd.addEventListener('click', AddPopup);
buttonCloseImage.addEventListener('click', (evt) =>  togglePopup(evt.target.closest('.popup')));
revealCards(cards);


