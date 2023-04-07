import { parseAndEvaluate } from './parse-and-evaluate.js';
import { logError } from './utils.js';
import inquirer from 'inquirer';

const prompt = () =>
  inquirer.prompt([{ name: 'code', type: 'input', message: '>' }]);

export async function readEvalPrintLoop() {
  try {
    const { code } = await prompt();
    parseAndEvaluate(code);
  } catch (error) {
    logError(error);
  }
  readEvalPrintLoop();
}
