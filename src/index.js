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


const configureGame = ({gameName, gameConditions}) => {
  const commonGameConditions  = {
    ...gameConditions, 
    onFailStep: FAIL_GAME_STEP,
    onSuccess: correctMessage,
    onFail: failMessage,
  };
  return new Engine({
    greeting: async () => {
      console.log(gameName);
    },
    rules: [
      {
        name: 'one',
        onSuccessStep: 'two',
        ...commonGameConditions,
      },
      {
        name: 'two',
        onSuccessStep: 'three',
        ...commonGameConditions,
      },
      {
        name: 'three',
        onSuccessStep: SUCCESS_GAME_STEP,
        ...commonGameConditions,
      },
    ],
    onFailGame: failGameMessage,
    onFinishGame: finishGameMessage,
  });
}

export default configureGame;