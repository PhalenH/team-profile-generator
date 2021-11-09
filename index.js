const Employee = require("./team/employee");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");
const inquirer = require("inquirer");
const fs = require("fs");

// should this be a const? or has to be let since I'm adding stuff
let fullTeam = [];

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team manager's name?",
        name: "name",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your team manager's ID?",
        name: "id",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your team manager's email?",
        name: "email",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your team manager's office number?",
        name: "officeNumber",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      const managerName = managerData.name;
      const managerId = managerData.id;
      const managerEmail = managerData.email;
      const managerOfficeNumber = managerData.officeNumber;
      let manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );
      console.log(manager);
      fullTeam.push(manager);
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's name?",
        name: "name",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee's ID?",
        name: "id",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your employee's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee's email?",
        name: "email",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your employee's email!");
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Select from the following options to build your team",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((memberData) => {
      if (memberData.role === "Engineer") {
        addEngineer(memberData);
      } else if (memberData.role === "Intern") {
        addIntern(memberData);
      }
    });
}

addEmployee();
// the memberData can be named whatever here because it's being sent on line 134 (addEngineer(memberData)), but for organization purposes better to keep it the same
function addEngineer(memberData) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's GitHub username?",
        name: "gitHub",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your employee's GitHub username!");
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Do you want to add another team member?",
        name: "add",
        choices: ["Yes", "No"],
      },
    ])
    .then((engineerData) => {
      const engineerGitHub = engineerData.gitHub;
      const engineerName = memberData.name;
      const engineerId = memberData.id;
      const engineerEmail = memberData.email;
      let engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGitHub
      );
      console.log(engineer);
      fullTeam.push(engineer);
      if (engineerData.add === "Yes") {
        addEmployee();
      } else if (engineerData.add === "No") {
        completeTeam();
      }
    });
}

function addIntern(memberData) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your employee's school?",
        name: "school",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your employee's school!");
            return false;
          }
        },
      },
      {
        type: "list",
        message: "Do you want to add another team member?",
        name: "add",
        choices: ["Yes", "No"],
      },
    ])
    .then((internData) => {
      const internSchool = internData.school;
      const internName = memberData.name;
      const internId = memberData.id;
      const internEmail = memberData.email;
      let intern = new Intern(internName, internId, internEmail, internSchool);
      console.log(intern);
      fullTeam.push(intern);
      if (internData.add === "Yes") {
        addEmployee();
      } else if (internData.add === "No") {
        completeTeam();
      }
    });
}

function completeTeam() {

}

// function addEngineer() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is your engineer's name?",
//           name: "name",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your engineer's name!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your engineer's ID?",
//           name: "id",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your engineer's ID!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your engineer's email?",
//           name: "email",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your engineer's email!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your engineer's GitHub username?",
//           name: "gitHub",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your engineer's GitHub username!");
//               return false;
//             }
//           },
//         },
//       ])
//       .then();
//   }

//   function addIntern() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is your team intern's name?",
//           name: "name",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your intern's name!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your intern's ID?",
//           name: "id",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your intern's ID!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your intern's email?",
//           name: "email",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your intern's email!");
//               return false;
//             }
//           },
//         },
//         {
//           type: "input",
//           message: "What is your intern's school?",
//           name: "school",
//           validate: function (input) {
//             if (input) {
//               return true;
//             } else {
//               console.log("Please enter your intern's school!");
//               return false;
//             }
//           },
//         },
//       ])
//       .then();
//   }

//   function addMembers() {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           message: "Select from the following options to build your team",
//           name: "addingMembers",
//           choices: ["Add an Engineer", "Add an Intern", "Done"],
//         },
//       ])
//       .then();
//   }
