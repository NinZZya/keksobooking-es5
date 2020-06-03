'use strict';
(function () {
  var ESK_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var Utils = {
    RenderPosition: {
      AFTERBEGIN: 'afterbegin',
      BEFOREEND: 'beforeend',
    },

    /**
    * @description Проверяет нажата клавиша Esc
    * @param {number} evt Код клавиши
    * @return Возвращает true || false
    */

    isEscKeycode: function (evt) {
      return evt.keyCode === ESK_KEYCODE;
    },

    /**
    * @param {number} evt Код клавиши
    * @return Возвращает true || false
    */

    isEnterKeycode: function (evt) {
      return evt.keyCode === ENTER_KEYCODE;
    },

    /**
    * @description Возвращет склоненние слова или окончание для числа
    * @param {number} number Число, дя которого нужно найти склонение слов или окончания числа
    * @param {Object[]} txt Массив склонений слов или окончания числа
    * @return {String} Слово или окончание для числа
    */

    getEndWord: function (number, txt) {
      var cases = [2, 0, 1, 1, 1, 2];
      var index = 0;
      if (number % 100 > 4 && number % 100 < 20) {
        index = 2;
      } else {
        index = cases[(number % 10 < 5) ? number % 10 : 5];
      }
      return txt[index];
    },

    /**
     * @description Вставляет <component> в <container> на место <place>
     * @param {Object} container DOM-элемент, куда необходимо вставить component
     * @param {Object} component DOM-элемент, который необходимо вставить в container
     * @param {string} place Место вставки в container значение afterbegin || beforeend
     */

    render: function (container, component, place) {
      switch (place) {
        case window.Utils.RenderPosition.AFTERBEGIN:
          container.prepend(component);
          break;
        case window.Utils.RenderPosition.BEFOREEND:
          container.append(component);
          break;
      }
    },

    /**
     * Удаляет компонент component
     * @param {Object} component
     */
    remove: function (component) {
      component.getElement().remove();
      component.removeElement();
    },

    /**
    * @description Создает DOM элемент из шаблонной строки
    * @param {string} template Шаблон элемента в виде строки
    * @return {Object} Возвращает DOM элемент
    */

    createElement: function (template) {
      var newElement = document.createElement('div');
      newElement.innerHTML = template;

      return newElement.firstChild;
    },

    /**
     * @param {number} x Координата X
     * @return {number} Координата в пределаха карты
     */

    setCoordX: function (x) {
      var minX = window.inf.mapMinX;
      var maxX = window.inf.mapMaxX - window.inf.pinWidth;
      return Math.max(Math.min(x, maxX), minX);
    },

    /**
     * @param {number} y Координата Y
     * @return {number} Координата в пределаха карты
     */

    setCoordY: function (y) {
      var minY = window.inf.mapMinY;
      var maxY = window.inf.mapMaxY;
      return Math.max(Math.min(y, maxY), minY);
    },
  };

  window.Utils = Utils;
})();