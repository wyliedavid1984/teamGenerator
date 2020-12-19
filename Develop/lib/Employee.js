// TODO: Write code to define and export the Employee class
class Employee{

    constructor (name, id, email, office, school, gitHub) {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.school = school;
        this.gitHub = gitHub;
    }

    getRole () {
        return "Employee";
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOffice() {
        return this.office;
    }
    getSchool() {
        return this.school;
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Employee;