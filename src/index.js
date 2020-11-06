const NUMBER_OF_STEP = 3;

export default async function engine(gameName, question, env, overrideActions = {}) {
  // SETUP
  const greeting = async () => {
    await env.print('Welcome to the Brain Games!');
    const userName = await env.interact('May I have your name?');
    await env.print(`Hello, ${userName}!`);
    return userName;
  };

  const answer = () => env.interact('Your answer:');
  const condition = (userQuestion, userAnswer) => userQuestion === userAnswer;
  const onFailStep = (rightAnswer, userAnswer) => env.print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

  const gameActions = {
    onFailGame: (name) => env.print(`Let's try again, ${name}!`),
    onFinishGame: (name) => env.print(`Congratulations, ${name}!`),
    ...overrideActions,
  };

  // START GAME

  const userName = await greeting();

  await env.print(gameName);

  /* eslint-disable no-await-in-loop */
  for (let step = 0; step < NUMBER_OF_STEP; step += 1) {
    const [gameQuestion, rightAnswer] = await question();

    await env.print(`Question: ${gameQuestion}`);

    const userAnswer = await answer();

    if (condition(rightAnswer, userAnswer)) {
      await env.print('Correct!');
    } else {
      await onFailStep(rightAnswer, userAnswer);
      await gameActions.onFailGame(userName);
      return;
    }
  }

  await gameActions.onFinishGame(userName);
}
