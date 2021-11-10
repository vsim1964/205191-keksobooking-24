const typeFilterElement = document.querySelector('#housing-type');
const priceFilterElement = document.querySelector('#housing-price');
const roomsFilterElement = document.querySelector('#housing-rooms');
const guestsFilterElement = document.querySelector('#housing-guests');


// adverts.filter(function (advert) {
//   return advert.offer.type === typeFilterElement.value && advert.offer.price === priceFilterElement.value && advert.offer.rooms === roomsFilterElement.value && advert.offer.guests === guestsFilterElement.value;
// });


typeFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === 'flat') {
    console.log(adverts.filter(item => (item.offer.type === 'flat')));
  } else if (evt.target.value === 'bungalow') {
    console.log(adverts.filter(item => (item.offer.type === 'bungalow')));
  } else if (evt.target.value === 'house') {
    console.log(adverts.filter(item => (item.offer.type === 'house')));
  } else if (evt.target.value === 'palace') {
    console.log(adverts.filter(item => (item.offer.type === 'palace')));
  } else if (evt.target.value === 'hotel') {
    console.log(adverts.filter(item => (item.offer.type === 'hotel')));
  }
});


priceFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === 'middle') {
    console.log(adverts.filter(item => (item.offer.price === 'middle')));
  } else if (evt.target.value === 'low') {
    console.log(adverts.filter(item => (item.offer.price === 'low')));
  } else if (evt.target.value === 'high') {
    console.log(adverts.filter(item => (item.offer.price === 'high')));
  }
});

roomsFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    console.log(adverts.filter(item => (item.offer.rooms === 1)));
  } else if (evt.target.value === '2') {
    console.log(adverts.filter(item => (item.offer.rooms === 2)));
  } else if (evt.target.value === '3') {
    console.log(adverts.filter(item => (item.offer.rooms === 3)));
  }
});


guestsFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    console.log(adverts.filter(item => (item.offer.guests === 1)));
  } else if (evt.target.value === '2') {
    console.log(adverts.filter(item => (item.offer.guests === 2)));
  } else if (evt.target.value === '0') {
    console.log(adverts.filter(item => (item.offer.guests === 0)));
  }
});

// --------------------

const mapFeatures = document.querySelector('.map__features');
const filterDishwasher = document.querySelector('#filter-dishwasher');
const filterParking = document.querySelector('#filter-parking');
const filterWasher = document.querySelector('#filter-washer');
const filterElevator = document.querySelector('#filter-elevator');
const filterConditioner = document.querySelector('#filter-conditioner');
const filterWifi = document.querySelector('#filter-wifi');

mapFeatures.addEventListener('change', () => {
  if (filterWifi.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[0])));
  } else if (filterDishwasher.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[1])));
  } else if (filterParking.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[2])));
  } else if (filterWasher.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[3])));
  } else if (filterElevator.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[4])));
  } else if (filterConditioner.hasAttribute('checked')) {
    console.log(adverts.filter(item => (item.features[5])));
  }
});
