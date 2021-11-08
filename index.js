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
        name: "office",
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
    .then();
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your engineer's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "gitHub",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your engineer's GitHub username!");
            return false;
          }
        },
      },
    ])
    .then();
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team intern's name?",
        name: "name",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "id",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your intern's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
        validate: function (input) {
          if (input) {
            return true;
          } else {
            console.log("Please enter your intern's school!");
            return false;
          }
        },
      },
    ])
    .then();
}

function addMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Select from the following options to build your team",
          name: "addingMembers",
          choices: ["Add an Engineer", "Add an Intern", "Done"],
        },
      ])
      .then();
  }


// 