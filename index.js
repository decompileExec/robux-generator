#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';

let playerName;
let password;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const bigsleep = (ms = 99999999) => new Promise((r) => setTimeout(r, ms));

async function handleAnswer(isCorrect) {

  if (isCorrect) {
    console.log(`${chalk.green(`you did it you little piece of poo`)}` );
    await bigsleep();
  } else {
    console.log(`${chalk.bgBlue('@everyone')} ${playerName} is cringe`);
    await bigsleep();

    process.exit(1);
  }
}

async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'please enter your name.',
      default() {
        return 'fart_gamerkittens38h382934720';
      },
    });
  
    playerName = answers.player_name;
  }

  async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: `welcome, ${playerName}. please enter your password.\n`,
      choices: [
        makeFunOf,
        `FarTTY_PLEASEROBUX${Math.floor(Math.random() * 263)}`,
        `e`,
        `${playerName}`
      ],
    });

    return handleAnswer(answers.question_1 === makeFunOf);
  }
console.clear();
await sleep();
console.log(`
    ${chalk.bgGreen('ROBUX GENERATOR 2022')}
`)
await askName();
let makeFunOf = `${playerName}IsDumb${Math.floor(Math.random() * 1000)}`;
await question1();