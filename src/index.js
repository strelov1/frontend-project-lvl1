import engine from './engine.js';

const isBrowser = () => {
  try {
    /* eslint-disable-next-line */
    window;
    return true;
  } catch (e) {
    //
  }
  return false;
};

export default async function createGame(gameName, question) {
  if (!isBrowser()) {
    /* eslint-disable-next-line */
    const promptly = await import('promptly').then((module) => module.default);
    const cliEnv = {
      print: (message) => console.log(message),
      interact: (message) => promptly.prompt(message),
    };

    return engine(gameName, question, cliEnv);
  }

  const browserEnv = {
    /* eslint-disable-next-line */
    print: (message) => alert(message),
    /* eslint-disable-next-line */
    interact: (message) => prompt(message),
  };

  return engine(gameName, question, browserEnv);
}
