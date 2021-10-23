// ! Валидация формы Заголовок == пункт 3.1 техзадания
const titleInput = document.querySelector('#title');
titleInput.addEventListener('invalid', () => {
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Поле не должно быть пустым. Напишите заголовок: краткое название своего предложения');
  } else if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
  } else if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity('Заголовок не должен превышать 100 символов');
  } else {
    titleInput.setCustomValidity('');
  }
});

// ! Привязка placeholder price к type  ==   пункт 3.3 техзадания

const selectType = document.querySelector('#type');
const bungalow = selectType.querySelector('option[value="bungalow"]');
const flat = selectType.querySelector('option[value="flat"]');
const house = selectType.querySelector('option[value="house"]');
const palace = selectType.querySelector('option[value="palace"]');
const hotel = selectType.querySelector('option[value="hotel"]');
const minPrice = document.querySelector('#price');

selectType.addEventListener('change', () => {
  if (flat.hasAttribute('selected')) {
    minPrice.setAttribute('placeholder', 1000);
    minPrice.setAttribute('min', 1000);
  } else if (bungalow.hasAttribute('selected')) {
    minPrice.setAttribute('placeholder', 0);
    minPrice.setAttribute('min', 0);
  } else if (house.hasAttribute('selected')) {
    minPrice.setAttribute('placeholder', 5000);
    minPrice.setAttribute('min', 5000);
  } else if (palace.hasAttribute('selected ')) {
    minPrice.setAttribute('placeholder', 10000);
    minPrice.setAttribute('min', 10000);
  } else if (hotel.hasAttribute('selected')) {
    minPrice.setAttribute('placeholder', 3000);
    minPrice.setAttribute('min', 3000);
  }
});

// ! Валидация формы Цена за ночь == пункт 3.2 техзадания
const priceInput = document.querySelector('#price');
const priceValue = priceInput.getAttribute('min');
priceInput.addEventListener('invalid', () => {
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Поле не должно быть пустым. Напишите цену, не меньше минимальной');
  } else if (titleInput.validity.rangeUnderflow) {
    titleInput.setCustomValidity(`Порог минимальной цены - ${priceValue}`);
  } else if (titleInput.validity.rangeOverflow) {
    titleInput.setCustomValidity('Превышена максимальная цена - 1 000 000');
  } else if (titleInput.validity.typeMismatch) {
    titleInput.setCustomValidity('Запись цены - только цифрами');
  } else {
    titleInput.setCustomValidity('');
  }
});

// ! Синхронизация времен заезда и выекзда  ==   пункт 3.5 техзадания

const timein = document.querySelector('#timein');
const timein12 = timein.getAttribute('value="12:00"');
const timein13 = timein.getAttribute('value="13:00"');
const timein14 = timein.getAttribute('value="14:00"');
const timeout = document.querySelector('#timeout');
const timeout12 = timeout.getAttribute('value="12:00"');
const timeout13 = timeout.getAttribute('value="13:00"');
const timeout14 = timeout.getAttribute('value="14:00"');


timein.addEventListener('change', () => {
  if (timein12.hasAttribute('selected')) {
    timeout12.setAttribute('selected');
  } else if (timein13.hasAttribute('selected')) {
    timeout13.setAttribute('selected');
  } else if (timein14.hasAttribute('selected')) {
    timeout14.setAttribute('selected');
  }
});

// ! Ограничение количества гостей  ==   пункт 3.6 техзадания

const capacity = document.querySelector('#capacity');
const capacity1 = capacity.getAttribute('value="1"');
const capacity2 = capacity.getAttribute('value="2"');
const capacity3 = capacity.getAttribute('value="3"');
const capacity100 = capacity.getAttribute('value="100"');

capacity.addEventListener('change', () => {
  if (capacity1.hasAttribute('selected')) {
    capacity1.setCustomValidity('Возможен выбор только одной комнаты');
  } else if (capacity2.hasAttribute('selected')) {
    capacity2.setCustomValidity('Возможен выбор только одной или двух комнат');
  } else if (capacity3.hasAttribute('selected')) {
    capacity3.setCustomValidity('Возможен выбор только одной или двух или трех комнат');
  } else if (capacity100.hasAttribute('selected')) {
    capacity100.setCustomValidity('Это вариант не для гостей');
  }
});
