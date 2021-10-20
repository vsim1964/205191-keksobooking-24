import {
  PROPERTIES,
  PICTURES
} from './data.js';

// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const cards = [];

// ! Обработка аватаров
function createAvatars(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].author.avatar !== undefined) {
      cards[i].querySelector('.popup__avatar').src = array[i].author.avatar;
    } else {
      cards[i].querySelector('.popup__avatar').remove();
    }
  }
}

// ! Обработка фотографий недвижимости
function createImages(array) {
  for (let i = 0; i < array.length; i++) {
    const photos = cards[i].querySelector('.popup__photos');
    const photo = photos.querySelector('.popup__photo');
    for (let k = 0; k < array[i].offer.photos.length; k++) {
      if (PICTURES.length !== 0) {
        const clonedPhoto = photo.cloneNode();
        clonedPhoto.src = array[i].offer.photos[k];
        photos.appendChild(clonedPhoto);
      }
    }
    photo.remove();
  }
}

// ! Выбор типа недвижимости
function getFlatType(flatType) {
  if (flatType === 'flat') {
    return 'Квартира';
  } else if (flatType === 'bungalow') {
    return 'Бунгало';
  } else if (flatType === 'house') {
    return 'Дом';
  } else if (flatType === 'palace') {
    return 'Дворец';
  } else if (flatType === 'hotel') {
    return 'Отель';
  }
}

// ! Features
function createFeatures(array) {
  for (let i = 0; i < array.length; i++) {
    const features = cards[i].querySelector('.popup__features');
    if (PROPERTIES.length === 0) {
      features.remove();
    }
    for (let k = 0; k < PROPERTIES.length; k++) {
      if (array[i].offer.features.includes(PROPERTIES[k])) {
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
function createCards(array) {
  createAvatars(array);
  createImages(array);
  createFeatures(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i].offer.title) {
      cards[i].querySelector('.popup__title').textContent = array[i].offer.title;
    } else {
      cards[i].querySelector('.popup__title').remove();
    }
    if (array[i].offer.address) {
      cards[i].querySelector('.popup__text--address').textContent = array[i].offer.address;
    } else {
      cards[i].querySelector('.popup__text--address').remove();
    }
    if (array[i].offer.price) {
      cards[i].querySelector('.popup__text--price').textContent = `${array[i].offer.price} ₽/ночь`;
    } else {
      cards[i].querySelector('.popup__text--price').remove();
    }
    if (array[i].offer.type) {
      cards[i].querySelector('.popup__type').textContent = getFlatType(array[i].offer.type);
    } else {
      cards[i].querySelector('.popup__type').remove();
    }
    if (array[i].offer.rooms && array[i].offer.guests) {
      cards[i].querySelector('.popup__text--capacity').textContent = `${array[i].offer.rooms} комнаты для
    ${array[i].offer.guests} гостей`;
    } else {
      cards[i].querySelector('.popup__text--capacity').remove();
    }
    if (array[i].offer.checkin && array[i].offer.checkout) {
      cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${array[i].offer.checkin}, выезд до ${array[i].offer.checkout}`;
    } else {
      cards[i].querySelector('.popup__text--time').remove();
    }
    if (array[i].offer.description) {
      cards[i].querySelector('.popup__description').textContent = array[i].offer.description;
    } else {
      cards[i].querySelector('.popup__description').remove();
    }
  }
}

// ! Отрисовка первого объявления в месте, указанном заданием
function addAdvertsCards(array) {
  for (let i = 0; i < array.length; i++) {
    cards[i] = popup.cloneNode(true);
  }
  createCards(array);
  const cardPrint = document.querySelector('#map-canvas');
  cardPrint.appendChild(cards[0]);
}

export {
  addAdvertsCards
};
