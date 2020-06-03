'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


function getRandomArray(lengthArray) {
  return Math.floor(Math.random() * Math.floor(lengthArray));
}

function getRandomWizard(arrayNames, arraySurnames, arrayCoatColor, arrayEyesColor) {
  return {
    name: arrayNames[getRandomArray(arrayNames.length)] + ' ' + arraySurnames[getRandomArray(arraySurnames.length)],
    coatColor: arrayCoatColor[getRandomArray(arrayCoatColor.length)],
    eyesColor: arrayEyesColor[getRandomArray(arrayEyesColor.length)]
  };
}

var wizards = [
  getRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR),
  getRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR),
  getRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR),
  getRandomWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLOR, WIZARD_EYES_COLOR),
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
