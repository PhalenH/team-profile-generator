// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, em

const Employee = require("../team/employee");

class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
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
