const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");


// array of questions for user using inquirer
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about?',
    },
    {
      type: 'input',
      name: 'Table of Content',
      message: 'Press enter if you would like a Table of Content',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What would a user need to install this app?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this app used?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What license will you be using?',
      choices: ['MIT', 'GPLv2','Apache', 'Other', 'None']
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who has contributed to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests are required to run your project?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
];



// function to write README file and initialize program
function init(){
  inquirer.prompt(questions)
    .then(data => {
    const generateMarkdown = require("./app/utils/generateMarkdown");

    fs.writeFile('README.md', generateMarkdown(data), err => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  });
}


// function call to initialize program
init();
