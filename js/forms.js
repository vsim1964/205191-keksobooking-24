// ! Валидация формы Заголовок == пункт 3.1 техзадания
const titleInput = document.querySelector('#title');
titleInput.addEventListener('change', () => {
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
const minPrice = document.querySelector('#price');

selectType.addEventListener('change', (evt) => {
  if (evt.target.value === 'flat') {
    minPrice.setAttribute('placeholder', 1000);
    minPrice.setAttribute('min', 1000);
  } else if (evt.target.value === 'bungalow') {
    minPrice.setAttribute('placeholder', 0);
    minPrice.setAttribute('min', 0);
  } else if (evt.target.value === 'house') {
    minPrice.setAttribute('placeholder', 5000);
    minPrice.setAttribute('min', 5000);
  } else if (evt.target.value === 'palace') {
    minPrice.setAttribute('placeholder', 10000);
    minPrice.setAttribute('min', 10000);
  } else if (evt.target.value === 'hotel') {
    minPrice.setAttribute('placeholder', 3000);
    minPrice.setAttribute('min', 3000);
  }
});

// ! Валидация формы Цена за ночь == пункт 3.2 техзадания
minPrice.addEventListener('invalid', () => {
  const priceValue = minPrice.getAttribute('min');
  if (minPrice.validity.valueMissing) {
    minPrice.setCustomValidity('Поле не должно быть пустым. Напишите цену, не меньше минимальной');
  } else if (minPrice.validity.rangeUnderflow) {
    minPrice.setCustomValidity(`Порог минимальной цены - ${priceValue}`);
  } else if (minPrice.validity.rangeOverflow) {
    titleInput.setCustomValidity('Превышена максимальная цена - 1 000 000');
  } else if (minPrice.validity.typeMismatch) {
    minPrice.setCustomValidity('Запись цены - только цифрами');
  } else {
    minPrice.setCustomValidity('');
  }
});

// ! Синхронизация времен заезда и выекзда  ==   пункт 3.5 техзадания
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

timein.addEventListener('change', (evt) => {
  if (evt.target.value === '12:00') {
    timeout.value = '12:00';
  } else if (evt.target.value === '13:00') {
    timeout.value = '13:00';
  } else if (evt.target.value === '14:00') {
    timeout.value = '14:00';
  }
});

// ! Ограничение количества гостей  ==   пункт 3.6 техзадания
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const options = capacity.querySelectorAll('option');

if (roomNumber.value === '1') {
  options[0].setAttribute('disabled', 'disabled');
  options[1].setAttribute('disabled', 'disabled');
  options[2].removeAttribute('disabled', 'disabled');
  options[3].setAttribute('disabled', 'disabled');
}

roomNumber.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    options[0].setAttribute('disabled', 'disabled');
    options[1].setAttribute('disabled', 'disabled');
    options[2].removeAttribute('disabled', 'disabled');
    options[3].setAttribute('disabled', 'disabled');
  } else if (evt.target.value === '2') {
    options[1].removeAttribute('disabled', 'disabled');
    options[2].removeAttribute('disabled', 'disabled');
    options[0].setAttribute('disabled', 'disabled');
    options[3].setAttribute('disabled', 'disabled');
  } else if (evt.target.value === '3') {
    options[0].removeAttribute('disabled', 'disabled');
    options[1].removeAttribute('disabled', 'disabled');
    options[2].removeAttribute('disabled', 'disabled');
    options[3].setAttribute('disabled', 'disabled');
  } else if (evt.target.value === '100') {
    options[0].setAttribute('disabled', 'disabled');
    options[1].setAttribute('disabled', 'disabled');
    options[2].setAttribute('disabled', 'disabled');
    options[3].removeAttribute('disabled', 'disabled');
  }
});
