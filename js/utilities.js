import {
  resetForm
} from './forms.js';
import {
  resetMap
} from './map.js';

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, fraction) {
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  const randomNumber = (Math.random() * (max - min)) + min;
  return +randomNumber.toFixed(fraction);
}

const bodyElement = document.querySelector('body');
const successTemplate = document.querySelector('#success');
const errorTemplate = document.querySelector('#error');

function getSuccessMessage() {
  const successModalElement = successTemplate.content.cloneNode(true);
  const successModalDivElement = successModalElement.querySelector('div');
  successModalDivElement.addEventListener('click', () => {
    document.querySelector('.success').remove();
    // document.querySelector('.ad-form').reset();
    resetMap();
    resetForm();
  });
  bodyElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.querySelector('.success').remove();
      resetMap();
      resetForm();
    }
  });
  bodyElement.appendChild(successModalElement);
}

function getErrorMessage() {
  const errorModalElement = errorTemplate.content.cloneNode(true);
  const errorModalDivElement = errorModalElement.querySelector('div');
  errorModalDivElement.addEventListener('click', () => {
    document.querySelector('.error').remove();
  });
  bodyElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.querySelector('.error').remove();
    }
  });
  bodyElement.appendChild(errorModalElement);
}

export {
  getRandomInteger,
  getRandomFloat,
  getSuccessMessage,
  getErrorMessage
};
