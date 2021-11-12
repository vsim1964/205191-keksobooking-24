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

function getRank(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].features.length === 0) {
      arr[i].rank = 0;
    } else if (arr[i].features.length === 1) {
      arr[i].rank = 1;
    } else if (arr[i].features.length === 2) {
      arr[i].rank = 2;
    } else if (arr[i].features.length === 3) {
      arr[i].rank = 3;
    } else if (arr[i].features.length === 4) {
      arr[i].rank = 4;
    } else if (arr[i].features.length === 5) {
      arr[i].rank = 5;
    } else if (arr[i].features.length === 6) {
      arr[i].rank = 6;
    }
  }
  array.sort((obj, obj2) => {
    return obj2.rank - obj.rank
  });
}

getRank(array);
