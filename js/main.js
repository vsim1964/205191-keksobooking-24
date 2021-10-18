import './forms.js';
import './map.js';
import './sort.js';
import './card.js';
import {
  createFlat
} from './create-flat.js';

import {
  addAdvertsCards
} from './card.js';

// ! Получение массива данных объявлений по заданому количеству
const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

addAdvertsCards(adverts);
