import './sort2.js';
import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage
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

getData(createPointsOfMap, getErrorMessage);
getData(createMapOfFilteredAdverts, getErrorMessage);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage, getErrorMessage, evt.target);
});
