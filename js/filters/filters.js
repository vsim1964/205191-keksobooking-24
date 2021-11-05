const adverts = [

  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'flat',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 10000,
      guests: 2,
      rooms: 3,
      type: 'hotel',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 20000,
      guests: 1,
      rooms: 0,
      type: 'house',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 1,
      rooms: 0,
      type: 'house',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 15000,
      guests: 2,
      rooms: 0,
      type: 'house',
    },
  },
  {
    offer: {
      title: 'Тихая квартирка недалеко от метро',
      price: 1000,
      guests: 2,
      rooms: 3,
      type: 'house',
    },
  },
];


function filter() {
  // function aaa() {
  const a = document.querySelector('#housing-type');
  a.addEventListener('change', (evt) => {
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
  // }

  // function bbb() {
  const b = document.querySelector('#housing-price');
  b.addEventListener('change', (evt) => {
    if (evt.target.value === 'middle') {
      console.log(adverts.filter(item => (item.offer.price === 'middle')));
    } else if (evt.target.value === 'low') {
      console.log(adverts.filter(item => (item.offer.price === 'low')));
    } else if (evt.target.value === 'high') {
      console.log(adverts.filter(item => (item.offer.price === 'high')));
    }
  });
  // }

  // function ccc() {
  const c = document.querySelector('#housing-rooms');
  c.addEventListener('change', (evt) => {
    if (evt.target.value === '1') {
      console.log(adverts.filter(item => (item.offer.rooms === 1)));
    } else if (evt.target.value === '2') {
      console.log(adverts.filter(item => (item.offer.rooms === 2)));
    } else if (evt.target.value === '3') {
      console.log(adverts.filter(item => (item.offer.rooms === 3)));
    }
  });
  // }

  // function ddd() {
  const d = document.querySelector('#housing-guests');
  d.addEventListener('change', (evt) => {
    if (evt.target.value === '1') {
      console.log(adverts.filter(item => (item.offer.guests === 1)));
    } else if (evt.target.value === '2') {
      console.log(adverts.filter(item => (item.offer.guests === 2)));
    } else if (evt.target.value === '0') {
      console.log(adverts.filter(item => (item.offer.guests === 0)));
    }
  });
  // }
}
// function filter() {
//   return (
//     ddd() && ccc() && bbb() && aaa()
//   );
// }

filter();
