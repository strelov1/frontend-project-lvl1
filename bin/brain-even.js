#!/usr/bin/env node

import { env } from '../src/cli.js';
import brainEvenGame from '../src/games/brain-even.js';

brainEvenGame(env);
