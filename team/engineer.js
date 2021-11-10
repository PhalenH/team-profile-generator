// contructor for Engineer
// import employee contructor
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
      // calls employee contructor for name/id/email
    super(name, id, email);
    this.gitHub = gitHub;
  }
  // returns gitHub from input
  getGitHub() {
    return this.gitHub;
  }
  // manually make role engineer
  getRole() {
    return "Engineer";
  }
}

// exports contructor
module.exports = Engineer;
