import promptly from 'promptly';
import engine from './engine';

export default async function createGame(gameName, question) {
  const cliEnv = {
    print: (message) => console.log(message),
    interact: (message) => promptly.prompt(message),
  };
  return engine(gameName, question, cliEnv);
}
