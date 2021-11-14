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
const getErrorTemplate = document.querySelector('#get-error');

function getSuccessMessage() {
  const successModalElement = successTemplate.content.cloneNode(true);
  const successModalDivElement = successModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    resetMap();
    resetForm();
    document.querySelector('.success').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  successModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(successModalElement);
}


function getErrorMessage() {
  const errorModalElement = errorTemplate.content.cloneNode(true);
  const errorModalDivElement = errorModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    resetMap();
    resetForm();
    document.querySelector('.error').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  errorModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(errorModalElement);
}

function getErrorLoad() {
  const getErrorModalElement = getErrorTemplate.content.cloneNode(true);
  const getErrorModalDivElement = getErrorModalElement.querySelector('div');

  let onModalKeyDown = null;
  const closeModal = () => {
    resetMap();
    resetForm();
    document.querySelector('.get-error').remove();
    bodyElement.removeEventListener('keydown', onModalKeyDown);
  };
  onModalKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  getErrorModalDivElement.addEventListener('click', () => {
    closeModal();
  });
  bodyElement.addEventListener('keydown', onModalKeyDown);
  bodyElement.appendChild(getErrorModalDivElement);
}


export {
  getRandomInteger,
  getRandomFloat,
  getSuccessMessage,
  getErrorMessage,
  getErrorLoad
};
