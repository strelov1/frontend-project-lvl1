import promptly from 'promptly';

export const gameGreeting = (gameName) => {
  console.log(gameName);
};

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

const userAnswer = () => promptly.prompt('Your answer:');

const condition = (question, answer) => question === answer;

const engine = ({
  gameName, question, settings,
}) => async (userName) => {
  await gameGreeting(gameName);

  const gameSettings = {
    onSuccessStep: correctMessage,
    onFailStep: failMessage,
    onFailGame: finishGameMessage,
    onFinishGame: finishGameMessage,
    userAnswer,
    numberOfStep: 3,
    ...settings,
  };

  /* eslint-disable no-await-in-loop */
  for (let step = 0; step < gameSettings.numberOfStep; step += 1) {
    const userQuestion = await question();
    const answer = await gameSettings.userAnswer();
    if (condition(userQuestion, answer)) {
      await gameSettings.onSuccessStep(userQuestion, answer);
    } else {
      await gameSettings.onFailStep(userQuestion, answer);
      return gameSettings.onFailGame(userQuestion, answer);
    }
  }

  return gameSettings.onFinishGame(userName);
};

export default engine;
