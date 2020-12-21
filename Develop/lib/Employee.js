// TODO: Write code to define and export the Employee class
class Employee {
    // all key and value pairs
    constructor(name, id, email) {

        this.name = name;
        this.role = "Employee";
        this.id = id;
        this.email = email;
        
    }
    // All methods used on the each job
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

}

module.exports = Employee;