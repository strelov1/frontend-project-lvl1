const NUMBER_OF_STEP = 3;

export default async function engine(gameName, question, env) {
  await env.print('Welcome to the Brain Games!');
  const userName = await env.interact('May I have your name?');
  await env.print(`Hello, ${userName}!`);

  await env.print(gameName);

  /* eslint-disable no-await-in-loop */
  for (let step = 0; step < NUMBER_OF_STEP; step += 1) {
    const [gameQuestion, rightAnswer] = await question();

    await env.print(`Question: ${gameQuestion}`);

    const userAnswer = await env.interact('Your answer:');

    if (rightAnswer === userAnswer) {
      await env.print('Correct!');
    } else {
      await env.print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      await env.print(`Let's try again, ${userName}!`);
      return;
    }
  }

  await env.print(`Congratulations, ${userName}!`);
}
