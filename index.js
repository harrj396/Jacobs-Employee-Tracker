const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
  },
  console.log(`Connected to employee_db`)
);

const firstQuestion = [
  { type: "list",
  message: "Please select an option",
  choices: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department"],
  name: "landingPage"
},
  console.log('you made it this'),
  (function (response) {
  switch(response.action) {
    case 'View All Employees' : employeeView();
      break

    // case 'Add Employee' : employeeAdd();
    //   break;
  // this currently breaks node index,js for these functions being unknown 
    // case 'View All Roles' : roleView();
    //   break;
    
    // case '"Add Role' : roleAdd();
    //   break

    // case 'View All Departments' : departmentView();
    //   break;

    // case 'Add Department' : departmentAdd();
    //   break;
  }
}),


function employeeView() {
  db.query(`SELECT * FROM employee`, function(err, data){
    if (err) throw err;
    console.log('Every employee');
    console.table(data);
    firstQuestion()
  })
},

function employeeAdd() {
  inquirer
  .prompt([
    {
      message: 'Enter the employees first name',
      name: 'firstName'
    },

    {
      message: 'Enter the employees last name',
      name: 'lastName'
    }
  ])

  // .then((function (response) {
  //   db.query(`INSERT INTO employee (firstName, lastName) VALUES (`${response.first_name}`, `${response.last_name}`, response, function )
  //   )
  // }))
}
]
function init() {
  inquirer
      .prompt(firstQuestion);

  }

  init();