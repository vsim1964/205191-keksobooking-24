import {
  createFlat
} from './create-flat.js';

// ! Получение массива данных объявлений по заданому количеству
const advertsCount = 10;
const adverts = [];

for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}

// ! Получение массива шаблонов объвлений
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup')
const card = popup.cloneNode(true);
const cards = [];
for (let i = 0; i < advertsCount; i++) {
  cards[i] = card;
}


// ! Обработка фотографий недвижимости
const sources = []; // массив массивов c src
function srcCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    sources[i] = arr[i].offer.photos;
  }
}
srcCreate(adverts);

const imgBlock = card.querySelector('.popup__photos');
const image = card.querySelector('.popup__photos img');
const imgClone = image.cloneNode(true);
imgBlock.removeChild(image);
imgBlock.appendChild(imgClone);

function imgCreate(collection) {
  for (let i = 0; i < collection.length; i++) {
    for (let k = 0; k < collection[i].length; k++) {
      imgBlock.appendChild(imgClone);
      imgClone.src = collection[i][k];
    }
  }
}
imgCreate(sources);

console.log(adverts[0].author.avatar);

// ! Заполнение карточки

function cardCreate(arr) {
  let type = '';
  for (let i = 0; i < arr.length; i++) {
    cards[i].querySelector('.popup__avatar').src = arr[i].author.avatar;
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
    cards[i].querySelector('.popup__text--capacity').textContent = arr[i].offer.rooms + ' комнаты для ' + arr[i].offer.guests + ' гостей';
    cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${arr[i].offer.checkin}, выезд до ${arr[i].offer.checkout}`;
    cards[i].querySelector('.popup__features').innerHTML = arr[i].offer.features;
    cards[i].querySelector('.popup__description').textContent = arr[i].offer.description;
  }
}
cardCreate(adverts);


// ! Отрисовка первого объявления в месте, указанном заданием
const cardPrint = document.querySelector('#map-canvas');
cardPrint.appendChild(cards[0]);
