// TODO: Include packages needed for this application
const {prompt} = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const path = require("path")
// TODO: Create an array of questions for user input
const questions = [
    {type:"input", name: "title", message: "Please provide a project title."},
    {type:"input", name: "description", message: "Please provide a project description."},
    {type:"input", name: "installation", message: "Please provide installation instructions."},
    {type:"input", name: "usage", message: "Please provide usage instructions."},
    {type:"list", name: "license", message: "Please choose a license.", choices: ["MIT", "Apache2.0", "BSD3", "None"]},
    {type:"input", name: "contributing", message: "Please provide contribution instructions."},
    {type:"input", name: "test", message: "Please provide testing instructions."},
    {type:"input", name: "email", message: "Please provide an email address."},
    {type:"input", name: "github", message: "Please provide a GitHub username."},
];

// TODO: Create a function to initialize app
function init() {
prompt(questions).then(response => {
fs.writeFile(path.join("dist", "README.md"), generateMarkdown(response), (error) => {
    error ? console.log(error) : console.log("README successfully created.");
})
})
};

// Function call to initialize app
init();
