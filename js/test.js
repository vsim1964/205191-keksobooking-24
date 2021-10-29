import {
  cards
} from './card.js';

// ! Создание интерактивного окна карты
const map = L.map('map-canvas')
  .on('load', () => {})
  .setView({
    lat: 35.69968,
    lng: 139.75708,
  }, 10);

// ! Подключение сервиса карт
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// ! Маркер
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker({
  lat: 35.69968,
  lng: 139.75708,
}, {
  draggable: true,
  icon: mainPinIcon,
});
marker.addTo(map);

// ! Получение координат
marker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

// ! Получение точек из массива
{
  avatar: 'img/avatars/user01.png'
},
offer: {
    title: 'Хорошее жилье',
    address: '35.69932, 139.73265',
    price: 962733,
    type: 'palace',
    rooms: 8,
    guests: 4,
    checkin: '14:00',
    checkout: '13:00',
    features: [Object],
    description: 'Квартира уютная и просторная, тихая, заезжай и живи, все в состоянии нового. Подъезд чистый и без запаха.',
    photos: [Object]
  },
  location: {
    lat: 35.69932,
    lng: 139.73265
  }
},

function createCustomPopup(point) {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').src = point.author.avatar;
  popupElement.querySelector('.popup__title').textContent = point.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${point.location.lat}, ${point.location.lng}`;
  popupElement.querySelector('.popup__text--price').innerHTML = `${point.offer.price} <span>₽/ночь</span>`;
  popupElement.querySelector('.popup__type').textContent = point.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнат для
    ${point.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  popupElement.querySelector('.popup__features').textContent = point.offer.features;
  popupElement.querySelector('.popup__description').textContent = point.offer.description;
  popupElement.querySelector('.popup__photo').src = point.offer.photos;

  return popupElement;
}

function createPointsOfMap(dataForMap) {
  dataForMap.forEach((point) => {
      location: {
        lat,
        lng,
      },
    } = point;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    });

    marker
    .addTo(map)
    .bindPopup(createCustomPopup(point));
  });
}

export {
  createPointsOfMap
};
