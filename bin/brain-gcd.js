#!/usr/bin/env node

import greeting from '../src/games/greeting.js';
import runBrainGcdGame from '../src/games/brain-gcd.js';

const main = async () => {
  const userName = await greeting();
  await runBrainGcdGame(userName);
};

main();
