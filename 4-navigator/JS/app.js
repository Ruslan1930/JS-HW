// Исходные данные
const positionLat = 2;
const positionLong  = 3;
const addresLat = 14;
const addreslong = 12;
// Точки координат
const lengthX = (positionLat - addresLat);
const lengthY = (positionLong - addreslong);

// Расчет расстояния
const distance = Math.sqrt(lengthX**2 + lengthY**2);
console.log(`Расстояние от точки А до точки Б равняется: ${distance} ед.`)


