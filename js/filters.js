const typeSelectElement = document.querySelector('#housing-type');
const priceSelectElement = document.querySelector('#housing-price');
const roomsSelectElement = document.querySelector('#housing-rooms');
const guestsSelectElement = document.querySelector('#housing-guests');


typeSelectElement.addEventListener('change', (evt) => {
  if (evt.target.value === advert.offer.type) {
    adverts.filter(advert => advert.offer.type);
  }
});
