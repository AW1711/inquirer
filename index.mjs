// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'favoriteDrink',
//       message: 'What is your favorite alcoholic drink?',
//     },
//     {
//       type: 'input',
//       name: 'favoritePizza',
//       message: 'What is your favorite type of pizza?',
//     },
//     {
//       type: 'list',
//       name: 'favoriteSeason',
//       message: 'What is your favorite season?',
//       choices: ['Spring', 'Summer', 'Autumn', 'Winter'],
//     },
//   ])
//   .then((answers) => {
//     console.log('Answers:', answers);
//   });

import inquirer from 'inquirer';

// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

// Function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  console.log('Your choice:', userChoice);
  console.log('Computer\'s choice:', computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// Inquirer prompt for user's choice
inquirer
  .prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'Choose Rock, Paper, or Scissors:',
      choices: ['Rock', 'Paper', 'Scissors'],
    },
  ])
  .then((answers) => {
    const userChoice = answers.userChoice;
    playGame(userChoice);
  });