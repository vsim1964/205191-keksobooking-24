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

const array1 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array2 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array3 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array4 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array5 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array6 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array7 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array8 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array9 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const array10 = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
let arrays = [];


arrays[0] = array1.splice(0, getRandomInteger(0, 6));
arrays[1] = array2.splice(0, getRandomInteger(0, 6));
arrays[2] = array3.splice(0, getRandomInteger(0, 6));
arrays[3] = array4.splice(0, getRandomInteger(0, 6));
arrays[4] = array5.splice(0, getRandomInteger(0, 6));
arrays[5] = array6.splice(0, getRandomInteger(0, 6));
arrays[6] = array7.splice(0, getRandomInteger(0, 6));
arrays[7] = array8.splice(0, getRandomInteger(0, 6));
arrays[8] = array9.splice(0, getRandomInteger(0, 6));
arrays[9] = array10.splice(0, getRandomInteger(0, 6));

console.log(arrays);
