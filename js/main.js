import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage,
  getError
} from './utilities.js';
import {
  submitFormElement
} from './data.js';
import {
  createPointsOfMap
} from './map.js';

getData(createPointsOfMap, getError);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage, getErrorMessage);
});
