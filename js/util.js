'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = getRandomWizards(4);
  getInsertWizards(4);

  window.util = {
    WIZARD_COAT_COLOR: WIZARD_COAT_COLOR,
    WIZARD_EYES_COLOR: WIZARD_EYES_COLOR,
    WIZARD_FIREBALL_COLOR: WIZARD_FIREBALL_COLOR,
    getRandomArray: getRandomArray
  };

  function getRandomArray(lengthArray) {
    return Math.floor(Math.random() * Math.floor(lengthArray));
  }

  function getRandomWizards(quantityWizards) {
    var wizardArray = [];

    for (var i = 0; i < quantityWizards; i++) {
      wizardArray[i] = {
        name: WIZARD_NAMES[getRandomArray(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomArray(WIZARD_SURNAMES.length)],
        coatColor: WIZARD_COAT_COLOR[getRandomArray(WIZARD_COAT_COLOR.length)],
        eyesColor: WIZARD_EYES_COLOR[getRandomArray(WIZARD_EYES_COLOR.length)]
      };
    }
    return wizardArray;
  }

  function getInsertWizards(quantityWizards) {
    for (var i = 0; i < quantityWizards; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return similarListElement.appendChild(fragment);
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }
})();
