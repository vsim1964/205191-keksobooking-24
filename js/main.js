import './forms.js';
import {
  getData,
  sendData
} from './api.js';
import {
  getSuccessMessage,
  getErrorMessage
} from './utilities.js';


getData();
sendData(getSuccessMessage, getErrorMessage);
