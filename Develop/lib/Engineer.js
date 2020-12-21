// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    // all key and value
    constructor(name, id, email, github) {
        // from Employee constructor
        super(name, id, email);
        // specific keys to the Engineer
        this.github = github;
        this.role = "Engineer";
    }
    // specific method for engineer.
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;