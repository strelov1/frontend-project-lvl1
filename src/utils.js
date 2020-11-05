export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (array) => array[generateRandomNumber(0, array.length - 1)];

export const range = (start, num) => Array.from({ length: num }, (x, i) => start + i);
