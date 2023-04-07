import inquirer from 'inquirer';
import { parseAndEvaluate } from './parse-and-evaluate.js';
import { logError } from './utils.js';

const prompt = () =>
  inquirer.prompt([{ name: 'code', type: 'input', message: '>' }]);

export const readEvalPrintLoop = async () => {
  try {
    const { code } = await prompt();
    parseAndEvaluate(code);
  } catch (error) {
    logError(error);
  }
  readEvalPrintLoop();
};

readEvalPrintLoop();
