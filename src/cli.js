import promptly from 'promptly';

export const env = {
  print: (message) => console.log(message),
  interact: (message) => promptly.prompt(message),
};

export default async () => {
  env.print('Welcome to the Brain Games!');
  const name = await env.interact('May I have your name?');
  env.print(`Hello, ${name}!`);
};
