import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage
} from './utilities.js';
import {
  submitFormElement
} from './data.js';
import {
  createPointsOfMap
} from './map.js';

getData(createPointsOfMap);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage);
});
