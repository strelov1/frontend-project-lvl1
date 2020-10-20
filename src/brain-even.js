import promptly from 'promptly';
import { failGameMessage, successGameMessage, errorMessage } from './messages.js';

const generateRandomQuestion = () => Math.floor(Math.random() * 10);

const isEven = (num) => num % 2 === 0;

const isCorrectAnswer = (question, answer) => {
  if ((isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no')) {
    return true;
  }
  return false;
};

const runGameStep = async () => {
  const question = generateRandomQuestion();

  console.log(`Question: ${question}`);

  const userAnswer = await promptly.prompt('Your answer:');

  if (isCorrectAnswer(question, userAnswer)) {
    console.log('Correct!');
    return true;
  }

  const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';
  console.log(errorMessage(userAnswer, correctAnswer));
  return false;
};

const runBrainEvenGame = async () => {
  const finishStep = 3;

  for (let currentStep = 0; currentStep < finishStep; currentStep += 1) {
    // eslint-disable-next-line no-await-in-loop
    if (!await runGameStep()) {
      return false;
    }
  }
  return true;
};

export default async (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isWin = await runBrainEvenGame();

  if (isWin) {
    successGameMessage(name);
  } else {
    failGameMessage(name) 
  }
};
