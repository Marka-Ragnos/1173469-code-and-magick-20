'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var wizardCoatColor = document.querySelector('input[name="coat-color"]');
  var wizardEyesColor = document.querySelector('input[name="eyes-color"]');
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setup = document.querySelector('.setup');
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  window.similarWizards = [];

  function getRandomArray(lengthArray) {
    return Math.floor(Math.random() * Math.floor(lengthArray));
  }

  wizardCoat.addEventListener('click', function () {
    wizardCoatColor.value = WIZARD_COAT_COLOR[getRandomArray(WIZARD_COAT_COLOR.length)];
    wizardCoat.style.fill = wizardCoatColor.value;
    window.debounce(function () {
      createSimilarWizards(window.similarWizards);
    });
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyesColor.value = WIZARD_EYES_COLOR[getRandomArray(WIZARD_EYES_COLOR.length)];
    wizardEyes.style.fill = wizardEyesColor.value;
    window.debounce(function () {
      createSimilarWizards(window.similarWizards);
    });
  });

  fireballColor.addEventListener('click', function () {
    fireballColor.querySelector('input').value = WIZARD_FIREBALL_COLOR[getRandomArray(WIZARD_FIREBALL_COLOR.length)];
    fireballColor.style.backgroundColor = fireballColor.querySelector('input').value;
  });

  // сортировка

  function getRank(wizard) {
    var rank = 0;
    if (wizard.colorCoat === wizardCoatColor.value) {
      rank += 2;
    }
    if (wizard.colorEyes === wizardEyesColor.value) {
      rank += 1;
    }
    return rank;
  }

  function compareNames(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function sortWizards(left, right) {
    var difference = getRank(right) - getRank(left);
    if (difference === 0) {
      difference = compareNames(left.name, right.name);
    }
    return difference;
  }

  function createSimilarWizards(wizards) {
    window.similarWizards = wizards.slice(0);
    window.similarWizards.sort(sortWizards);
    getInsertWizards(window.similarWizards);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  function getInsertWizards(wizards) {
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.innerHTML = '';
    return similarListElement.appendChild(fragment);
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  window.backend.load(createSimilarWizards, window.util.showError);
})();
