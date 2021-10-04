function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, fraction) {
  if (max <= min) {
    return null;
  } else if (max < 0 || min < 0) {
    return null;
  }
  const randomNumber = (Math.random() * (max - min)) + min;
  return +randomNumber.toFixed(fraction);
}

const avatars = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const titles = [
  'Хорошее жилье',
  'Отличный вид',
  'Метро рядом',
  'Первый этаж',
  'Тихий район',
  'Возле рынка',
  'Стадион напротив',
  'У парка',
  'Просторная кухня',
  'Вежливые соседи',
];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];
const properties = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = [
  'Кухня полностью экипирована бытовой техникой: холодильник, посудомоечная машина, варочная панель.',
  'Квартира оснащена всем необходимым для жизни, заходи и живи.',
  'Квартира уютная и просторная, тихая, заезжай и живи, все в состоянии нового. Подъезд чистый и без запаха.',
  'Хотите жить в шикарной дизайнерской студии и получать эстетическое удовольствие от нахождения в ней? ',
  'Есть вся необходимая мебель и техника. Рассмотрим всех порядочных и платежеспособных.',
  'Предпочтительный портрет арендаторов: возраст от 25 лет, дети не младше 8 лет, без домашних животных. ',
  'Большая лоджия обрамляет всю квартиру.Из каждой комнаты выход на лоджию с завораживающей панорамой города.',
  'На территории комплекса комфортный бассейн с ионизированной водой, сауна.',
  'Беспроблемная парковка,автомойка -приятный бонус для автовладельцев.',
  'Огороженная территория,высокопрофессиональная охрана,система видео наблюдения,консьерж.',
];
const pictures = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

function createFlat() {
  const avatarsRandomIndex = getRandomInteger(0, 9);
  const titlesRandomIndex = getRandomInteger(0, 9);
  const pricesRandomInteger = getRandomInteger(500000, 1000000);
  const typesRandomIndex = getRandomInteger(0, 4);
  const roomsRandomInteger = getRandomInteger(1, 10);
  const quantityRandomInteger = getRandomInteger(1, 10);
  const checkinsRandomIndex = getRandomInteger(0, 2);
  const checkoutsRandomIndex = getRandomInteger(0, 2);
  const propertiesStart = getRandomInteger(0, 5);
  const propertiesEnd = getRandomInteger(propertiesStart + 1, 7);
  const descriptionsRandomIndex = getRandomInteger(0, 9);
  const picturesRandomIndex = getRandomInteger(0, 2);
  const latsRandomInteger = getRandomFloat(35.65000, 35.70000, 5);
  const lngsRandomInteger = getRandomFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: avatars[avatarsRandomIndex],
    },
    offer: {
      title: titles[titlesRandomIndex],
      address: {
        latsRandomInteger,
        lngsRandomInteger,
      },
      price: pricesRandomInteger,
      type: types[typesRandomIndex],
      room: roomsRandomInteger,
      guests: quantityRandomInteger,
      checkin: checkins[checkinsRandomIndex],
      checkout: checkouts[checkoutsRandomIndex],
      features: properties.slice(propertiesStart, propertiesEnd),
      description: descriptions[descriptionsRandomIndex],
      pictures: pictures[picturesRandomIndex],
    },
    location: {
      lat: latsRandomInteger,
      lng: lngsRandomInteger,
    },
  };
}
const advertsCount = 10;
const adverts = [];
for (let i = 0; i < advertsCount; i++) {
  adverts[i] = createFlat();
}
console.log(adverts);
