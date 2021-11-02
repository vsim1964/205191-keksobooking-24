import {
  createPointsOfMap
} from './map.js';
import {
  closeSuccessModalElement,
  closeErrorModalElement
} from './utilities.js';
const getData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      createPointsOfMap(adverts);
    });
};

const sendData = (onSuccess, onError) => {

  const submitFormElement = document.querySelector('.ad-form');
  submitFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://24.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        onSuccess();
        closeSuccessModalElement();
      } else {
        onError();
        closeErrorModalElement();
      }
    }).catch(() => {
      onError();
      closeErrorModalElement();
    });
  });
};

export {
  getData,
  sendData
};
