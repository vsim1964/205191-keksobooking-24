import {
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage,
} from './utilities.js';
import {
  getData
} from './api.js';

getData();
sendData(getSuccessMessage, getErrorMessage);
