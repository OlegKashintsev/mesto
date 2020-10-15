// карточки "по умолчанию"
export const cards = [
  {
    name: "Казань",
    link: "../images/kazan.jpg",
  },
  {
    name: "Казбег",
    link: "./images/kazbeg.jpg",
  },
  {
    name: "Алтай",
    link: "./images/altay.jpg",
  },
  {
    name: "Йошкар-Ола",
    link: "./images/yoshkar-ola.jpg",
  },
  {
    name: "Тюмень",
    link: "./images/tyumen.jpg",
  },
  {
    name: "Байкал",
    link: "./images/baikal.jpg",
  },
];

export const formConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  inputErrorSelector: ".popup__input-error",
  submitButtonSelector: ".popup__button_submit",
  inactiveButtonClass: "popup__button_submit_inactive",
  inputErrorClass: "popup__input-error_active",
  errorClass: "popup__input-error_hidden",
};

export default formConfig;

// Профиль
export const popupProfileSelector = ".popup_type_profile"; // Попап профиля
export const buttonEditSelector = ".profile__button_edit"; // Открыть редактирование профиля
export const buttonCloseProfileSelector = ".popup__button_close_profile"; // Закрыть редактирование профиля
export const containerProfileSelector = ".popup__container_edit"; // Контейнер попапа редактирования профиля
export const nameInputSelector = ".popup__input_name"; // Имя профиля в попап
export const professionInputSelector = ".popup__input_profession"; // Профессия профиля в попап
export const nameFormSelector = ".profile__name"; // Имя профиля на странице
export const professionFormSelector = ".profile__profession"; // Профессия профиля на странице
export const Escape = 27; // код клавиши Escape

//Zoom изображения
export const buttonCloseImageSelector = ".popup__button_close_image"; // Закрыть отображение картинки в полноэкранном режиме
export const popupFullscreenImageSelector = ".popup__image_fullscreen"; // Открыть картинку в полноэкранном режиме
export const popupFigcaptionSelector = ".popup__image_figcaption"; // Подпись картинки в полноэкранном режиме
export const placeLinkSelector = ".popup__input_place_link"; // Ссылка картинки в попапе
export const popupImageSelector = ".popup_type_image"; // Попап картинки

//create forms massive
export const placeContainerSelector = ".places"; // Контейнер для создания карточки
export const buttonSubmitSelector = ".popup__button_submit"; // Создать карточку

//Карточки
export const popupAddSelector = ".popup_type_add"; //попап добавления карточки
export const buttonAddSelector = ".profile__button_add"; //кнопка добавления карточки
export const buttonCloseAddSelector = ".popup__button_close_add"; // Закрыть редактирование карточек
export const inputPlaceSelector = ".popup__input_place_title"; //ввод названия места
export const containerAddSelector = ".popup__container_add"; // Контейнер попапа добавления карточки
export const placeImageSelector = ".place__image"; //Карточка

// //Профиль
// const popupProfile = document.querySelector('.popup_type_profile'); // Попап профиля
// const buttonEdit = document.querySelector('.profile__button_edit'); // Открыть редактирование профиля
// const buttonCloseProfile = document.querySelector('.popup__button_close_profile'); // Закрыть редактирование профиля
// const containerProfile = document.querySelector('.popup__container_edit'); // Контейнер попапа редактирования профиля
// export const nameInput = document.querySelector('.popup__input_name'); // Имя профиля в попап
// export const professionInput = document.querySelector('.popup__input_profession'); // Профессия профиля в попап
// const nameForm = document.querySelector('.profile__name'); // Имя профиля на странице
// const professionForm = document.querySelector('.profile__profession'); // Профессия профиля на странице

// //Карточки
// const popupAdd = document.querySelector('.popup_type_add'); // Попап добавления карточки
// const buttonSubmit = document.querySelector('.popup__button_submit'); // Создать карточку
// const buttonAdd = document.querySelector('.profile__button_add'); // Открыть редактирование карточек
// const buttonCloseAdd = document.querySelector('.popup__button_close_add');  // Закрыть редактирование карточек
// const containerAdd = document.querySelector('.popup__container_add'); // Контейнер попапа добавления карточки
// const placeContainer = document.querySelector('.places'); // Контейнер для создания карточки

// //Картинки
// const buttonCloseImage = document.querySelector('.popup__button_close_image');  // Закрыть отображение картинки в полноэкранном режиме
// const placeLink = document.querySelector('.popup__input_place_link'); // Ссылка картинки в попапе
