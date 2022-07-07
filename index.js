// packages needed for application

// packages from npm
const inquirer = require('inquirer');
const fs = require("fs");
//imported function created in utils directory 
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of objects (questions) for user input
// all questions are REQUIRED, and are of type "input" (except for license, which is multiple choice)
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You need to enter a valid name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project. (Required)",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log("You must provide a description.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Provide installation guidelines. (Required)",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("You must provide installation guidelines.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage instructions. (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("You must prvoide usage instructions.");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license(s) did the project use?",
        choices: ["MIT", "Apache", "BSD", "GPL", "Mozilla"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines. (Required)",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("You must provide contribution guidelines.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Provide test instructions. (Required)",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("You must enter valid test instructions.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("You must enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter your email address.");
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            console.log("There was an error.");
            console.log(err);
        } else {
            console.log("Check out your new README file!");
        }
    })
}

// function to initialize app
function init() {
    //takes the array of objects (questions) and prompts the user to answer them and saves the answers, using the inquirer package
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answers => { //takes the user's answers that init() returns, and sends to imported function 
        return generateMarkdown(answers)
    })
    .then(markdown => { //uses the imported function's return as the file content for writeToFile function
        writeToFile("README_gen.md", markdown)
    })
    .catch(err => { //if there are any errors, console log them.
        console.log(err);
    })
