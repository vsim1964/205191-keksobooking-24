import {
  PROPERTIES,
  PICTURES
} from './data.js';

// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const cards = [];

// ! Обработка аватаров
function imgAvatarCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].author.avatar !== undefined) {
      cards[i].querySelector('.popup__avatar').src = arr[i].author.avatar;
    } else {
      cards[i].querySelector('.popup__avatar').remove();
    }
  }
}

// ! Обработка фотографий недвижимости
function imgCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const photos = cards[i].querySelector('.popup__photos');
    const photo = photos.querySelector('.popup__photo');
    for (let k = 0; k < arr[i].offer.photos.length; k++) {
      if (PICTURES.length !== 0) {
        const clonedPhoto = photo.cloneNode();
        clonedPhoto.src = arr[i].offer.photos[k];
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
function featuresCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const features = cards[i].querySelector('.popup__features');
    if (PROPERTIES.length === 0) {
      features.remove();
    }
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
  imgAvatarCreate(arr);
  imgCreate(arr);
  featuresCreate(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].offer.title !== undefined) {
      cards[i].querySelector('.popup__title').textContent = arr[i].offer.title;
    } else {
      cards[i].querySelector('.popup__title').remove();
    }
    if (arr[i].offer.address !== undefined) {
      cards[i].querySelector('.popup__text--address').textContent = arr[i].offer.address;
    } else {
      cards[i].querySelector('.popup__text--address').remove();
    }
    if (arr[i].offer.price !== undefined) {
      cards[i].querySelector('.popup__text--price').textContent = `${arr[i].offer.price} ₽/ночь`;
    } else {
      cards[i].querySelector('.popup__text--price').remove();
    }
    if (arr[i].offer.type !== undefined) {
      cards[i].querySelector('.popup__type').textContent = getFlatType(arr[i].offer.type);
    } else {
      cards[i].querySelector('.popup__type').remove();
    }
    if (arr[i].offer.rooms !== undefined && arr[i].offer.guests !== undefined) {
      cards[i].querySelector('.popup__text--capacity').textContent = `${arr[i].offer.rooms} комнаты для
    ${arr[i].offer.guests} гостей`;
    } else {
      cards[i].querySelector('.popup__text--capacity').remove();
    }
    if (arr[i].offer.checkin !== undefined && arr[i].offer.checkout !== undefined) {
      cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${arr[i].offer.checkin}, выезд до ${arr[i].offer.checkout}`;
    } else {
      cards[i].querySelector('.popup__text--time').remove();
    }
    if (arr[i].offer.description !== undefined) {
      cards[i].querySelector('.popup__description').textContent = arr[i].offer.description;
    } else {
      cards[i].querySelector('.popup__description').remove();
    }
  }
}

// ! Отрисовка первого объявления в месте, указанном заданием
function addAdvertsCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    cards[i] = popup.cloneNode(true);
  }
  cardCreate(arr);
  const cardPrint = document.querySelector('#map-canvas');
  cardPrint.appendChild(cards[0]);
}

export {
  addAdvertsCards
};
