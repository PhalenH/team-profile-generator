// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, em

const Employee = require("../team/employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getGitHub() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
