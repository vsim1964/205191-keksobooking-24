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
  const RANDOM_NUMBER = (Math.random() * (max - min)) + min;
  return +RANDOM_NUMBER.toFixed(fraction);
}

const AVATARS = [
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
const TITLES = [
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
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const PROPERTIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
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
const PICTURES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const FROM_LATITUDE = 35.65000;
const TO_LATITUDE = 35.70000;
const FROM_LONGITUDE = 139.70000;
const TO_LONGITUDE = 139.80000;
const ADVERTS_COUNT = 10;
const ADVERTS = [];
let i;
for (i = 0; i < ADVERTS_COUNT; i++) {
  ADVERTS[i] = createFlat();
}

function createFlat() {
  const TITLES_RANDOM_INDEX = getRandomInteger(0, 9);
  const PRICES_RANDOM_INTEGER = getRandomInteger(500000, 1000000);
  const TYPES_RANDOM_INDEX = getRandomInteger(0, 4);
  const ROOMS_RANDOM_INTEGER = getRandomInteger(1, 10);
  const QUANTITY_RANDOM_INTEGER = getRandomInteger(1, 10);
  const CHECKINS_RANDOM_INDEX = getRandomInteger(0, 2);
  const CHECKOUTS_RANDOM_INDEX = getRandomInteger(0, 2);
  const PROPERTIES_START = getRandomInteger(0, 5);
  const PROPERTIES_END = getRandomInteger(PROPERTIES_START + 1, 7);
  const DESCRIPTIONS_RANDOM_INDEX = getRandomInteger(0, 9);
  const PICTURES_RANDOM_INDEX = getRandomInteger(0, 2);
  const LATS_RANDOM_INTEGER = getRandomFloat(FROM_LATITUDE, TO_LATITUDE, 5);
  const LNGS_RANDOM_INTEGER = getRandomFloat(FROM_LONGITUDE, TO_LONGITUDE, 5);

  return {
    author: {
      avatar: AVATARS[i],
    },
    offer: {
      title: TITLES[TITLES_RANDOM_INDEX],
      address: `${LATS_RANDOM_INTEGER}, ${LNGS_RANDOM_INTEGER}`,
      price: PRICES_RANDOM_INTEGER,
      type: TYPES[TYPES_RANDOM_INDEX],
      room: ROOMS_RANDOM_INTEGER,
      guests: QUANTITY_RANDOM_INTEGER,
      checkin: CHECKINS[CHECKINS_RANDOM_INDEX],
      checkout: CHECKOUTS[CHECKOUTS_RANDOM_INDEX],
      features: PROPERTIES.slice(PROPERTIES_START, PROPERTIES_END),
      description: DESCRIPTIONS[DESCRIPTIONS_RANDOM_INDEX],
      pictures: PICTURES[PICTURES_RANDOM_INDEX],
    },
    location: {
      lat: LNGS_RANDOM_INTEGER,
      lng: LNGS_RANDOM_INTEGER,
    },
  };
}

console.log(ADVERTS);
