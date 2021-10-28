// ! Валидация формы Заголовок == пункт 3.1 техзадания
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const titleInputElement = document.querySelector('#title');

titleInputElement.addEventListener('input', () => {
  const valueLength = titleInputElement.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    titleInputElement.setCustomValidity(`Добавьте ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleInputElement.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    titleInputElement.setCustomValidity('');
  }
  titleInputElement.reportValidity();
});

// ! Привязка placeholder price к type  ==   пункт 3.3 техзадания
const typeSelectElement = document.querySelector('#type');
const priceInputElement = document.querySelector('#price');

typeSelectElement.addEventListener('change', (evt) => {
  if (evt.target.value === 'flat') {
    priceInputElement.setAttribute('placeholder', 1000);
    priceInputElement.setAttribute('min', 1000);
  } else if (evt.target.value === 'bungalow') {
    priceInputElement.setAttribute('placeholder', 0);
    priceInputElement.setAttribute('min', 0);
  } else if (evt.target.value === 'house') {
    priceInputElement.setAttribute('placeholder', 5000);
    priceInputElement.setAttribute('min', 5000);
  } else if (evt.target.value === 'palace') {
    priceInputElement.setAttribute('placeholder', 10000);
    priceInputElement.setAttribute('min', 10000);
  } else if (evt.target.value === 'hotel') {
    priceInputElement.setAttribute('placeholder', 3000);
    priceInputElement.setAttribute('min', 3000);
  }
});

// ! Валидация формы Цена за ночь == пункт 3.2 техзадания
priceInputElement.addEventListener('input', () => {
  const priceValue = priceInputElement.getAttribute('min');

  if (priceInputElement.validity.valueMissing) {
    priceInputElement.setCustomValidity('Поле не должно быть пустым. Напишите цену, не меньше минимальной');
  } else if (priceInputElement.validity.rangeUnderflow) {
    priceInputElement.setCustomValidity(`Порог минимальной цены - ${priceValue}`);
  } else if (priceInputElement.validity.rangeOverflow) {
    priceInputElement.setCustomValidity('Превышена максимальная цена - 1 000 000');
  } else {
    priceInputElement.setCustomValidity('');
  }
  priceInputElement.reportValidity();
});

// ! Синхронизация времен заезда и выекзда  ==   пункт 3.5 техзадания
const timeinSelectElement = document.querySelector('#timein');
const timeoutSelectElement = document.querySelector('#timeout');

timeinSelectElement.addEventListener('change', (evt) => {
  if (evt.target.value === '12:00') {
    timeoutSelectElement.value = '12:00';
  } else if (evt.target.value === '13:00') {
    timeoutSelectElement.value = '13:00';
  } else if (evt.target.value === '14:00') {
    timeoutSelectElement.value = '14:00';
  }
});

// ! Ограничение количества гостей  ==   пункт 3.6 техзадания
const ONE_ROOM_ERROR_MNESSAGE = 'Количество гостей не может быть больше 1';
const TWO_ROOM_ERROR_MNESSAGE = 'Количество гостей не может быть больше 2';
const THREE_ROOM_ERROR_MNESSAGE = 'Количество гостей должно быть 1, 2 или 3';
const HUNDRED_ROOM_ERROR_MNESSAGE = '100 комнат - не длля гостей';
const roomNumberSelectElement = document.querySelector('#room_number');
const capacitySelectElement = document.querySelector('#capacity');

capacitySelectElement.addEventListener('change', (evt) => {
  if (roomNumberSelectElement.value === '1' && ['3', '2', '0'].includes(evt.target.value)) {
    capacitySelectElement.setCustomValidity(ONE_ROOM_ERROR_MNESSAGE);
  } else if (roomNumberSelectElement.value === '2' && ['3', '0'].includes(evt.target.value)) {
    capacitySelectElement.setCustomValidity(TWO_ROOM_ERROR_MNESSAGE);
  } else if (roomNumberSelectElement.value === '3' && ['0'].includes(evt.target.value)) {
    capacitySelectElement.setCustomValidity(THREE_ROOM_ERROR_MNESSAGE);
  } else if (roomNumberSelectElement.value === '100' && ['3', '2', '1'].includes(evt.target.value)) {
    capacitySelectElement.setCustomValidity(HUNDRED_ROOM_ERROR_MNESSAGE);
  } else {
    capacitySelectElement.setCustomValidity('');
  }
});
