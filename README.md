# Team Profile Generator

## Description: 
The purpose was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. The application uses tests to ensure that the code is functioning. It uses class constructors which are exported to the files that will use the information as well as utilizes file system and inquirer package to prompt a user for questions and then the ability to write to a file. The main javascript file contains functions which uses inquirer with questions related to team roles and a final function which takes in the information obtained from the prompts and uses them to generate an HTML file. 

- WHEN I am prompted for my team members and their information
    - THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
    - THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
    - THEN that GitHub profile opens in a new tab
- WHEN I start the application
    - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
    - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
    - THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
    - THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
    - THEN I exit the application, and the HTML is generated


## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Test Instructions](#Test-Instructions)
- [Questions](#Questions)

## Video:
[Team Profile Generator Walkthrough](https://youtu.be/0v7I4lS20pQ)

## Installation: 
- Download or clone the repo from GitHub

## Usage: 
Once downloaded
- A user will open a new terminal
- Type in "npm i" to install dependencies
- In the same terminal or a new terminal: Type in "node index.js"
- This will start the prompts
- Answer each prompt and once finished a new HTML file will be generated in the generated-profile folder

## Contributing: 
  There a no plans for public contribution at this time.

## Test-Instructions: 
- A user can open the terminal and run npm test, which will run the tests for this application.

## Questions
- If you have any questions, email me at pchaze@yahoo.com
- Checkout my GitHub profile [here](https://github.com/PhalenH)

