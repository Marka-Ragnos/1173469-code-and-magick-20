'use strict';

(function () {

  var setupWizard = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.util.WIZARD_COAT_COLOR[window.util.getRandomArray(window.util.WIZARD_COAT_COLOR.length)];
    setupWizard.querySelector('input[name="coat-color"]').value = window.util.WIZARD_COAT_COLOR[window.util.getRandomArray(window.util.WIZARD_COAT_COLOR.length)];
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.util.WIZARD_EYES_COLOR[window.util.getRandomArray(window.util.WIZARD_EYES_COLOR.length)];
    setupWizard.querySelector('input[name="eyes-color"]').value = window.util.WIZARD_EYES_COLOR[window.util.getRandomArray(window.util.WIZARD_EYES_COLOR.length)];

  });

  fireballColor.addEventListener('click', function () {
    fireballColor.style.backgroundColor = window.util.WIZARD_FIREBALL_COLOR[window.util.getRandomArray(window.util.WIZARD_FIREBALL_COLOR.length)];
    fireballColor.querySelector('input').value = window.util.WIZARD_FIREBALL_COLOR[window.util.getRandomArray(window.util.WIZARD_FIREBALL_COLOR.length)];
  });

})();
