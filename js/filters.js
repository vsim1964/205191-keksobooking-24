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
const filterWifi = document.querySelector('#filter-wifi');
const filterDishwasher = document.querySelector('#filter-dishwasher');
const filterParking = document.querySelector('#filter-parking');
const filterWasher = document.querySelector('#filter-washer');
const filterElevator = document.querySelector('#filter-elevator');
const filterConditioner = document.querySelector('#filter-conditioner');
let filteredAdverts = [];
const checkedFeaturesFilters = [];

function filterFeatures() {

  adverts.filter((advert) => {
    if (filterWifi.checked) {
      checkedFeaturesFilters.push('wifi');
    }
    if (filterDishwasher.checked) {
      checkedFeaturesFilters.push('dishwasher');
    }
    if (filterParking.checked) {
      checkedFeaturesFilters.push('parking');
    }
    if (filterWasher.checked) {
      checkedFeaturesFilters.push('washer');
    }
    if (filterElevator.checked) {
      checkedFeaturesFilters.push('elevator');
    }
    if (filterConditioner.checked) {
      checkedFeaturesFilters.push('conditioner');
    }
  });
  checkedFeaturesFilters.forEach((checkedFeaturesFilter) => {
    if (!adverts.features.includes(checkedFeaturesFilter)) {
      return false;
    } else {
      return true;
    }
  });
}

function getFiters() {
  filterFeatures();
  const typeValue = typeFilterElement.value;
  const priceValue = priceFilterElement.value;
  const roomsValue = roomsFilterElement.value;
  const guestsValue = guestsFilterElement.value;
  return adverts.filter((item) => {
    if (item.offer.type === typeValue) {
      return item;
    } else if (item.offer.price < 10000 && priceValue === 'low') {
      return item;
    } else if (item.offer.price >= 10000 && item.offer.price >= 10000 && priceValue === 'middle') {
      return item;
    } else if (item.offer.price > 50000 && priceValue === 'high') {
      return item;
    } else if (item.offer.rooms === 1 && roomsValue === '1') {
      return item;
    } else if (item.offer.rooms === 2 && roomsValue === '2') {
      return item;
    } else if (item.offer.rooms === 3 && roomsValue === '3') {
      return item;
    } else if (item.offer.guests === 3 && guestsValue === '3') {
      return item;
    } else if (item.offer.guests === 2 && guestsValue === '2') {
      return item;
    } else if (item.offer.guests === 1 && guestsValue === '1') {
      return item;
    } else if (item.offer.guests === 0 && guestsValue === '0') {
      return item;
    }
    // } else if (typeValue === 'any' && priceValue === 'any' && roomsValue === 'any' && guestsValue === 'any') {
    //   return item;
    // }
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
