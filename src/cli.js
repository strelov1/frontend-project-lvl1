import greeting from './games/greeting.js';
import runBrainEvenGame from './games/brain-even.js';
import runBrainCalcGame from './games/brain-calc.js';
import runBrainGcdGame from './games/brain-gcd.js';
import runBrainProgressionGame from './games/brain-progression.js';
import runBrainPrimeGame from './games/brain-prime.js';

export const brainGames = async () => {
  await greeting();
};

export const brainEvenGame = async () => {
  const name = await greeting();
  await runBrainEvenGame.run(name);
};

export const brainCalcGame = async () => {
  const name = await greeting();
  await runBrainCalcGame.run(name);
};

export const brainGcdGame = async () => {
  const name = await greeting();
  await runBrainGcdGame.run(name);
};

export const brainProgressionGame = async () => {
  const name = await greeting();
  await runBrainProgressionGame.run(name);
};

export const brainPrimeGame = async () => {
  const name = await greeting();
  await runBrainPrimeGame.run(name);
};
