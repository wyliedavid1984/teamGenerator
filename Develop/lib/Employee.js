// TODO: Write code to define and export the Employee class
class Employee{

    constructor (role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email
    }

    getRole () {
        return console.log(`My Role is ${this.role}!`);
    }

    printInfo() {
        console.log(`role:${this.role}, name:${this.name}, id:${this.id}, email:${this.email}`)
    }

}

module.export = Employee;