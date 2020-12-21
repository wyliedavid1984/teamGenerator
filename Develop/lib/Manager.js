// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    // All key value pairs
    constructor(name, id, email, office) {
        super(name, id, email);
        // manager specific key value
        this.role = "Manager";
        this.officeNumber = office;
        
    }
    // method for manager
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;