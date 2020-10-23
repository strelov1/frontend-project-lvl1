export const SUCCESS_GAME_STEP = 'SUCCESS_GAME_STEP';
export const FAIL_GAME_STEP = 'FAIL_GAME_STEP';

class Engine {
  /**
  * @param {EngineConstrutor}
  */
  constructor({
    greeting,
    rules,
    onFinishGame,
    onFailGame,
  }) {
    this.greeting = greeting;
    this.rules = rules;
    this.onFinishGame = onFinishGame;
    this.onFailGame = onFailGame;
  }

  getStep(step) {
    return this.rules.find((item) => item.name === step);
  }

  async run(name) {
    await this.gameGreeting();

    const loop = async (step) => {
      if (step === SUCCESS_GAME_STEP) {
        return this.onFinishGame(name);
      }
      if (step === FAIL_GAME_STEP) {
        return this.onFailGame(name);
      }

      const currentStep = this.getStep(step);

      const question = await currentStep.question();
      const answer = await currentStep.answer();

      if (currentStep.condition(question, answer)) {
        await currentStep.onSuccessStep(question, answer);

        return loop(currentStep.successStep);
      }

      await currentStep.onFail(question, answer);

      return loop(currentStep.onFailStep);
    };

    if (this.rules && this.rules.length) {
      loop(this.rules[0].name);
    }
  }
}

export default Engine;
