import {
  createPointsOfMap
} from './map.js';
import {
  ADVERTS_ON_MAP
} from './data.js';

const getData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      // createPointsOfMap(adverts);
      createPointsOfMap(adverts.slice(0, ADVERTS_ON_MAP));
    });
};


const sendData = (onSuccess, onError, data) => {

  const formData = new FormData(data);

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
