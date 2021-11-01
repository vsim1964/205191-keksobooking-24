import {
  setFormSubmit
} from './forms.js';
import {
  createPointsOfMap
} from './map.js';
import {
  getSuccessMessage,
  getErrorMessage
} from './utilities.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((adverts) => {
    createPointsOfMap(adverts);
  });

setFormSubmit(getSuccessMessage, getErrorMessage);
