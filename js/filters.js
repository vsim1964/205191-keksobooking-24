import {
  createPointsOfMap,
  resetMap
} from './map.js';
import {
  adverts
} from './api.js';

const typeFilterElement = document.querySelector('#housing-type');
const priceFilterElement = document.querySelector('#housing-price');
const roomsFilterElement = document.querySelector('#housing-rooms');
const guestsFilterElement = document.querySelector('#housing-guests');
// const filteredAdverts = [];

function getFiters() {
  const a = typeFilterElement.value;
  const b = priceFilterElement.value;
  const c = roomsFilterElement.value;
  const d = guestsFilterElement.value;
  return adverts.filter((item) => {
    if ((a === item.offer.type) && (b === item.offer.type) && (c === item.offer.type) && (d === item.offer.type)) {
      return item;
    }
  });
}

function createMapOfFilteredAdverts() {
  resetMap();
  const filteredAdverts = getFiters();
  createPointsOfMap(filteredAdverts);
  // 10 элементов отрисовать
}

typeFilterElement.addEventListener('change', () => {
  createMapOfFilteredAdverts();
});

priceFilterElement.addEventListener('change', () => {
  createMapOfFilteredAdverts();
});
roomsFilterElement.addEventListener('change', () => {
  createMapOfFilteredAdverts();
});

guestsFilterElement.addEventListener('change', () => {
  createMapOfFilteredAdverts();
});

export {
  createMapOfFilteredAdverts
};

// // --------------------

// const mapFeatures = document.querySelector('.map__features');
// const filterDishwasher = document.querySelector('#filter-dishwasher');
// const filterParking = document.querySelector('#filter-parking');
// const filterWasher = document.querySelector('#filter-washer');
// const filterElevator = document.querySelector('#filter-elevator');
// const filterConditioner = document.querySelector('#filter-conditioner');
// const filterWifi = document.querySelector('#filter-wifi');

// mapFeatures.addEventListener('change', () => {
//   if (filterWifi.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[0])));
//   } else if (filterDishwasher.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[1])));
//   } else if (filterParking.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[2])));
//   } else if (filterWasher.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[3])));
//   } else if (filterElevator.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[4])));
//   } else if (filterConditioner.hasAttribute('checked')) {
//     console.log(adverts.filter(item => (item.features[5])));
//   }
// });

// let rank = 0;

// if ()
