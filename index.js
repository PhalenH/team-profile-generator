// getting classes and packages
const Manager = require("./team/manager");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");
const inquirer = require("inquirer");
const fs = require("fs");

// array to be filled with team members
let fullTeam = [];

// first function called, start manager prompt and leads into employee prompts
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
      let newEmployee = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );
      fullTeam.push(newEmployee);
    //   addCard(newEmployee);
      addEmployee();
    });
}

// employee prompt which leads into intern/engineer prompt
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your next employee's name?",
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
        message: "What role is does your employee have",
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

// the memberData can be named whatever here because it's being sent on line 134 (addEngineer(memberData)), but for organization purposes better to keep it the same
// engineer prompt which will trigger employee prompt again or the completeTeam function
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
      let newEmployee = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
      fullTeam.push(newEmployee);
    //   addCard(newEmployee);
      if (engineerData.add === "Yes") {
        addEmployee();
      } else {
        completeTeam();
      }
    });
}

// intern prompt which will trigger employee prompt again or the completeTeam function
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
        message: "Do you want to add another employee?",
        name: "add",
        choices: ["Yes", "No"],
      },
    ])
    .then((internData) => {
      const internSchool = internData.school;
      const internName = memberData.name;
      const internId = memberData.id;
      const internEmail = memberData.email;
      let newEmployee = new Intern(internName, internId, internEmail, internSchool);
      fullTeam.push(newEmployee);
    //   addCard(newEmployee);
      if (internData.add === "Yes") {
        addEmployee();
      } else {
        completeTeam();
      }
    });
}

// function addCard(teamMember) {
//     const name = teamMember.getName();
//     const role = teamMember.getRole();
//     const id = teamMember.getId();
//     const email = teamMember.getEmail();
//     console.log(name, role, id, email)
// }

// function that contains 3 sections of an HTML file, an array which each section is pushed to and once completed is joined together to form full HTML file
function completeTeam() {
    const htmlLayout = []

    // starting HTML code that is always the same
    const startHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./generated.css" /> 
        <title>Team Profile</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-light" id="nav-border">
            <div class="container-fluid">
            <h1 class="navbar-brand m-4 w-100 text-center" id="team-name">The A-Team </h1>
            </div>
          </nav>
    
          <section class="row justify-content-around card-container">`
    htmlLayout.push(startHtml)

    for(let i = 0; i < fullTeam.length; i++) {
        let employeeCard = `
        <div class="card col-12 col-md-6 col-lg-4 m-5 full-card" style="width: 18rem;">
            <div class="member-header px-2 my-3">
                <h2 class="card-title">${fullTeam[i].getName()}</h2>
                <h3 class="card-subtitle mt-3 mb-2" id="h3-text">-${fullTeam[i].getRole()}</h3>
            </div>    
            <div class="card my-3">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${fullTeam[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${fullTeam[i].getEmail()}">${fullTeam[i].email}</a></li>`

        if (fullTeam[i].getRole() === "Manager") {
            employeeCard += `<li class="list-group-item">Office Number: ${fullTeam[i].getOfficeNumber()}</li>`
        } else if (fullTeam[i].getRole() === "Engineer") {
            employeeCard += `<li class="list-group-item">GitHub: <a href="https://github.com/${fullTeam[i].getGitHub()}">${fullTeam[i].getGitHub()}</a></li>`
        } else {
            employeeCard += `<li class="list-group-item">School: ${fullTeam[i].getSchool()}</li>`
        }

        employeeCard += `
                </ul>
            </div>
        </div>
        `
     htmlLayout.push(employeeCard)
    }
    // Ending HTML code that is always the same
    const endHtml = `</section>
    </body>
    </html>`

    htmlLayout.push(endHtml)

    // created new HTML file with content being the joined array of HTML sections, checks for err
    fs.writeFile("./generated-profile/profile.html", htmlLayout.join(''), function(err){
        if(err) {
            console.log(err);
        };
    });
}

// Calls function to initiate beginning of prompts
addManager();



    // for(let i = 0; i < fullTeam.length; i++) {
    //     console.log(fullTeam[i].getName());
    //     console.log(fullTeam[i].getRole());
    //     console.log(fullTeam[i].getId());
    //     console.log(fullTeam[i].getEmail());
    // }


    // if (fullTeam[i].getOfficeNumber()) {
    //     employeeCard += `<li class="list-group-item">Office Number: ${fullTeam[i].getOfficeNumber()}</li>`
    // } else if (fullTeam[i].getGitHub()) {
    //     employeeCard += `<li class="list-group-item">GitHub: <a href="https://github.com/${fullTeam[i].getGitHub()}">${fullTeam[i].getGitHub()}</a></li>`
    // } else {
    //     employeeCard += `<li class="list-group-item">School: ${fullTeam[i].getSchool()}</li>`
    // }

    // I was getting either fullTeam[i].getOfficeNumber() or fullTeam[i].getGitHub() is not a function error, why is that?

