'use strict';
(function () {
  var Keycode = {
    ESK: 27,
    ENTER: 13,
  };


  var keyboard = {
    isEscPressed: isEscPressed,
    isEnterPressed: isEnterPressed,
  };

  /**
   * @description Проверяет нажата клавиша Esc
   * @param {number} evt Код клавиши
   * @return Возвращает true || false
   */

  function isEscPressed(evt) {
    return evt.keyCode === Keycode.ESC;
  }

  /**
   * @description Проверяет нажата клавиша Enter
   * @param {number} evt Код клавиши
   * @return Возвращает true || false
   */

  function isEnterPressed(evt) {
    return evt.keyCode === Keycode.ENTER;
  }

  window.keyboard = keyboard;
})();