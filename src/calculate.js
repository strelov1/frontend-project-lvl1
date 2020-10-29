export const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1; 

export const generateProgression = (start, num) => Array.from({ length: num }, (x, i) => start + i);

export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// eslint-disable-next-line arrow-body-style
export const arrayReplaceValue = (array, searchValue, replaceValue) => {
  return array.map((item) => (item === searchValue ? replaceValue : item));
};

export const generateRandomOperation = () => getRandomElement(['+', '-', '*']);

// eslint-disable-next-line no-bitwise
const isInteger = (n) => (n ^ 0) === n;

export const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }
  return generateProgression(2, num - 2)
    .map((item) => (num / item))
    .filter(isInteger)
    .length === 0;
};

export const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw Error('Wrong operation');
  }
};

export const calculateGcd = (num1, num2) => {
  const max = Math.max(num1, num2);
  for (let divider = max; divider > 0; divider -= 1) {
    if (num1 % divider === 0 && num2 % divider === 0) {
      return divider;
    }
  }
  return 1;
};

export const isEven = (num) => num % 2 === 0;
