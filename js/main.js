import './forms.js';
import {
  createFlat
} from './flat-create.js';
import {
  addAdvertsCards
} from './card.js';
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

addAdvertsCards(adverts);
createPointsOfMap(adverts);
inactive();
const map = L.map('map-canvas')
  .on('load', () => {
    active();
  })
  .setView({
    lat: 35.69968,
    lng: 139.75708,
  }, 10);
