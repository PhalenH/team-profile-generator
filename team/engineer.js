// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const Employee = require("../team/employee");

class Engineer extends Employee {
    /**
     * 
     * @param {string} name 
     * @param {number} id 
     * @param {string} email 
     * @param {string} gitHub 
     */
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
