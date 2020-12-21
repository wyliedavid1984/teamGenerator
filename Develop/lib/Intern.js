// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    // All key value pairs
    constructor(name, id, email, school) {
        super(name, id, email);
        // intern specific key values
        this.school = school;
        this.role = "Intern";
    }
    // specific Intern method
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;