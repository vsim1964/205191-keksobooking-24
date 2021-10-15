import './forms.js';
import './map.js';
import './sort.js';
import {
  createFlat
} from './create-flat.js';
import {
  active,
  inactive
} from './swift.js';

const advertsCount = 10;
const adverts = [];

for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

active();
inactive();
