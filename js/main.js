import './forms.js';
import {
  createFlat
} from './flat-create.js';
import {
  createPointsOfMap
} from './map.js';
import {
  active,
  inactive
} from './swift.js';

const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

createPointsOfMap(adverts);
inactive();
active();
