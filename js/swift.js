const mapFiltersForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeaturesFilter = document.querySelector('.map__features');
const advertForm = document.querySelector('.ad-form');
const advertFormHeader = document.querySelector('.ad-form-header');
const advertFormSections = document.querySelectorAll('.ad-form__element');

function setActiveState() {
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFilters.forEach((mapFilter) => {
    mapFilter.removeAttribute('disabled', 'disabled');
  });
  mapFeaturesFilter.removeAttribute('disabled', 'disabled');
  advertForm.classList.remove('ad-form--disabled');
  advertFormHeader.removeAttribute('disabled', 'disabled');
  advertFormSections.forEach((advertFormSection) => {
    advertFormSection.removeAttribute('disabled', 'disabled');
  });
}

function setInactiveState() {
  mapFiltersForm.classList.add('map__filters--disabled');
  mapFilters.forEach((mapFilter) => {
    mapFilter.removeAttribute('disabled', 'disabled');
  });

  mapFeaturesFilter.setAttribute('disabled', 'disabled');
  advertForm.classList.add('ad-form--disabled');
  advertFormHeader.setAttribute('disabled', 'disabled');
  advertFormSections.forEach((advertFormSection) => {
    advertFormSection.removeAttribute('disabled', 'disabled');
  });
}

const bodyElement = document.querySelector('body');

const successTemplate = document.querySelector('#success');
const successModalElement = successTemplate.content.cloneNode(true);

function getSuccessMessage() {
  bodyElement.appendChild(successModalElement);
}

const errorTemplate = document.querySelector('#error');
const errorModalElement = errorTemplate.content.cloneNode(true);

function getErrorMessage() {
  bodyElement.appendChild(errorModalElement);
}

export {
  setActiveState,
  setInactiveState,
  getSuccessMessage,
  getErrorMessage
};
