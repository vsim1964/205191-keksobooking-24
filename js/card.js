import {
  PROPERTIES
} from './data.js';

// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const cards = [];

// ! Обработка аватаров
const imgAvatar = popup.querySelector('.popup__avatar');

function imgAvatarCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    cards[i].querySelector('.popup__avatar').src = arr[i].author.avatar;
    imgAvatar.remove();
  }
}

// ! Обработка фотографий недвижимости
const sources = []; // массив массивов c src
function srcCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    sources[i] = arr[i].offer.photos;
  }
}

function imgCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const photos = cards[i].querySelector('.popup__photos');
    const photo = photos.querySelector('.popup__photo');
    for (let k = 0; k < arr[i].length; k++) {
      const clonedPhoto = photo.cloneNode();
      clonedPhoto.src = arr[i][k];
      photos.appendChild(clonedPhoto);
    }
    photo.remove();
  }
}

// ! Features
function featuresCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const features = cards[i].querySelector('.popup__features');
    for (let k = 0; k < PROPERTIES.length; k++) {
      if (arr[i].offer.features.includes(PROPERTIES[k])) {
        const featureClass = `.popup__feature--${PROPERTIES[k]}`;
        const feature = features.querySelector(featureClass);
        feature.textContent = PROPERTIES[k];
      } else {
        const featureClass = `.popup__feature--${PROPERTIES[k]}`;
        const feature = features.querySelector(featureClass);
        feature.remove();
      }
    }
  }
}

// ! Заполнение карточки
function cardCreate(arr) {
  let type = '';
  for (let i = 0; i < arr.length; i++) {
    cards[i].querySelector('.popup__title').textContent = arr[i].offer.title;
    cards[i].querySelector('.popup__text--address').textContent = arr[i].offer.address;
    cards[i].querySelector('.popup__text--price').textContent = `${arr[i].offer.price} ₽/ночь`;
    if (arr[i].offer.type === 'flat') {
      type = 'Квартира';
    } else if (arr[i].offer.type === 'bungalow') {
      type = 'Бунгало';
    } else if (arr[i].offer.type === 'house') {
      type = 'Дом';
    } else if (arr[i].offer.type === 'palace') {
      type = 'Дворец';
    } else if (arr[i].offer.type === 'hotel') {
      type = 'Отель';
    }
    cards[i].querySelector('.popup__type').textContent = type;
    cards[i].querySelector('.popup__text--capacity').textContent = `${arr[i].offer.rooms} комнаты для ${arr[i].offer.guests} гостей`;
    cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${arr[i].offer.checkin}, выезд до ${arr[i].offer.checkout}`;

    cards[i].querySelectorAll('.popup__features').innerHTML = arr[i].offer.features;
    cards[i].querySelector('.popup__description').textContent = arr[i].offer.description;
  }
}

// ! Отрисовка первого объявления в месте, указанном заданием
function addAdvertsCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    cards[i] = popup.cloneNode(true);
  }
  imgAvatarCreate(arr);
  featuresCreate(arr);
  srcCreate(arr);
  imgCreate(sources);
  cardCreate(arr);
  const cardPrint = document.querySelector('#map-canvas');
  cardPrint.appendChild(cards[0]);
}

export {
  addAdvertsCards
};
