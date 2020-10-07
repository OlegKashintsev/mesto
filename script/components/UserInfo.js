// import {
//   inputName,
//   inputLifestyle,

// } from '../utils/constants.js';

// export default class UserInfo {
//   constructor ({userNameSelector, userLifestyleSelector, userAvatarSelector}) {
//     this._userName = document.querySelector(userNameSelector);
//     this._userLifestyle = document.querySelector(userLifestyleSelector);
//     this._userAvatar = document.querySelector(userAvatarSelector);
//   }

//   //публичный метод: возвращает объект с данными пользователя
//   getUserInfo() {
//     this._formValues = {};
//     this._formValues[inputName.name] =  this._userName.textContent;
//     this._formValues[inputLifestyle.name] = this._userLifestyle.textContent;
//     return this._formValues;
//   }

//   //публичный метод: принимает новые данные пользователя и добавляет их на страницу
//   setUserInfo(popupData) {
//     this._userName.textContent = popupData.name;
//     this._userLifestyle.textContent = popupData.about;//.lifestyle - ето id Попапа!!!!!
//     this._userAvatar.src = popupData.avatar;
//   }
//   setNewUserAvatar(profileData){
//     this._userAvatar.src = profileData.avatar;
//   }
// }



import {
    nameInput,
    professionInput
  
  } from '../utils/constants.js';
  
  export default class UserInfo {
    constructor ({userNameSelector, userProfessionSelector, userAvatarSelector}) {
      this._userName = document.querySelector(userNameSelector);
      this._userProfession = document.querySelector(userProfessionSelector);
      this._userAvatar = document.querySelector(userAvatarSelector);
    }
  
    //публичный метод: возвращает объект с данными пользователя
    getUserInfo() {
      this._formValues = {};
      this._formValues[nameInput.name] =  this._userName.textContent;
      this._formValues[professionInput.name] = this._userProfession.textContent;
      return this._formValues;
    }
  
    //публичный метод: принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(popupData) {
      this._userName.textContent = popupData.name;
      this._userProfession.textContent = popupData.about;//.profession - ето id Попапа!!!!!
      this._userAvatar.src = popupData.avatar;
    }
    setNewUserAvatar(profileData){
      this._userAvatar.src = profileData.avatar;
    }
  }