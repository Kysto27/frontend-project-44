import run from '../index.js';
import generateRandomNumber from '../utils.js';

const runEven = () => {
  const generateRound = () => {
    const question = generateRandomNumber();

    const isEven = (num) => num % 2 === 0;

    const answer = (isEven(question) ? 'yes' : 'no');

    return [question, answer];
  };

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  run(generateRound, gameRules);
};

export default runEven;
