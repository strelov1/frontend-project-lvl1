import promptly from 'promptly';
import configureGame from '../index.js';
import { generateRandomNumber, isPrime } from '../calculate.js';

const userQuestion = async () => {
  const num = generateRandomNumber();

  console.log(`Question: ${num}`);

  return isPrime(num) ? 'yes' : 'no';
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === answer;

const createGame = configureGame(
  {
    gameName: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    gameConditions:  {
      question: userQuestion,
      answer: userAnswer,
      condition,
    }
  }
);

export default createGame;