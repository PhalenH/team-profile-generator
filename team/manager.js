// contructor for Manager
// import employee contructor
const Employee = require("../team/employee");

class Manager extends Employee {
    /**
     * 
     * @param {string} name 
     * @param {number} id 
     * @param {string} email 
     * @param {number} officeNumber 
     */
  constructor(name, id, email, officeNumber) {
    // calls employee contructor for name/id/email
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // returns office number from input
  getOfficeNumber() {
    return this.officeNumber;
  }
  // manually make role manager
  getRole() {
    return "Manager";
  }
}

// exports contructor
module.exports = Manager;
