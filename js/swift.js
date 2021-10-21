const mapFilters = document.querySelector('.map__filters');
const mapFilter = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');
const adForm = document.querySelector('.ad-form');
const adFormHeader = document.querySelector('.ad-form-header');
const adFormElement = document.querySelectorAll('.ad-form__element');

function active() {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilter.forEach(function () {
    for (let i = 0; i < mapFilter.length; i++) {
      mapFilter[i].removeAttribute('disabled', 'disabled');
    }
  });
  mapFeatures.removeAttribute('disabled', 'disabled');
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.removeAttribute('disabled', 'disabled');
  adFormElement.forEach(function () {
    for (let i = 0; i < adFormElement.length; i++) {
      adFormElement[i].removeAttribute('disabled', 'disabled');
    }
  });
}

function inactive() {
  mapFilters.classList.add('map__filters--disabled');
  mapFilter.forEach(function () {
    for (let i = 0; i < mapFilter.length; i++) {
      mapFilter[i].setAttribute('disabled', 'disabled');
    }
  });
  mapFeatures.setAttribute('disabled', 'disabled');
  adForm.classList.add('ad-form--disabled');
  adFormHeader.setAttribute('disabled', 'disabled');
  adFormElement.forEach(function () {
    for (let i = 0; i < adFormElement.length; i++) {
      adFormElement[i].setAttribute('disabled', 'disabled');
    }
  });
}

export {
  active,
  inactive
};
