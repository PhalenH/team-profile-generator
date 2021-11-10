// contructor for Intern
// import employee contructor
const Employee = require("../team/employee");

class Intern extends Employee {
    /**
     * 
     * @param {string} name 
     * @param {number} id 
     * @param {string} email 
     * @param {string} school 
     */
  constructor(name, id, email, school) {
      // calls employee contructor for name/id/email
    super(name, id, email);
    this.school = school;
  }
  // returns school from input
  getSchool() {
    return this.school;
  }
  // manually make role intern
  getRole() {
    return "Intern";
  }
}

// exports contructor
module.exports = Intern;
