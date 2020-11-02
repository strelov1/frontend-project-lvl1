#!/usr/bin/env node

import greeting from '../src/games/greeting.js';
import runBrainProgressionGame from '../src/games/brain-progression.js';

const main = async () => {
  const userName = await greeting();
  await runBrainProgressionGame(userName);
};

main();
