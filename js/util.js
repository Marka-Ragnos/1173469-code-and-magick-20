'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupForm = setup.querySelector('.setup-wizard-form');
  var setupFormBtn = setupForm.querySelector('.setup-submit');

  function sendForm() {
    setup.classList.add('hidden');
    setupFormBtn.disabled = false;
  }

  function showError(errorMessage) {
    createElementError(errorMessage);
    setupFormBtn.disabled = false;
  }

  function onFormSubmit(evt) {
    evt.preventDefault();
    setupFormBtn.disabled = true;
    window.backend.save(new FormData(setupForm), sendForm, showError);
  }

  function createElementError(errorMessage) {
    var errorContainer = document.createElement('div');

    function hideError() {
      errorContainer.classList.add('hidden');
    }
    errorContainer.textContent = errorMessage;
    errorContainer.classList.add('error');
    document.body.appendChild(errorContainer);
    setTimeout(hideError, 3000);
  }

  setupForm.addEventListener('submit', onFormSubmit);

  window.util = {
    setup: setup,
    showError: showError,
  };
})();
