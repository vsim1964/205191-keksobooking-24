import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage,
  getErrorLoad
} from './utilities.js';
import {
  submitFormElement
} from './data.js';
import {
  createPointsOfMap
} from './map.js';
import {
  createMapOfFilteredAdverts
} from './filters.js';

getData(createPointsOfMap, getErrorLoad);
getData(createMapOfFilteredAdverts, getErrorLoad);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage, getErrorMessage, evt.target);
});
