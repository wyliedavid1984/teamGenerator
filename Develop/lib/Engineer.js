// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(role, name, id, email, gitHub) {
        super(role, name, id, email, gitHub);
    }
    getRole(){
        return "Engineer";
    }

} 

module.exports = Engineer;