export const random = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);

export const getRandomElement = (array) => array[random(0, array.length - 1)];

export const range = (start, stop) => Array.from({ length: stop }, (x, i) => start + i);
