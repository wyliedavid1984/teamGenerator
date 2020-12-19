// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(role, name, id, email, office) {
        super(role, name, id, email);
        this.office = office;
    }
}

module.export = Manager;