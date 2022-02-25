const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML.js");

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamArray = [];

//employee prompts

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of this employee?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter a name.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is this employee's ID number?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log ("Please enter an ID.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log ("Please enter an email address.");
          return false;
        }
      }
    },
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "office",
      message: "What is the office number of your Manager?",
      when: ({ role }) => {
        if (role === "Manager") {
          return true;
        } else {
          return false;
        }
      },
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log ("Please enter an office number.");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer's github account?",
        when: ({ role }) => {
          if (role === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log ("Please enter a github username.");
            return false;
          }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school did your intern attend?",
        when: ({ role }) => {
          if (role === "Intern") {
            return true;
          } else {
            return false;
          }
        },
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log ("Please enter a school or university.");
            return false;
          }
        }
    },
    {
      type: 'confirm',
      name: 'addAnotherEmployee',
      message: 'Would you like add another employee?'
    }
  ])
  .then( employeeInfo => {
    
    let { name, id, email, role, office, github, school, addAnotherEmployee } = employeeInfo;
    let employee;
    
    if (role === "Manager") {
      employee = new Manager (name, id, email, role, office);
      console.log(employee);

    } else if (role === "Engineer") {
      employee = new Engineer (name, id, email, role, github);
      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern (name, id, email, role, school);
      console.log(employee);
      
    }
    teamArray.push(employee);

    if (addAnotherEmployee) {
      addEmployee(teamArray);
    } else {
      return teamArray;
    }
    
  })
};

writeToFile = (data) => {
  fs.writeFile("./dist/index.html", (data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Team Page successfully generated!");
    }
  })
};

init = () => {
  addEmployee()
  .then((teamArray) => {
    return generateTeam(teamArray);
  })
  .then((data) => {
    return writeToFile(data);
  })
  .catch((err) => {
    console.log(err);
  });
};

init();


