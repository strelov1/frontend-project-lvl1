import promptly from 'promptly';
import Engine from './engine.js';

export const greeting = async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

export default new Engine({
  greeting,
});
