const popup = document.querySelector('.popup'); // Попап

//Профиль
const popupProfile = document.querySelector('.popup_type_profile'); // Попап профиля
const buttonEdit = document.querySelector('.profile__button_edit'); // Открыть редактирование профиля
const buttonSaveProfile = document.querySelector('.popup__button_save'); // Сохранить изменения профиля
const buttonCloseProfile = document.querySelector('.popup__button_close_profile'); // Закрыть редактирование профиля 
const containerProfile = document.querySelector('.popup__container_edit'); // Контейнер попапа редактирования профиля
let nameInput = document.querySelector('.popup__input_name'); // Имя профиля в попап
let professionInput = document.querySelector('.popup__input_profession'); // Профессия профиля в попап
let nameForm = document.querySelector('.profile__name'); // Имя профиля на странице
let professionForm = document.querySelector('.profile__profession'); // Профессия профиля на странице

//Карточки
const popupAdd = document.querySelector('.popup_type_add'); // Попап добавления карточки
const buttonCreate = document.querySelector('.popup__button_create'); // Создать карточку
const buttonAdd = document.querySelector('.profile__button_add'); // Открыть редактирование карточек
const buttonCloseAdd = document.querySelector('.popup__button_close_add');  // Закрыть редактирование карточек 
const containerAdd = document.querySelector('.popup__container_add'); // Контейнер попапа добавления карточки
const placeTemplate = document.querySelector('#card').content; // Шаблон карточки
const placeContainer = document.querySelector('.place'); // Контейнер для создания карточки

const buttonLike = document.querySelector('.place__button_like_disactive'); // Кнопка лайка
const buttonRemove = document.querySelector('.place__button_remove'); // Кнопка удаления

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

// Открыть картинку в полноэкранном режиме
function openFullscreenImage(evt) {
  popupFullscreenImage.src = evt.target.src;
  popupFullscreenImage.alt = evt.target.alt;
  popupImage.classList.add('popup_opened');
  popupFigcaption.textContent = evt.target.alt;
}

// Закрыть картинку в полноэкранном режиме
function closeFullscreenImage() {
  popupImage.classList.remove('popup_opened');
}

// Лайкнуть
function changeLike(evt) {
  evt.target.classList.toggle('place__button_like_active');
  evt.target.classList.toggle('place__button_like_disactive');
  return evt
};

// Удалить карточку
function deleteCard(evt) {
  evt.target.closest('.place__item').remove()
};

// Создать новую карточку 
function addNewCard(item) {
  const placeElement = placeTemplate.cloneNode(true) 
  placeElement.querySelector('.place__image').src = item.link
  placeElement.querySelector('.place__title').textContent = item.name
  placeElement.querySelector('.place__image').alt = item.name;
  placeElement.querySelector('.place__button_like_disactive').addEventListener('click', changeLike)
  placeElement.querySelector('.place__button_remove').addEventListener('click', deleteCard)
  placeElement.querySelector('.place__image').addEventListener('click', openFullscreenImage)

  return placeElement
};

 //  Добавить карточки в разметку
function revealCards(cards) {
  cards.forEach(function (card) {
    placeContainer.prepend(addNewCard(card))
  })
}; 

// Открыть попап редактирования профиля
function openProfileEdit() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = nameForm.textContent;
  professionInput.value = professionForm.textContent;
};

// Закрыть попап редактирования профиля
function closeProfileEdit() {
  popupProfile.classList.remove('popup_opened');
};

// Открыть попап добавления карточек
function openAddPopup() {
  popupAdd.classList.add('popup_opened');
 };

// Закрыть попап добавления карточек
 function closeAddPopup() {
  popupAdd.classList.remove('popup_opened');
};

// Сохранить редакцию профиля
function formEditSubmitHandler (evt) {       
  evt.preventDefault();
nameForm.textContent = nameInput.value;
professionForm.textContent = professionInput.value;
};


// Отправка формы карточки
function formAddSubmitHandler (evt) { 
  evt.preventDefault()
  card[0].name = placeForm.value
  card[0].link = placeLink.value
  revealCards(card)
}


// Обработчики
buttonEdit.addEventListener('click', openProfileEdit);
buttonCloseProfile.addEventListener('click', closeProfileEdit);
buttonCloseAdd.addEventListener('click', closeAddPopup);
buttonCloseImage.addEventListener('click', closeFullscreenImage);
buttonSaveProfile.addEventListener('click', closeProfileEdit);
buttonAdd.addEventListener('click', openAddPopup);
containerProfile.addEventListener('submit', formEditSubmitHandler);
containerAdd.addEventListener('submit', formAddSubmitHandler);
buttonCreate.addEventListener('click', closeAddPopup);

revealCards(cards);


