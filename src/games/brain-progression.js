import promptly from 'promptly';
import configureGame from '../index.js';
import {
  generateProgression,
  generateRandomNumber,
  getRandomElement,
  arrayReplaceValue,
} from '../calculate.js';

const userQuestion = async () => {
  const progression = generateProgression(generateRandomNumber(), 10);
  const element = getRandomElement(progression);
  const replacedProgression = arrayReplaceValue(progression, element, '..');

  console.log(`Question: ${replacedProgression.join(' ')}`);

  return element;
};

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === Number(answer);

const createGame = configureGame(
  {
    gameName: 'What number is missing in the progression?',
    gameConditions:  {
      question: userQuestion,
      answer: userAnswer,
      condition,
    }
  }
);

export default createGame;