import {
  getRandomInteger,
  getRandomFloat
} from './utilities.js';

import {
  AVATARS,
  TITLES,
  MIN_PRICE,
  MAX_PRICE,
  TYPES,
  MIN_ROOMS,
  MAX_ROOMS,
  MIN_GUESTS,
  MAX_GUESTS,
  CHECKINS,
  CHECKOUTS,
  PROPERTIES,
  DESCRIPTIONS,
  PICTURES,
  FROM_LATITUDE,
  TO_LATITUDE,
  FROM_LONGITUDE,
  TO_LONGITUDE
} from './data.js';


function сreateFlat(index) {
  const titlesRandomIndex = getRandomInteger(0, TITLES.length - 1);
  const pricesRandomInteger = getRandomInteger(MIN_PRICE, MAX_PRICE);
  const typesRandomIndex = getRandomInteger(0, TYPES.length - 1);
  const roomsRandomInteger = getRandomInteger(MIN_ROOMS, MAX_ROOMS);
  const quantityRandomInteger = getRandomInteger(MIN_GUESTS, MAX_GUESTS);
  const checkinsRandomIndex = getRandomInteger(0, CHECKINS.length - 1);
  const checkoutsRandomIndex = getRandomInteger(0, CHECKOUTS.length - 1);
  const propertiesStart = getRandomInteger(0, PROPERTIES.length - 1);
  const propertiesEnd = getRandomInteger(propertiesStart + 1, PROPERTIES.length + 1);
  const descriptionsRandomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const picturesStart = getRandomInteger(0, PICTURES.length - 1);
  const picturesEnd = getRandomInteger(picturesStart + 1, PICTURES.length + 1);
  const latsRandomInteger = getRandomFloat(FROM_LATITUDE, TO_LATITUDE, 5);
  const lngsRandomInteger = getRandomFloat(FROM_LONGITUDE, TO_LONGITUDE, 5);

  return {
    author: {
      avatar: AVATARS[index],
    },
    offer: {
      title: TITLES[titlesRandomIndex],
      address: `${latsRandomInteger}, ${lngsRandomInteger}`,
      price: pricesRandomInteger,
      type: TYPES[typesRandomIndex],
      rooms: roomsRandomInteger,
      guests: quantityRandomInteger,
      checkin: CHECKINS[checkinsRandomIndex],
      checkout: CHECKOUTS[checkoutsRandomIndex],
      features: PROPERTIES.slice(propertiesStart, propertiesEnd),
      description: DESCRIPTIONS[descriptionsRandomIndex],
      photos: PICTURES.slice(picturesStart, picturesEnd),
    },
    location: {
      lat: latsRandomInteger,
      lng: lngsRandomInteger,
    },
  };
}

export {
  сreateFlat
};
