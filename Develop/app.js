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


// variable to count if the manager had been entered or not.
let counter = 0;
// array to store all employees
let employees = [];

// function to uses inquirer to gather information about the development team members,
makeEmployee = () => {
    console.log(counter);
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Hi, what is the name of the employee?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your position?",
            choices: ["Manager", "Engineer", "Intern"],
            validate: function (role) {
                if (counter < 1 && role !== "Manager") {
                    return true;
                }else{
                    return "The manager has already been selected, Please pick another option"
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number in this format 00?",
            validate: function (value) {
                let newId = value.match("^[0-9]+[0-9]$")
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
            message: "Please enter the email address",
            validate: function (value) {
                let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if (mail) {
                    return true;
                } else {
                    return "Please enter a valid Email address"
                }
            }
        }

    ]).then((data) => {

        // calling specific functions to sort data and assign them to corresponding job codes.
        arrangeEmployeeData(data);
    })
}

// This function takes all the data taken from makeEmployee and get relevent data to that specific role as well as assigning it to the job.
const arrangeEmployeeData = (data) => {
    console.log(data)
    // need to get the fourth data attribute that is individual to each employee.
    let newRole;
    if (data.role === "Manager") {
        newRole = "officeNumber";
    } else if (data.role === "Engineer") {
        newRole = "github";
    } else {
        newRole = "school";
    }

    // based on the role the user if prompted to enter specific info.
    inquirer.prompt([{
        type: "input",
        name: `${newRole}`,
        message: `What is your ${newRole}`
    }]).then((dataTwo) => {

        // At this point all necessary data has been collect and will be use to create an employee.
        if (counter < 1 & data.role === "Manager") {
            const manager = new Manager(data.name, data.id, data.email, dataTwo.officeNumber);
            employees.push(manager);
            counter++;
        } else if (data.role === "Engineer") {
            const newEngineer = new Engineer(data.name, data.id, data.email, dataTwo.github);
            employees.push(newEngineer);
        } else {
            const newIntern = new Intern(data.name, data.id, data.email, dataTwo.school);
            employees.push(newIntern);
        }

        // calling function to create another employee or render data.
        createAnotherEmployee();
    })
}

// The user has input all employees desired, now I call the `render` function (required
// above) and pass in an array containing all employee objects; 
// the `render` function will generate and return a block of HTML including templated divs for each employee!
const createAnotherEmployee = () => {

    // prompt user is they'd like to enter a new employee.
    inquirer.prompt({
        type: "confirm",
        name: "value",
        message: "Would you like to add an employee?"
    }).then((data3) => {

        if (data3.value) {

            // User has more employees to put in. 
            makeEmployee()
        } else {

            // User didn't have any more employees left to put into the system. It will now generate the Html
            fs.writeFile(outputPath, render(employees), (err) => {
                err ? console.log(err) : console.log("Successfully written file!")
            })
            console.log("Go and check out your html page.");
        }
    })
}

// calling the function to start prompts
makeEmployee();