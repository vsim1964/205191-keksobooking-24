const mapFiltersForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeaturesFilter = document.querySelector('.map__features');
const advertForm = document.querySelector('.ad-form');
const advertFormHeader = document.querySelector('.ad-form-header');
const advertFormSection = document.querySelectorAll('.ad-form__element');

function active() {
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFilters.forEach(() => {
    for (let i = 0; i < mapFilters.length; i++) {
      mapFilters[i].removeAttribute('disabled', 'disabled');
    }
  });
  mapFeaturesFilter.removeAttribute('disabled', 'disabled');
  advertForm.classList.remove('ad-form--disabled');
  advertFormHeader.removeAttribute('disabled', 'disabled');
  advertFormSection.forEach(() => {
    for (let i = 0; i < advertFormSection.length; i++) {
      advertFormSection[i].removeAttribute('disabled', 'disabled');
    }
  });
}

function inactive() {
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFilters.forEach(() => {
    for (let i = 0; i < mapFilters.length; i++) {
      mapFilters[i].setAttribute('disabled', 'disabled');
    }
  });
  mapFeaturesFilter.setAttribute('disabled', 'disabled');
  advertForm.classList.add('ad-form--disabled');
  advertFormHeader.setAttribute('disabled', 'disabled');
  advertFormSection.forEach(() => {
    for (let i = 0; i < advertFormSection.length; i++) {
      advertFormSection[i].setAttribute('disabled', 'disabled');
    }
  });
}

export {
  active,
  inactive
};
