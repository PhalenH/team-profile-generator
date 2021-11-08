const Employee = require("./team/employee");
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");
const inquirer = require("inquirer");
const fs = require("fs");

function teamMember() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter team member name",
      name: "name",
      validate: function (input) {
        if (input) {
          return true;
        } else {
          console.log("Please enter a team member name!");
          return false;
        }
      },
    },
  ]);
}
