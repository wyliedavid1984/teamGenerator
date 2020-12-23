// constructor classes 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// npm's and node lib
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// function to render all employees to html
const render = require("./lib/htmlRenderer");

// array to store all employees
let employees = [];


appMenu = () => {
    // makes a manager object
    createManager = () => {
        // prompts through manager questions
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Hi, what is your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID number?",
                validate: function (value) {
                    let newId = value.match(/^[0-9]\d*$/)
                    if (newId) {
                        return true;
                    } else {
                        return "Please enter a number"
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email address",
                validate: function (value) {
                    let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if (mail) {
                        return true;
                    } else {
                        return "Please enter a valid Email address"
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
                validate: function (value) {
                    let newId = value.match(/^[0-9]\d*$/)
                    if (newId) {
                        return true;
                    } else {
                        return "Please enter a number"
                    }
                }
            }
        ]).then((data) => {
            // creates a manager object and push it into employees array and calls the create team function to prompt another employee
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            createTeam();
        })
    }

    // prompt user to enter another employee or takes in a No response
    createTeam = () => {
        inquirer.prompt({
            type: "list",
            name: "role",
            message: "What is the new employee?",
            choices: ["Engineer", "Intern", "No more Employees"],
        }).then((data) => {

            // toggles between the two choices if neither is selected then default is ran and create the html file
            switch (data.role) {

                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    makeTeam();
            }
        })
    }
    // Creates an engineer object
    createEngineer = () => {
        // prompts through engineer questions 
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Hi, what is the Engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their ID number?",
                validate: function (value) {
                    let newId = value.match(/^[0-9]\d*$/)
                    if (newId) {
                        return true;
                    } else {
                        return "Please enter a number"
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter their email address",
                validate: function (value) {
                    let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if (mail) {
                        return true;
                    } else {
                        return "Please enter a valid Email address"
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineer's GitHub user name?"
            }
        ]).then((data) => {
            // create new engineer and push up to employees array and then calls the create team function to prompt another employee
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(newEngineer);
            createTeam();
        })
    }
    // creates an intern object
    createIntern = () => {
        // prompts intern questions
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Hi, what is Interns name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their ID number?",
                validate: function (value) {
                    let newId = value.match(/^[0-9]\d*$/)
                    if (newId) {
                        return true;
                    } else {
                        return "Please enter a number"
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Please enter their email address",
                validate: function (value) {
                    let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                    if (mail) {
                        return true;
                    } else {
                        return "Please enter a valid Email address"
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What school do the intern attend?"
            }
        ]).then((data) => {
            // create the new intern object and push up to employees array and then calls the create team function to prompt another employee
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(newIntern);
            createTeam();
        })
    }

    makeTeam = () => {

        fs.writeFile(outputPath, render(employees), (err) => {
            err ? console.log(err) : console.log("Successfully written file!\n Go and check out your html page.")
        })
     
    }

    createManager();
}

appMenu();

