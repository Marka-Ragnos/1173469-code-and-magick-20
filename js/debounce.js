'use strict';


(function () {
  var DEBOUNCE_INTERVAL = 500;
  var lastTimeout;

  function removeDebounce(callback) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(callback, DEBOUNCE_INTERVAL);
  }

  window.debounce = removeDebounce;
})();
