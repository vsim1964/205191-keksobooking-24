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
let filteredAdverts = [];

function getFiters() {
  const a = typeFilterElement.value;
  const b = priceFilterElement.value;
  const c = roomsFilterElement.value;
  const d = guestsFilterElement.value;
  return adverts.filter((item) => {
    if ((a === item.offer.type) && (b === item.offer.price) && (c === item.offer.rooms) && (d === item.offer.guests)) {
      return item;
    }
  });
}

function createMapOfFilteredAdverts() {
  resetMap();
  filteredAdverts = getFiters();
  createPointsOfMap(filteredAdverts);
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


// function getRank() {
//   for (let i = 0; i < adverts.length; i++) {
//     if (adverts[i].features.length === 0) {
//       adverts[i].rank = 0;
//     } else if (adverts[i].features.length === 1) {
//       adverts[i].rank = 1;
//     } else if (adverts[i].features.length === 2) {
//       adverts[i].rank = 2;
//     } else if (adverts[i].features.length === 3) {
//       adverts[i].rank = 3;
//     } else if (adverts[i].features.length === 4) {
//       adverts[i].rank = 4;
//     } else if (adverts[i].features.length === 5) {
//       adverts[i].rank = 5;
//     } else if (adverts[i].features.length === 6) {
//       adverts[i].rank = 6;
//     }
//   }
//   adverts.sort((obj, obj2) => {
//     return obj2.rank - obj.rank
//   });
// }

// // // --------------------

// const mapFeatures = document.querySelector('.map__features');
// const filterWifi = document.querySelector('#filter-wifi');
// const filterDishwasher = document.querySelector('#filter-dishwasher');
// const filterParking = document.querySelector('#filter-washer');
// const filterWasher = document.querySelector('#filter-washer');
// const filterElevator = document.querySelector('#filter-elevator');
// const filterConditioner = document.querySelector('#filter-conditioner');

// function getRankAdverts(ADV) {
//   mapFeatures.addEventListener('change', () => {
//     let rank = 0;
//     if (filterWifi.hasAttribute('checked')) {
//       rank += 1;
//     }
//     if (filterDishwasher.hasAttribute('checked')) {
//       rank += 1;
//     }
//     if (filterhwasheri.hasAttribute('checked')) {
//       rank += 1;
//     }
//     if (filterParking.hasAttribute('checked')) {
//       rank += 1;
//     }
//     if (filterElevator.hasAttribute('checked')) {
//       rank += 1;
//     }
//     if (filterConditioner.hasAttribute('checked')) {
//       rank += 1;
//     }
//     return adv
//   });
// }

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
