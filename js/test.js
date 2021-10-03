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

const array = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

console.log(array);

function arrayLength() {
  array.splice(0, getRandomInteger(0, 5));
  const obb = {
    features: array,
  };
  console.log(obb);
}
arrayLength();
