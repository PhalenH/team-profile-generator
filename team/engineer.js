// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

class Engineer {
  constructor(name, id, email, gitHub) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
  }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
  getGitHub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
