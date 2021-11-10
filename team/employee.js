// contructor for employee
class Employee {
    /**
     * 
     * @param {string} name 
     * @param {number} id 
     * @param {string} email 
     */
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // returns name from input
  getName() {
    return this.name;
  }
  // returns ID from input
  getId() {
    return this.id;
  }
  // returns email from input
  getEmail() {
    return this.email;
  }
  // manually make role employee
  getRole() {
    return "Employee";
  }
}

// exports contructor
module.exports = Employee;
