export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getRandomElement = (array) => array[generateRandomNumber(0, array.length - 1)];

export const range = (start, stop) => Array.from({ length: stop }, (x, i) => start + i);
