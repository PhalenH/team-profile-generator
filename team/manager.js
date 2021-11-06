// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
