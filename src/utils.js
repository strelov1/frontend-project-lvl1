export const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

export const range = (start, num) => Array.from({ length: num }, (x, i) => start + i);