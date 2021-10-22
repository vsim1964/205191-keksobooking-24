import './forms.js';
import './map.js';
import './sort.js';
import './card.js';
import {
  createFlat
} from './flat-create.js';
import {
  addAdvertsCards
} from './card.js';
import {
  active,
  inactive
} from './swift.js';

const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

addAdvertsCards(adverts);

active();
inactive();
