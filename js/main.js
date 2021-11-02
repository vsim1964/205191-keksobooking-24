import {
  setFormSubmit
} from './forms.js';
import {
  getSuccessMessage,
  getErrorMessage
} from './utilities.js';
import {
  getData
} from './api.js';


getData();

setFormSubmit(getSuccessMessage, getErrorMessage);
