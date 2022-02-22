const inquirer = require("inquirer");
const fs = require("fs");

const teamArray = [];

//employee prompts

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of this employee?",
    },
    {
      type: "input",
      name: "id",
      message: "What is this employee's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
    },
    {
      type: "list",
      name: "position",
      message: "What is this employee's position?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "office",
      message: "What is the office number of your Manager?",
      when: ({ position }) => {
        if (position === "Manager") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's github account?",
        when: ({ position }) => {
          if (position === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
    },
    {
        type: "input",
        name: "school",
        message: "What school did your intern attend?",
        when: ({ position }) => {
          if (position === "Intern") {
            return true;
          } else {
            return false;
          }
        },
    },
  ]);
};

addEmployee();
