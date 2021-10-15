// Откроем окно, откроем блок с похожими персонажами внутри окна.
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');


// ! ШАБЛОН
// Найдём в документе шаблон, который мы будем копировать.
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

//*********************************************************** */

// ! МЕСТО РАЗМЕЩЕНИЯ
// найдём в окне список, в который мы будем вставлять похожих магов.
const similarListElement = userDialog.querySelector('.setup-similar-list');

// ! Клон шаблона
const wizardElement = similarWizardTemplate.cloneNode(true);
// ! Отривска клона в МЕСТЕ
similarListElement.appendChild(wizardElement);

//************************************************ */
// ! Сохраняем данные ГЕНЕРАТОР
const similarWizards = createWizards(); // массив объевтов

// ! Отрисуем всё ещё шаблон, но уже в проходке по МАССИВУ с данными.
// ! wizard - объект

similarWizards.forEach((wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  // ? Вставляем в шаблон данные
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  // ?
  similarListElement.appendChild(wizardElement);
});

// card.querySelector('.popup__title').textContent = adverts[0].offer.title;
// card.querySelector('.popup__text--address').textContent = adverts[0].offer.address;
// card.querySelector('.popup__text--price').textContent = `${adverts[0].offer.price} ₽/ночь`;
// card.querySelector('.popup__type').textContent = adverts[0].offer.type;
// card.querySelector('.popup__text--capacity').textContent = adverts[0].offer.rooms;
// card.querySelector('.popup__text--time').textContent = `Заезд после ${adverts[0].offer.checkin}, выезд до ${adverts[0].offer.checkout}`;
// card.querySelector('.popup__features').innerHTML = adverts[0].offer.features;
// card.querySelector('.popup__description').textContent = adverts[0].offer.description;
// card.querySelector('.popup__photos').src = adverts[0].offer.photos;


// retun {
//   card.querySelector('.popup__title').textContent = flat.offer.title;
//   card.querySelector('.popup__text--address').textContent = flat.offer.address;
//   card.querySelector('.popup__text--price').textContent = `${flat.offer.price} ₽/ночь`;
//   card.querySelector('.popup__type').textContent = flat.offer.type;
//   card.querySelector('.popup__text--capacity').textContent = flat.offer.rooms;
//   card.querySelector('.popup__text--time').textContent = `Заезд после ${flat.offer.checkin}, выезд до ${flat.offer.checkout}`;
//   card.querySelector('.popup__features').innerHTML = flat.offer.features;
//   card.querySelector('.popup__description').textContent = flat.offer.description;
// }
adverts.forEach((adverts) => {
  const card = cardTemplate.cloneNode(true); // ! Клон узла фрагмента
  card.querySelector('.popup__title').textContent = adverts.offer.title;
  card.querySelector('.popup__text--address').textContent = adverts.offer.address;
  card.querySelector('.popup__text--price').textContent = `${adverts.offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = adverts.offer.type;
  card.querySelector('.popup__text--capacity').textContent = adverts.offer.rooms;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${adverts.offer.checkin}, выезд до ${adverts.offer.checkout}`;
  card.querySelector('.popup__features').innerHTML = adverts.offer.features;
  card.querySelector('.popup__description').textContent = adverts.offer.description;
  console.log(card);
});


//************** */

// ! ********************************************
const imgBlock = card.querySelector('.popup__photos');
const image = card.querySelector('.popup__photos img');
const imgClone = image.cloneNode();

function imgCreate(collection) {
  for (let i = 0; i < collection.length; i++) {
    imgBlock.appendChild(imgClone);
    imgClone.src = collection[i];
  }
}
imgCreate()

for (let k = 0; k < collection[i].length; k++) {
  imgBlock[k].src = collection[i][k];
}
// ! Обработка фотографий

const sources = []; // массив массивов

function srcCreate(arr) {
  for (let i = 0; i < arr.length; i++) {
    sources[i] = arr[i].offer.photos;
  }
}
srcCreate(adverts);

console.log(sources);

const imgBlock = card.querySelector('.popup__photos');
const image = card.querySelector('.popup__photos img');
const imgClone = image.cloneNode(true);
imgBlock.removeChild(image);
imgBlock.appendChild(imgClone);
console.log(imgBlock);
// console.log(sources[0].length);

function imgCreate(collection) {
  for (let i = 0; i < collection.length; i++) {
    for (let k = 0; k < collection[i].length; k++) {
      imgBlock.appendChild(imgClone);
      console.log(i);
    }
  }
}
imgCreate(sources);
