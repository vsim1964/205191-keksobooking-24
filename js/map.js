import {
  createCard
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
const addressInputElement = document.querySelector('#address');
marker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressInputElement.value = coordinates;
});

// ! Получение точек из массива

function createCustomPopup(point) {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  createCard(point, popupElement);

  return popupElement;
}

function createPointsOfMap(dataForMap) {
  dataForMap.forEach((point) => {
    const {
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
      .bindPopup(createCustomPopup());
  });
}

export {
  createPointsOfMap
};
