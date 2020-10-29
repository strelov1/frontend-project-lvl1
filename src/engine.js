export const SUCCESS_GAME_STEP = 'SUCCESS_GAME_STEP';
export const FAIL_GAME_STEP = 'FAIL_GAME_STEP';

/**
* @param {EngineConstrutor}
*/
const engine = ({
  gameGreeting,
  rules,
  onFinishGame,
  onFailGame,
}) => {
  const getStep = (step) => rules.find((item) => item.name === step);

  const run = async (userName) => {
    await gameGreeting();

    const loop = async (step) => {
      if (step === SUCCESS_GAME_STEP) {
        return onFinishGame(userName);
      }
      if (step === FAIL_GAME_STEP) {
        return onFailGame(userName);
      }

      const currentStep = getStep(step);

      const question = await currentStep.question();
      const answer = await currentStep.answer();

      if (currentStep.condition(question, answer)) {
        await currentStep.onSuccessStep(question, answer);

        return loop(currentStep.successStep);
      }

      await currentStep.onFailStep(question, answer);

      return loop(currentStep.failStep);
    };

    if (rules && rules.length) {
      loop(rules[0].name);
    }
  };

  return {
    run,
  };
};

export default engine;
