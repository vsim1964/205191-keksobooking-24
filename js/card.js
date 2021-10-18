import {
  createFlat
} from './create-flat.js';

// ! Получение массива данных объявлений по заданому количеству
const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}
console.log(adverts);
// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const card = popup.cloneNode(true);
const cards = [];
for (let i = 0; i < advertsCount; i++) {
  cards[i] = card;
}

// ! Обработка аватаров
const imgAvatars = []; // массив массивов c src
function avatarsCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    imgAvatars[i] = arr[i].author.avatar;
  }
}
avatarsCreate(adverts);
const imgAvatar = popup.querySelector('.popup__avatar');

function imgAvatarCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    const cloneAvatar = imgAvatar.cloneNode()
    cloneAvatar.src = arr[i];
    popup.appendChild(cloneAvatar);
    imgAvatar.remove();
  }
}
imgAvatarCreate(imgAvatars);


// ! Обработка фотографий недвижимости
const sources = []; // массив массивов c src
function srcCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    sources[i] = arr[i].offer.photos;
  }
}
srcCreate(adverts);

const photos = card.querySelector('.popup__photos');
const photo = photos.querySelector('.popup__photo');
const images = [];

function imgCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      const clonedPhoto = photo.cloneNode();
      clonedPhoto.src = arr[i][k];
      photos.appendChild(clonedPhoto);
    }
    photo.remove();
    images[i] += photo;
    return images[i];
  }
}
imgCreate(sources);

// ! Заполнение карточки
function cardCreate(arr) {
  let type = '';
  for (let i = 0; i < arr.length; i++) {
    // cards[i].querySelector('.popup__avatar').src = imgAvatars[i];
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
    cards[i].querySelector('.popup__features').innerHTML = arr[i].offer.features;
    cards[i].querySelector('.popup__description').textContent = arr[i].offer.description;
  }
}

cardCreate(adverts);

// ! Отрисовка первого объявления в месте, указанном заданием
const cardPrint = document.querySelector('#map-canvas');
cardPrint.appendChild(cards[0]);
