export const failGameMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const successGameMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const correctMessage = () => {
  console.log('Correct!');
};

export const failMessage = (question, answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
};
