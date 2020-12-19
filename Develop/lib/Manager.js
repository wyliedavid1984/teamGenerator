// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
        this.role = "Manager";
    }
}

const e = new Manager('D', 1, "D@d.net", 100)

console.log(e)

module.exports = Manager;