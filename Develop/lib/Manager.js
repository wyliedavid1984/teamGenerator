// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = "Manager";
    }

}



module.exports = Manager;