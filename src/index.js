import "./pages/index.css";
//импортируем модули и константы
import Card from "./script/components/Card.js";
import PopupWithImage from "./script/components/PopupWithImage.js";
import {
  cards,
  placeContainerSelector,
  nameInputSelector,
  professionInputSelector,
  popupImageSelector,
  placeImageSelector,
  buttonEditSelector,
  buttonAddSelector,
  popupProfileSelector,
  popupAddSelector,
  buttonSubmitSelector,
} from "./script/utils/constants.js";
import Section from "./script/components/Section.js";
import PopupWithForm from "./script/components/PopupWithForm.js";
// import Api from '../components/Api.js';
// import PopupWithDelConfirm from '../components/PopupWithDelConfiirm';
import UserInfo from "./script/components/UserInfo.js";
import FormValidator from "./script/components/FormValidator";

const section = new Section(
  {
    items: cards,
    renderer: cardCreateFunction,
  },
  placeContainerSelector
);

//Инициирование валидации
const proflieFormValidator = new FormValidator(popupProfileSelector);
const addPlaceFormValidator = new FormValidator(popupAddSelector);

//экземпляр UserInfo
const userProfile = new UserInfo({
  userNameSelector: ".profile__name",
  userProfessionSelector: ".profile__profession",
});

//открытие попапа редактирования профиля
const buttonEditElement = document.querySelector(buttonEditSelector);
const popupProfile = new PopupWithForm(popupProfileSelector, (userInfo) => {
  this.userProfile.setUserInfo(userInfo);
});

//открытие попапа добавления карточки
const buttonAddElement = document.querySelector(buttonAddSelector);
const addPlacePopup = new PopupWithForm(popupAddSelector, (addUserPlace) => {
  section.addUserItem(addUserPlace);
});

//открытие попапа зума изображения
const popupZoom = new PopupWithImage(popupImageSelector);

//слушатель на открытие попапа редактирования профиля
buttonEditElement.addEventListener("click", () => {
  const userInformation = userProfile.getUserInfo();
  const nameInputElement = document.querySelector(nameInputSelector);
  const professionInputElement = document.querySelector(
    professionInputSelector
  );
  nameInputElement.value = userInformation.userName;
  professionInputElement.value = userInformation.userProfession;
  popupProfile.openPopup();
  proflieFormValidator.deleteAllErrors();
});

//слушатель на открытие попапа добавления места
buttonAddElement.addEventListener("click", () => {
  addPlacePopup.openPopup();
  addPlaceFormValidator.deleteAllErrors();
  const buttonSubmitElement = document.querySelector(buttonSubmitSelector);
  buttonSubmitElement.disabled = true;
});

function cardCreateFunction(item) {
  const card = new Card(item, "#card", handleCardClick);
  function handleCardClick(element) {
    const placeImage = element.querySelector(placeImageSelector); // Картинка (фотография) карточки
    popupZoom.openPopup(placeImage);
  }
  return card.generateCard();
}
