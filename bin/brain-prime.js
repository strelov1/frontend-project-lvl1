#!/usr/bin/env node

import { env } from '../src/cli.js';
import runBrainPrimeGame from '../src/games/brain-prime.js';

runBrainPrimeGame(env);
