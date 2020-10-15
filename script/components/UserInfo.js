export default class UserInfo {
  constructor({ userNameSelector, userProfessionSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userProfession = document.querySelector(userProfessionSelector);
  }

  //публичный метод: возвращает объект с данными пользователя
  getUserInfo() {
      const userInformation = {
      userName: this._userName.textContent,
      userProfession: this._userProfession.textContent
    }
        return userInformation
    }

  //публичный метод: принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(popupData) {
    this._userName.textContent = popupData.name;
    this._userProfession.textContent = popupData.profession;
  }
}
