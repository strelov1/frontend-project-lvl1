#!/usr/bin/env node

import { env } from '../src/cli.js';
import runBrainGcdGame from '../src/games/brain-gcd.js';

runBrainGcdGame(env);
