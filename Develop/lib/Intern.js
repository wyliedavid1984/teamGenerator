// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    // All key value pairs
    constructor(name, id, email, school) {
        super(name, id, email);
        // intern specific key values
        this.role = "Intern";
        this.school = school;
        
    }
    // specific Intern method
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;