import {
  createPointsOfMap
} from './map.js';

const getData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      createPointsOfMap(adverts);
    });
};


const sendData = (onSuccess, onError) => {

  const formData = new FormData(evt.target);

  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  }).catch(() => {
    onError();
  });
};


export {
  getData,
  sendData
};
