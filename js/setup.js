'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard-appearance');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

// С первого задания осталось
// setup.classList.remove('hidden');
// userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

function getRandomArray(lengthArray) {
  return Math.floor(Math.random() * Math.floor(lengthArray));
}


function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function getRandomWizards(quantityWizards) {
  var wizards = [];

  for (var i = 0; i < quantityWizards; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[getRandomArray(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomArray(WIZARD_SURNAMES.length)],
      coatColor: WIZARD_COAT_COLOR[getRandomArray(WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[getRandomArray(WIZARD_EYES_COLOR.length)]
    };
  }
  return wizards;
}

var wizards = getRandomWizards(4);

function getInsertWizards(quantityWizards) {
  for (var i = 0; i < quantityWizards; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return similarListElement.appendChild(fragment);
}

getInsertWizards(4);

// Task 4 Учебный проект: одеть Надежду

function onPopupEscPress(evt) {
  if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COAT_COLOR[getRandomArray(WIZARD_COAT_COLOR.length)];
  setupWizard.querySelector('input[name="coat-color"]').value = WIZARD_COAT_COLOR[getRandomArray(WIZARD_COAT_COLOR.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES_COLOR[getRandomArray(WIZARD_EYES_COLOR.length)];
  setupWizard.querySelector('input[name="eyes-color"]').value = WIZARD_EYES_COLOR[getRandomArray(WIZARD_EYES_COLOR.length)];

});

fireballColor.addEventListener('click', function () {
  fireballColor.style.backgroundColor = WIZARD_FIREBALL_COLOR[getRandomArray(WIZARD_FIREBALL_COLOR.length)];
  fireballColor.querySelector('input').value = WIZARD_FIREBALL_COLOR[getRandomArray(WIZARD_FIREBALL_COLOR.length)];
});
