/*
1. Функция, возвращающая случайное целое число из переданного диапазона включительно.
2. Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
Источники:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://learn.javascript.ru/number
*/

function randomInteger(min, max) {
  min = Math.ceil(min); // округление вверх
  max = Math.floor(max); // округление вниз
  if (max <= min) {
    console.log('Значение числа max  должно быть больше значение числа min');
  } else if (max < 0 || min < 0) {
    console.log('Значения введенных чисел должны быть бльше или равны 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(randomInteger(50, 52));

function randomFloat(min, max, n) {
  if (max <= min) {
    console.log('Значение числа max  должно быть больше значение числа min');
  } else if (max < 0 || min < 0) {
    console.log('Значения введенных чисел должны быть больше или равны 0');
  }
  let num = (Math.random() * (max - min)) + min;
  return +num.toFixed(n);
}
console.log(randomFloat(51.99998, 52, 5)); //Максимум и минимум включаются
