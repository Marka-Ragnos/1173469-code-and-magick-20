'use strict';
(function () {

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');

  function onPopupEscPress(evt) {
    if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  }

  function openPopup() {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.util.setup.style = '';
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });
})();

