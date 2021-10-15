import {
  createFlat
} from './create-flat.js';

const advertsCount = 10;
const adverts = [];

for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat(i);
}


// ! ШАБЛОН  => фрагмент. => узел во фрагменте
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const card = cardTemplate.cloneNode(true); // ! Клон узла фрагмента
let cards = []; // ! пустой массив с объявлениями-карточками (объекты)

for (let i = 0; i < advertsCount; i++) {
  cards[i] = card;
}





function cardCreate(arr) {
  let type = '';
  for (let i = 0; i < arr.length; i++) {
    cards[i].querySelector('.popup__title').textContent = arr[i].offer.title;
    cards[i].querySelector('.popup__text--address').textContent = arr[i].offer.address;
    cards[i].querySelector('.popup__text--price').textContent = `${arr[i].offer.price} ₽/ночь`;
    if (arr[i].offer.type === 'flat') {
      type = 'Квартира'
    } else if (arr[i].offer.type === 'bungalow') {
      type = 'Бунгало'
    } else if (arr[i].offer.type === 'house') {
      type = 'Дом'
    } else if (arr[i].offer.type === 'palace') {
      type = 'Дворец'
    } else if (arr[i].offer.type === 'hotel') {
      type = 'Отель'
    }
    cards[i].querySelector('.popup__type').textContent = type;
    cards[i].querySelector('.popup__text--capacity').textContent = arr[i].offer.rooms + ' комнаты для ' + arr[i].offer.guests + ' гостей';
    cards[i].querySelector('.popup__text--time').textContent = `Заезд после ${arr[i].offer.checkin}, выезд до ${arr[i].offer.checkout}`;
    cards[i].querySelector('.popup__features').innerHTML = arr[i].offer.features;
    cards[i].querySelector('.popup__description').textContent = arr[i].offer.description;
  };
}
cardCreate(adverts)





// ! МЕСТО ОТРИСОВКИ
const cardPrint = document.querySelector('#map-canvas');
cardPrint.appendChild(cards[0]); // ! Отрисовка клона в указанном МЕСТЕ
