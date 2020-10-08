// import {togglePopup, popupImage, popupFullscreenImage, placeForm, formConfig, cardListSelector, nameInput, professionInput, popupProfile} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {cards} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  placeContainer,
  nameInput,
  professionInput,
  formConfig,
  containerProfile,
  containerAdd,
  popupImage,
  popupProfile,
  buttonEdit,
  buttonAdd,
  buttonSubmit
} from '../utils/constants.js';


// export const fullsizeImg = document.querySelector('.popup__fullsize-img');//полноразмерное изображение
// export const fullsizeImgCaption = document.querySelector('.popup__fullsize-img-caption');// подпись для полноразмерного изображения
// //create forms massive
// export const popupSection = Array.from(document.querySelectorAll('.popup'));//секция с формами

// export const elemSection = document.querySelector('.elements');//сюда будут добавляться карточки
// export const cardListSelector = '.elements'// раздел "карточки" для querySelector в классе Section
// export const profileForm = document.querySelector('#edit-profile');//форма редактирования профиля
// export const editButton = document.querySelector('.profile__edit-button');//кнопка редактирования профиля
// export const closeProfileFormBtn = document.querySelector('#profile-close');//кнопка закрытия формы ред профиля

// export const closeImgFormBtn = document.querySelector('#img-close');//кнопка закрытия формы просмотра изображения
// export const placeForm = document.querySelector('#edit-place');//форма добавления места
// export const addCardButton = document.querySelector('.profile__add-button');//кнопка добавления нового места
// export const closePlaceFormBtn = document.querySelector('#place-close');//кнопка закрытия формы добавления места

// export const EditAvatar = document.querySelector('#edit-avatar');//форма редактирования аватара
// export const avatarEditButton = document.querySelector('.profile__avatar-edit-button'); //кнопка редактирования аватара
// export const profileName = document.querySelector('.profile__name');//имя профиля
// export const profileLifestyle = document.querySelector('.profile__lifestyle');//профессия профиля
// export const inputName = document.getElementById('popup_name');//ввод имени профиля
// export const inputLifestyle = document.getElementById('popup_lifestyle');// ввод професси в профиле
// export const inputPlace = document.querySelector('#popup_place');//ввод названия места
// export const inputLink = document.querySelector('#popup_link');//ввод ссылки на фото места





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


// Валидация 
const formProfessionValidation = new FormValidator(formConfig, containerProfile);
formProfessionValidation.enableValidation();

const formPlaceValidation = new FormValidator(formConfig, containerAdd);
formPlaceValidation.enableValidation();

  //экземпляр UserInfo
  const userProfile = new UserInfo({
    userNameSelector:'.profile__name',
    userLifestyleSelector: '.profile__profession',
  });

  // userProfile.setUserInfo(userData);

// Попап редактирования профиля
buttonEdit.addEventListener('click', () => {
  const formValues  = userProfile.getUserInfo();
  nameInput.value =  formValues.name;
  professionInput.value =  formValues.about;//.lifestyle
  popupProfile.openPopup()
});

// Попап добавления новой карточки
buttonAdd.addEventListener('click', () =>{
  popupAdd.openPopup();
  popupAdd.clearInputsValues();
});

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
// containerProfile.addEventListener('submit', formEditSubmitHandler);
// containerAdd.addEventListener('submit', formAddSubmitHandler);
// buttonSubmit.addEventListener('click', (evt) => togglePopup(evt.target));
// buttonEdit.addEventListener('click',openProfileEditForm);
// buttonAdd.addEventListener('click', openAddPlaceForm);
// buttonCloseProfile.addEventListener('click', openProfileEditForm);
// buttonCloseAdd.addEventListener('click', openAddPlaceForm);
// buttonCloseImage.addEventListener('click',(evt) => togglePopup(evt.target));

// popupImage.addEventListener('click', function(e) {
//   if (!popupFullscreenImage.contains(e.target)) {
//     togglePopup(popupImage);
//   }
// })
// popupProfile.addEventListener('click', function(e) {
//   if (!containerProfile.contains(e.target)) {
//      togglePopup(popupProfile);
//      }
// })
// popupAdd.addEventListener('click', function(e) {
//   if (!containerAdd.contains(e.target)) {
//      togglePopup(popupAdd);
//   }
// });



//     //экземпляр UserInfo
//     const userProfile = new UserInfo({
//       userNameSelector:'.profile__name',
//       userLifestyleSelector: '.profile__profession',
//        });

//     userProfile.setUserInfo(userData);


// //     //создаём экземпля карточки
//     const cardCreateFunction = (item, userId, index) => {
//       const card = new Card({
//         data:item,
//         myId:userData._id,
//         cardSelector:'.card',
//         handleCardClick:(popupData)=>{
//           fullSizeImg.openPopup(popupData);
//         },
//         deleteButtonHandler: (cardId)=>{
//           popupDelete.openPopup(cardId);
//           popupDelete.setSubmitAction(()=>{
//             // popupDelete.openPopup();
//             popupDelete.addBtnDeleting()
//             api.deleteCard(cardId)
//               .then(() => {
//                 card.removeCard();//it's a life!
//               })
//               .catch(err => console.error(err))//выведем ошибку
//             .finally(()=>
//               popupDelete.removeBtnDeleting(),
//               popupDelete.closePopup()
//             )
//           })
//           // popupDelete.openPopup();
//         },
       
//       });

// //         const cardElement = card.generateCard(userId, true);
// //         if (index === true){
// //           cardList.addItem(cardElement);
// //         } else {
// //           cardList.addUserItem(cardElement);
// //         }
// //         // cardList.addItem(cardElement, true);
// //         return card

// //       }

// //       //создаем массив начальных карточек
//       const cardList = new Section ({
//         items: initialCards,
//         renderer:  cardCreateFunction,
//         },
//         cardListSelector
//       );

// //     //экземпляр PopupWithImage
//     const fullSizeImg = new PopupWithImage ('.popup__image_fullscreen');
//     //форма добавления места
//     const placeFormAdd = new PopupWithForm({
//       popupSelector:'#edit-place',
//       handleFormSubmit:(popupData)=>{
//       placeFormAdd.addBtnLoading();
//         api.postNewCadr(popupData)
//         .then ((popupData)=>{
//           cardCreateFunction(popupData, false);
//           // const cardElement = card.generateCard();
//           // cardList.addItem(cardElement, true);
//         })
//         .catch(err => console.error(err))//выведем ошибку
//         .finally(()=>
//         placeFormAdd.removeBtnLoading(),
//         placeFormAdd.closePopup()
//         )
//       }
//     });

// //    //попап редактирования профиля
//     const profileFormEdit = new PopupWithForm({
//       popupSelector: '#edit-profile',
//       handleFormSubmit:(profileData) => {
//         profileFormEdit.addBtnLoading();
//         api.patchUserInfo(profileData)
//         .then((profileData)=> {
//           userProfile.setUserInfo(profileData);
//         })
//         .catch(err => console.error(err))//выведем ошибку
//         .finally(()=>
//         profileFormEdit.removeBtnLoading(),
//         profileFormEdit.closePopup()
//         )
//       }
//     });

// //     попап редактирования аватара
//     const avatarFormEdit = new PopupWithForm({
//       popupSelector:'#edit-avatar',
//       handleFormSubmit:(profileData) =>{
//         avatarFormEdit.addBtnLoading();
//         api.patchUserAvatar(profileData.avatar_url)
//         .then((data)=>{
//           userProfile.setNewUserAvatar(data);
//         })
//         .catch(err => console.error(err))//выведем ошибку
//         .finally(()=>
//         avatarFormEdit.removeBtnLoading(),
//         avatarFormEdit.closePopup()
//         )
//       }
//     });
   
// //     //рисуем массив начальных карточек
//     cardList.renderItems();

// //     //открытие формы "Редактировать профиль"
//     buttonEdit.addEventListener('click', () => {
//       const formValues  = userProfile.getUserInfo();
//       nameInput.value =  formValues.name;
//       professionInput.value =  formValues.about;//.lifestyle
//      popupProfile.openPopup()
//     });


// //     //открытие формы "Новое место"
//     addCardButton.addEventListener('click', () =>{
//       placeFormAdd.openPopup();
//       placeFormAdd.clearInputsValues();
//     });

// //     //открытие формы "Редактируем аватар"
//     avatarEditButton.addEventListener('click', ()=> {
//       avatarFormEdit.openPopup();
//       avatarFormEdit.clearInputsValues();
//     })

