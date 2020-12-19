// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(role, name, id, email, office) {
        super(role, name, id, email);
        this.office = office;
    }
}

const m1 = new Manager(manager, "Nate", 1, "Nate@io.com", 100)
console.log(m1)

module.export = Manager;