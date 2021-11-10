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


getData(createPointsOfMap, getErrorMessage);

submitFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(getSuccessMessage, getErrorMessage, evt.target);
});
