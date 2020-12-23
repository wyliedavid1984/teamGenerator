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

    createManager = () => {

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
            // calling specific functions to sort data and assign them to corresponding job codes.

            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employees.push(manager);
            createTeam();
        })
    }

    createTeam = () => {
        inquirer.prompt({
            type: "list",
            name: "role",
            message: "What is the new employee?",
            choices: ["Engineer", "Intern", "No more Employees"],
        }).then((data) => {

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
    createEngineer = () => {

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
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(newEngineer);
            createTeam();
        })
    }

    createIntern = () => {

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
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(newIntern);
            createTeam();
        })
    }

    makeTeam = () => {

        fs.writeFile(outputPath, render(employees), (err) => {
            err ? console.log(err) : console.log("Successfully written file!")
        })
        console.log("Go and check out your html page.");
    }

    createManager();
}

appMenu();

// this is all old code I don't want to delete in case the above code is not working on time.
// 
// 
// 
// 
// // function to uses inquirer to gather information about the development team members,
// makeEmployee = () => {
//     console.log(counter);
//     inquirer.prompt([{
//             type: "input",
//             name: "name",
//             message: "Hi, what is the name of the employee?"
//         },
//         {
//             type: "list",
//             name: "role",
//             message: "What is your position?",
//             choices: ["Manager", "Engineer", "Intern"],

//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your ID number?",
//             validate: function (value) {
//                 let newId = value.match(/^[0-9]\d*$/)
//                 if (newId) {
//                     return true;
//                 } else {
//                     return "Please enter a number"
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Please enter the email address",
//             validate: function (value) {
//                 let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//                 if (mail) {
//                     return true;
//                 } else {
//                     return "Please enter a valid Email address"
//                 }
//             }
//         }

//     ]).then((data) => {

//         // calling specific functions to sort data and assign them to corresponding job codes.
//         arrangeEmployeeData(data);


//     })
// }

// // This function takes all the data taken from makeEmployee and get relevent data to that specific role as well as assigning it to the job.
// const arrangeEmployeeData = (data) => {
//     console.log(data)
//     // need to get the fourth data attribute that is individual to each employee.
//     let newRole;
//     if (data.role === "Manager") {
//         newRole = "officeNumber";
//     } else if (data.role === "Engineer") {
//         newRole = "github";
//     } else {
//         newRole = "school";
//     }

//     // based on the role the user if prompted to enter specific info.
//     inquirer.prompt([{
//         type: "input",
//         name: `${newRole}`,
//         message: `What is your ${newRole}`
//     }]).then((dataTwo) => {

//         // At this point all necessary data has been collect and will be use to create an employee.
//         if (counter < 1 & data.role === "Manager") {
//             const manager = new Manager(data.name, data.id, data.email, dataTwo.officeNumber);
//             employees.push(manager);
//             counter++;
//         } else if (data.role === "Engineer") {
//             const newEngineer = new Engineer(data.name, data.id, data.email, dataTwo.github);
//             employees.push(newEngineer);
//         } else {
//             const newIntern = new Intern(data.name, data.id, data.email, dataTwo.school);
//             employees.push(newIntern);
//         }

//         // calling function to create another employee or render data.
//         createAnotherEmployee();
//     })
// }

// // The user has input all employees desired, now I call the `render` function (required
// // above) and pass in an array containing all employee objects; 
// // the `render` function will generate and return a block of HTML including templated divs for each employee!
// const createAnotherEmployee = () => {

//     // prompt user is they'd like to enter a new employee.
//     inquirer.prompt({
//         type: "confirm",
//         name: "value",
//         message: "Would you like to add an employee?"
//     }).then((data3) => {

//         if (data3.value) {

//             // User has more employees to put in. 
//             makeEmployee()
//         } else {

//             // User didn't have any more employees left to put into the system. It will now generate the Html
//             fs.writeFile(outputPath, render(employees), (err) => {
//                 err ? console.log(err) : console.log("Successfully written file!")
//             })
//             console.log("Go and check out your html page.");
//         }
//     })
// }

// // calling the function to start prompts
// makeEmployee();