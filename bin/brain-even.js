#!/usr/bin/env node

import greeting from '../src/games/greeting.js';
import brainEvenGame from '../src/games/brain-even.js';

const main = async () => {
  const userName = await greeting();
  await brainEvenGame(userName);
};

main();
