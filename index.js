const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "github",
    message: "What is your github username?"
},{
    type: "input",
    name: "title",
    message: "What is the name of your project?"
},{
    type: "input",
    name: "description",
    message: "Give a description of your project."
},{
    type: "input",
    name: "installation",
    message: "Tell us how to install the program."
},{
    type: "input",
    name: "usage",
    message: "Provide instructions and use case for this project, include screenshots if necessary."
},{
    type: "list",
    name: "license",
    message: "",
    choices: ["APACHE 2.0", "GPL 3.0", "MIT", "BSD 3", "None"]
},{
    type: "input",
    name: "credits",
    message: "List your collaborators, other users including their GitHub Profiles"
},{
    type: "input",
    name: "tests",
    message: "Do you have any tests for this app?"
},{
    type: "input",
    name: "questions",
    message: "Do you have any questions "
},{
    type: "input",
    name: "email",
    message:"Enter your Email address."
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)// process.cws gives us the file path up to "to homework 8"
    //filename is going to give us the name of the file that we're creating, this in this README.md and data is just the data itself
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md", response);
    })
    // promise using a .then function
    //call the function writeToFile using the date taht we pass (ie the inquirer responses)
}

// function call to initialize program
init();
