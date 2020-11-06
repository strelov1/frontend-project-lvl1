/* eslint-disable */

import brainEvenGame from './src/games/brain-even.js';
import runBrainCalcGame from './src/games/brain-calc.js';
import runBrainGcdGame from './src/games/brain-gcd.js';
import runBrainPrimeGame from './src/games/brain-prime.js';
import runBrainProgressionGame from './src/games/brain-progression.js';

const number = prompt('Выберите игру от 1 до 5');

const games = {
  1: brainEvenGame,
  2: runBrainCalcGame,
  3: runBrainGcdGame,
  4: runBrainPrimeGame,
  5: runBrainProgressionGame,
};

const game = games[number] || (() => alert('Игра не найдена'));

const print = (message) => alert(message);
const interact = (message) => prompt(message);

game({ print, interact });
