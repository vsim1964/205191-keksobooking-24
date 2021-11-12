const array = [

  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
    features: [
      'wifi',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
    features: [
      'wifi',
      'dishwasher',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'hotel',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 1,
      rooms: 0,
      type: 'house',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
    ],
  },
  {
    features: [
      'wifi',
      'dishwasher',
      'parking',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 2,
      rooms: 0,
      type: 'house',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
    features: [
      'wifi',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
    features: [
      'wifi',
      'dishwasher',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'hotel',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 1,
      rooms: 0,
      type: 'house',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
    ],
  },
  {
    features: [
      'wifi',
      'dishwasher',
      'parking',
    ],
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 2,
      rooms: 0,
      type: 'house',
    },
    features: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner',
    ],
  },

];


const typeFilterElement = document.querySelector('#housing-type');
const priceFilterElement = document.querySelector('#housing-price');
const roomsFilterElement = document.querySelector('#housing-rooms');
const guestsFilterElement = document.querySelector('#housing-guests');
const wifiFilterElement = document.querySelector('#filter-wifi');
const dishwasherFilterElement = document.querySelector('#filter-dishwasher');
const parkingFilterElement = document.querySelector('#filter-parking');
const washerFilterElement = document.querySelector('#filter-washer');
const elevatorFilterElement = document.querySelector('#filter-elevator');
const conditionerFilterElement = document.querySelector('#filter-conditioner');


typeFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === 'flat') {
    console.log(array.filter(item => (item.offer.type === 'flat')));
  } else if (evt.target.value === 'bungalow') {
    console.log(array.filter(item => (item.offer.type === 'bungalow')));
  } else if (evt.target.value === 'house') {
    console.log(array.filter(item => (item.offer.type === 'house')));
  } else if (evt.target.value === 'palace') {
    console.log(array.filter(item => (item.offer.type === 'palace')));
  } else if (evt.target.value === 'hotel') {
    console.log(array.filter(item => (item.offer.type === 'hotel')));
  }
});

priceFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === 'middle') {
    console.log(array.filter(item => (item.offer.price === 'middle')));
  } else if (evt.target.value === 'low') {
    console.log(array.filter(item => (item.offer.price === 'low')));
  } else if (evt.target.value === 'high') {
    console.log(array.filter(item => (item.offer.price === 'high')));
  }
});

roomsFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    console.log(array.filter(item => (item.offer.rooms === 1)));
  } else if (evt.target.value === '2') {
    console.log(array.filter(item => (item.offer.rooms === 2)));
  } else if (evt.target.value === '3') {
    console.log(array.filter(item => (item.offer.rooms === 3)));
  }
});

guestsFilterElement.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    console.log(array.filter(item => (item.offer.guests === 1)));
  } else if (evt.target.value === '2') {
    console.log(array.filter(item => (item.offer.guests === 2)));
  } else if (evt.target.value === '0') {
    console.log(array.filter(item => (item.offer.guests === 0)));
  }
});

wifiFilterElement.addEventListener('change', (evt) => {
  if (wifiFilterElement.hasAttribute('checked')) {
    console.log(array.filter(item => (item.evt.target.value === 'wi-fi')));
  }
});

dishwasherFilterElement.addEventListener('change', () => {
  console.log(dishwasherFilterElement.value);
});
parkingFilterElement.addEventListener('change', () => {
  console.log(parkingFilterElement.value);
});
washerFilterElement.addEventListener('change', () => {
  console.log(washerFilterElement.value);
});
elevatorFilterElement.addEventListener('change', () => {
  console.log(elevatorFilterElement.value);
});
conditionerFilterElement.addEventListener('change', () => {
  console.log(conditionerFilterElement.value);
});











// function getRank(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].features.length === 0) {
//       arr[i].rank = 0;
//     } else if (arr[i].features.length === 1) {
//       arr[i].rank = 1;
//     } else if (arr[i].features.length === 2) {
//       arr[i].rank = 2;
//     } else if (arr[i].features.length === 3) {
//       arr[i].rank = 3;
//     } else if (arr[i].features.length === 4) {
//       arr[i].rank = 4;
//     } else if (arr[i].features.length === 5) {
//       arr[i].rank = 5;
//     } else if (arr[i].features.length === 6) {
//       arr[i].rank = 6;
//     }
//   }
//   array.sort((obj, obj2) => {
//     return obj2.rank - obj.rank
//   });
// }

// getRank(array);

// typeFilterElement.addEventListener('change', (evt) => {
//   console.log(typeFilterElement.value);
// });
// priceFilterElement.addEventListener('change', () => {
//   console.log(priceFilterElement.value);
// });
// roomsFilterElement.addEventListener('change', () => {
//   console.log(priceFilterElement.value);
// });
// guestsFilterElement.addEventListener('change', () => {
//   console.log(priceFilterElement.value);
// });
// wifiFilterElement.addEventListener('change', () => {
//   console.log(wifiFilterElement.value);
// });
// dishwasherFilterElement.addEventListener('change', () => {
//   console.log(dishwasherFilterElement.value);
// });
// parkingFilterElement.addEventListener('change', () => {
//   console.log(parkingFilterElement.value);
// });
// washerFilterElement.addEventListener('change', () => {
//   console.log(washerFilterElement.value);
// });
// elevatorFilterElement.addEventListener('change', () => {
//   console.log(elevatorFilterElement.value);
// });
// conditionerFilterElement.addEventListener('change', () => {
//   console.log(conditionerFilterElement.value);
// });
