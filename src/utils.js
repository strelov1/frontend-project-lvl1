export const generateRandomNumber = () => Math.floor(Math.random() * 10);

export const generateRandomOpoeration = () => {
  const operations = ['+', '-'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const caluclate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      throw Error('Wrong operation');
  }
};

export const isEven = (num) => num % 2 === 0;
