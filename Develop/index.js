// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message:
      "What is the title you would like to give your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your Github Username? (Required)",
    validate: (githubinput) => {
      if (githubinput) {
        return true;
      } else {
        console.log("Please enter your Github Username!");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email? (Required)",
    validate: (emailinput) => {
      if (emailinput) {
        return true;
      } else {
        console.log("Please enter your Email!");
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Are there any Installation instructions for your project? (Required)",
    validate: (InstallationInput) => {
      if (InstallationInput) {
        return true;
      } else {
        console.log("Please enter your project Installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "What is your project, what problem will it solve, why did you make it, and what did you learn? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter your project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your use instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "credit",
    message:
      "Please provide any credits needed for tutorials or starter code used. (Required)",
    validate: (creditInput) => {
      if (creditInput) {
        return true;
      } else {
        console.log("Please enter Credit details!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmContributers",
    message: "Would you like to allow other developers to contribute?",
    default: true,
  },
  {
    type: "input",
    name: "contribute",
    message: "Please provide guidelines for contributing. (Required)",
    when: (answers) => answers.confirmContributers,
    validate: (contributerInput) => {
      if (contributerInput) {
        return true;
      } else {
        console.log("Please enter contributing guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions on how to Test the app. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter your use Test instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
    when: (answers) => {
      return answers.license !== "no license";
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)
  );
}
inquirer.prompt(questions).then((answers) => {
  const readmePageContent = generateMarkdown(answers);
  writeToFile("Generated-README.md", readmePageContent);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
