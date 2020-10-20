export const failGameMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const successGameMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const errorMessage = (userAnswer, correctAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
