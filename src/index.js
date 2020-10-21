export const successGame = 'success';
export const failGame = 'finish';

class Engine {
  constructor({
    greeting, rules, finish, fail,
  }) {
    this.greeting = greeting;
    this.rules = rules;
    this.finish = finish;
    this.fail = fail;
  }

  getStep(step) {
    return this.rules.find((item) => item.name === step);
  }

  async run() {
    const name = await this.greeting();

    const loop = async (step) => {
      if (step === failGame) {
        return this.fail(name);
      }
      if (step === successGame) {
        return this.finish(name);
      }

      const currentStep = this.getStep(step);

      const question = await currentStep.question();
      const answer = await currentStep.answer();

      if (currentStep.condition(question, answer)) {
        await currentStep.onSuccess(question, answer);
        return loop(currentStep.success);
      }
      await currentStep.onFail(question, answer);
      return loop(currentStep.fail);
    };

    if (this.rules && this.rules.length) {
      loop(this.rules[0].name);
    }
  }
}

export default Engine;
