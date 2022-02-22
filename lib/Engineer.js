const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, position, github) {
        super(name, id, email, position);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;