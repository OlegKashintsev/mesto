//класс Section, отвечает за отрисовку элементов на странице
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer; //CALLBACK
    this._container = document.querySelector(containerSelector);
    this.renderItems();
  }

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  }

  //публичный метод: принимает DOM-элемент и добавляет в контейнер, отрисовываем карточки с сервера
  addItem(item) {
    this._container.append(this._renderer(item));
  }

  //публичный метод: принимает DOM-элемент и добавляет в контейнер, отрисовываем новые карточки
  addUserItem(item) {
    this._container.prepend(this._renderer(item));
  }
}
