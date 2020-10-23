import Engine, { FAIL_GAME_STEP, SUCCESS_GAME_STEP } from "./engine.js";

export const failGameMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const finishGameMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const correctMessage = () => {
  console.log('Correct!');
};

export const failMessage = (question, answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.`);
};

/**
 * Обобщение игровых правил
 * @param {ConfigureGameProps} param0 
 */
const configureGame = ({gameName, gameConditions}) => {
  const commonGameConditions = {
    ...gameConditions, 
    failStep: FAIL_GAME_STEP,
    onSuccessStep: correctMessage,
    onFailStep: failMessage,
  };
  return new Engine({
    gameGreeting: async () => {
      console.log(gameName);
    },
    rules: [
      {
        name: 'one',
        successStep: 'two',
        ...commonGameConditions,
      },
      {
        name: 'two',
        successStep: 'three',
        ...commonGameConditions,
      },
      {
        name: 'three',
        successStep: SUCCESS_GAME_STEP,
        ...commonGameConditions,
      },
    ],
    onFailGame: failGameMessage,
    onFinishGame: finishGameMessage,
  });
}

export default configureGame;