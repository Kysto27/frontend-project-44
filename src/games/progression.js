import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';

const generateRound = () => {
  const progression = [];

  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const progressionLength = generateRandomNumber(minProgressionLength, maxProgressionLength);

  const minRangeValue = 0;
  const maxRangeValue = 100;
  let progressionValue = generateRandomNumber(minRangeValue, maxRangeValue);

  const minProgressionStepValue = 2;
  const maxProgressionStepValue = 10;
  const progressionStep = generateRandomNumber(minProgressionStepValue, maxProgressionStepValue);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionValue);
    progressionValue += progressionStep;
  }

  const hiddenValueIndex = generateRandomIndex(progression);

  const answer = progression[hiddenValueIndex].toString();

  progression[hiddenValueIndex] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

const runProgression = () => run(generateRound, rule);

export default runProgression;
