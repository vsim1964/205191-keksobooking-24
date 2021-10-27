// ! Валидация формы Заголовок == пункт 3.1 техзадания
const titleInputElement = document.querySelector('#title');
titleInputElement.addEventListener('input', () => {
  if (titleInputElement.validity.valueMissing) {
    titleInputElement.setCustomValidity('Поле не должно быть пустым. Напишите заголовок: краткое название своего предложения');
  } else if (titleInputElement.validity.tooShort) {
    titleInputElement.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
  } else if (titleInputElement.validity.tooLong) {
    titleInputElement.setCustomValidity('Заголовок не должен превышать 100 символов');
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
priceInputElement.addEventListener('invalid', () => {
  const priceValue = priceInputElement.getAttribute('min');
  if (priceInputElement.validity.valueMissing) {
    priceInputElement.setCustomValidity('Поле не должно быть пустым. Напишите цену, не меньше минимальной');
  } else if (priceInputElement.validity.rangeUnderflow) {
    priceInputElement.setCustomValidity(`Порог минимальной цены - ${priceValue}`);
  } else if (priceInputElement.validity.rangeOverflow) {
    priceInputElement.setCustomValidity('Превышена максимальная цена - 1 000 000');
  } else if (priceInputElement.validity.typeMismatch) {
    priceInputElement.setCustomValidity('Запись цены - только цифрами');
  } else {
    priceInputElement.setCustomValidity('');
  }
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
const roomNumberSelectElement = document.querySelector('#room_number');
const capacitySelectElement = document.querySelector('#capacity');
const capacityOptionElements = capacitySelectElement.querySelectorAll('option');

if (roomNumberSelectElement.value === '1') {
  capacityOptionElements[0].setAttribute('disabled', 'disabled');
  capacityOptionElements[1].setAttribute('disabled', 'disabled');
  capacityOptionElements[2].removeAttribute('disabled', 'disabled');
  capacityOptionElements[3].setAttribute('disabled', 'disabled');
}

// roomNumber.addEventListener('change', (evt) => {
//   if (evt.target.value === '1') {
//     options[0].setAttribute('disabled', 'disabled');
//     options[1].setAttribute('disabled', 'disabled');
//     options[2].removeAttribute('disabled', 'disabled');
//     options[3].setAttribute('disabled', 'disabled');
//   } else if (evt.target.value === '2') {
//     options[1].removeAttribute('disabled', 'disabled');
//     options[2].removeAttribute('disabled', 'disabled');
//     options[0].setAttribute('disabled', 'disabled');
//     options[3].setAttribute('disabled', 'disabled');
//   } else if (evt.target.value === '3') {
//     options[0].removeAttribute('disabled', 'disabled');
//     options[1].removeAttribute('disabled', 'disabled');
//     options[2].removeAttribute('disabled', 'disabled');
//     options[3].setAttribute('disabled', 'disabled');
//   } else if (evt.target.value === '100') {
//     options[0].setAttribute('disabled', 'disabled');
//     options[1].setAttribute('disabled', 'disabled');
//     options[2].setAttribute('disabled', 'disabled');
//     options[3].removeAttribute('disabled', 'disabled');
//   }
// });
