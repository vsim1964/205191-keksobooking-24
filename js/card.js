import {
  PROPERTIES
} from './data.js';

// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const cards = [];

// ! Обработка аватаров
function createAvatars(advertsArray) {
  for (let i = 0; i < advertsArray.length; i++) {
    if (advertsArray[i].author.avatar) {
      cards[i].querySelector('.popup__avatar').src = advertsArray[i].author.avatar;
    } else {
      cards[i].querySelector('.popup__avatar').remove();
    }
  }
}

// ! Обработка фотографий недвижимости
function createImages(advertsArray) {
  for (let i = 0; i < advertsArray.length; i++) {
    const photos = cards[i].querySelector('.popup__photos');
    const photo = photos.querySelector('.popup__photo');
    if (advertsArray[i].offer.photos.length !== 0 || advertsArray[i].offer.photos !== undefined) {
      for (let k = 0; k < advertsArray[i].offer.photos.length; k++) {
        const clonedPhoto = photo.cloneNode();
        clonedPhoto.src = advertsArray[i].offer.photos[k];
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
function createFeatures(advertsArray) {
  for (let i = 0; i < advertsArray.length; i++) {
    const features = cards[i].querySelector('.popup__features');
    if (advertsArray[i].offer.features.length === 0 || advertsArray[i].offer.features === undefined) {
      features.remove();
    }
    for (let k = 0; k < PROPERTIES.length; k++) {
      if (advertsArray[i].offer.features.includes(PROPERTIES[k])) {
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
function createCards(advertsArray) {
  createAvatars(advertsArray);
  createImages(advertsArray);
  createFeatures(advertsArray);
  for (let i = 0; i < advertsArray.length; i++) {
    if (advertsArray[i].offer.title) {
      cards[i].querySelector('.popup__title').textContent = advertsArray[i].offer.title;
    } else {
      cards[i].querySelector('.popup__title').remove();
    }
    if (advertsArray[i].offer.address) {
      cards[i].querySelector('.popup__text--address').textContent = advertsArray[i].offer.address;
    } else {
      cards[i].querySelector('.popup__text--address').remove();
    }
    if (advertsArray[i].offer.price) {
      cards[i].querySelector('.popup__text--price').textContent = `${advertsArray[i].offer.price} ₽/ночь`;
    } else {
      cards[i].querySelector('.popup__text--price').remove();
    }
    if (advertsArray[i].offer.type) {
      cards[i].querySelector('.popup__type').textContent = getFlatType(advertsArray[i].offer.type);
    } else {
      cards[i].querySelector('.popup__type').remove();
    }
    if (advertsArray[i].offer.rooms && advertsArray[i].offer.guests) {
      cards[i].querySelector('.popup__text--capacity').textContent = `${advertsArray[i].offer.rooms} комнаты для
    ${advertsArray[i].offer.guests} гостей`;
    } else {
      cards[i].querySelector('.popup__text--capacity').remove();
    }
    if (advertsArray[i].offer.checkin && advertsArray[i].offer.checkout) {
      cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${advertsArray[i].offer.checkin}, выезд до ${advertsArray[i].offer.checkout}`;
    } else {
      cards[i].querySelector('.popup__text--time').remove();
    }
    if (advertsArray[i].offer.description) {
      cards[i].querySelector('.popup__description').textContent = advertsArray[i].offer.description;
    } else {
      cards[i].querySelector('.popup__description').remove();
    }
  }
}

// ! Отрисовка первого объявления в месте, указанном заданием
function addAdvertsCards(advertsArray) {
  for (let i = 0; i < advertsArray.length; i++) {
    cards[i] = popup.cloneNode(true);
  }
  createCards(advertsArray);
  const cardPrint = document.querySelector('#map-canvas');
  cardPrint.appendChild(cards[0]);
}

export {
  addAdvertsCards
};
