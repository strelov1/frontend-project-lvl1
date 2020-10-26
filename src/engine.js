export const SUCCESS_GAME_STEP = 'SUCCESS_GAME_STEP';
export const FAIL_GAME_STEP = 'FAIL_GAME_STEP';

class Engine {
  /**
  * @param {EngineConstrutor}
  */
  constructor({
    gameGreeting,
    rules,
    onFinishGame,
    onFailGame,
  }) {
    this.gameGreeting = gameGreeting;
    this.rules = rules;
    this.onFinishGame = onFinishGame;
    this.onFailGame = onFailGame;
  }

  getStep(step) {
    return this.rules.find((item) => item.name === step);
  }

  async run(userName) {
    await this.gameGreeting();

    const loop = async (step) => {
      if (step === SUCCESS_GAME_STEP) {
        return this.onFinishGame(userName);
      }
      if (step === FAIL_GAME_STEP) {
        return this.onFailGame(userName);
      }

      const currentStep = this.getStep(step);

      const question = await currentStep.question();
      const answer = await currentStep.answer();

      if (currentStep.condition(question, answer)) {
        await currentStep.onSuccessStep(question, answer);

        return loop(currentStep.successStep);
      }

      await currentStep.onFailStep(question, answer);

      return loop(currentStep.failStep);
    };

    if (this.rules && this.rules.length) {
      loop(this.rules[0].name);
    }
  }
}

export default Engine;
