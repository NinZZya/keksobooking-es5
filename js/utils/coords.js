'use strict';
(function () {
  var coords = {
    create: create,
    setX: setX,
    setY: setY,
    set: set,
    convertToLocation: convertToLocation,
    convertFromLocation: convertFromLocation,
    convertToCoords: convertToCoords,
  };

  /**
   * @return {Object} {x:null, y:null}
   */

  function create() {
    return ({x: null, y: null});
  }

  /**
   * @param {number} x Координата X
   * @return {number} Координата в пределаха карты
   */

  function setX(x) {
    var minX = window.Constant.MAP_MIN_X;
    var maxX = window.Constant.MAP_MAX_X - window.Constant.MAIN_PIN_WIDTH;
    return Math.max(Math.min(x, maxX), minX);
  }

  /**
   * @param {number} y Координата Y
   * @return {number} Координата в пределаха карты
   */

  function setY(y) {
    var minY = window.Constant.MAP_MIN_Y;
    var maxY = window.Constant.MAP_MAX_Y;
    return Math.max(Math.min(y, maxY), minY);
  }

  /**
   * @param {Object} obj Координаты {x: number, y:number}
   * @param {number} x Координата X, которую нужно утановить
   * @param {number} y Координата Y, которую нужно утановить
   */
  function set(obj, x, y) {
    obj.x = setX(x);
    obj.y = setY(y);
  }

  /**
   * @param {Object} obj Координаты {x: number, y:number}
   */
  function convertToLocation(obj) {
    obj.x += Math.floor(window.Constant.MAIN_PIN_WIDTH / 2);
    obj.y += window.Constant.MAIN_PIN_HEIGHT;
  }

  /**
   * @param {Object} obj Координаты {x: number, y:number}
   */
  function convertFromLocation(obj) {
    obj.x -= Math.floor(window.Constant.PIN_WIDTH / 2);
    obj.y -= window.Constant.PIN_HEIGHT;
  }

  /**
   * @description Удалит слово "px" у координат
   * @param {Object} obj Координаты {x: number, y:number}
   * @param {string} x Координата X, которую нужно сконвертировать
   * @param {string} y Координата Y, которую нужно сконвертировать
   */
  function convertToCoords(obj, x, y) {
    obj.x = convertToCoord(x);
    obj.y = convertToCoord(y);
  }

  /**
   * @description Конвертирует координату в число, удаляет "px" если есть
   * @param {Object} coord Координата
   */

  function convertToCoord(coord) {
    return parseInt(String(coord).replace('px', ''), 10);
  }

  window.coords = coords;
})();
