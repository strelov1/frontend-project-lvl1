import promptly from 'promptly';

const print = console.log;
const { prompt } = promptly;

const NUMBER_OF_STEP = 3;

const engine = async (gameName, question, overrideActions = {}) => {
  const gameActions = {
    greeting: async () => {
      await print('Welcome to the Brain Games!');
      const userName = await prompt('May I have your name?');
      await print(`Hello, ${userName}!`);
      return userName;
    },
    userAnswer: () => prompt('Your answer:'),
    onSuccessStep: () => print('Correct!'),
    onFailStep: (rightAnswer, userAnswer) => print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`),
    onFailGame: (name) => print(`Let's try again, ${name}!`),
    onFinishGame: (name) => print(`Congratulations, ${name}!`),
    ...overrideActions,
  };

  const userName = await gameActions.greeting();

  await print(gameName);

  const condition = (userQuestion, userAnswer) => userQuestion === userAnswer;

  /* eslint-disable no-await-in-loop */
  for (let step = 0; step < NUMBER_OF_STEP; step += 1) {
    const [gameQuestion, rightAnswer] = await question();

    await print(`Question: ${gameQuestion}`);

    const userAnswer = await gameActions.userAnswer();

    if (condition(rightAnswer, userAnswer)) {
      await gameActions.onSuccessStep(rightAnswer, userAnswer);
    } else {
      await gameActions.onFailStep(rightAnswer, userAnswer);
      await gameActions.onFailGame(userName);
      return;
    }
  }

  await gameActions.onFinishGame(userName);
};

export default engine;
