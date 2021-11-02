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
const successModalElement = successTemplate.content.cloneNode(true);

function getSuccessMessage() {
  bodyElement.appendChild(successModalElement);
  successModalElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successModalElement.remove();
      document.querySelector('.ad-form').reset();
    }
  });
}

const errorTemplate = document.querySelector('#error');
const errorModalElement = errorTemplate.content.cloneNode(true);

function getErrorMessage() {
  bodyElement.appendChild(errorModalElement);
  successModalElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successModalElement.remove();
      document.querySelector('.ad-form').reset();
    }
  });
}

export {
  getRandomInteger,
  getRandomFloat,
  getSuccessMessage,
  getErrorMessage
};
