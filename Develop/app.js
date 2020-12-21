const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let counter = 0;
let employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
makeEmployee = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Hi, what is your name?"
        }, {
            type: "list",
            name: "role",
            message: "What is your position?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter you email address",
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
        console.log(data)
        let newRole = "";
        if(data.role === "Manager"){
            newRole = "office";
        }else if (data.role === "Engineer"){
            newRole = "github";
        }else {
            newRole = "school";
        }

        inquirer.prompt([{
            type: "input",
            name: `${newRole}`,
            message: `What is your ${newRole}`
        }])

        if (counter < 1 & data.role === "Manager") {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            employees.push(manager);
            counter++;
        } else if (data.role == "Engineer") {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(newEngineer);
        } else {
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(newIntern);
        }
        inquirer.prompt({
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add an employee?",
            validate: function () {
                if (true) {
                    makeEmployee();
                } else {
                    render(employees);
                }
            }
        })
    })
}



makeEmployee();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```