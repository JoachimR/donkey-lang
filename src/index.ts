import inquirer from 'inquirer';

async function promptName() {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  });

  return name;
}

async function run() {
  const name = await promptName();

  console.log(`Hello, ${name}!`);
}

run();

