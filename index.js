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
  (function (response) {
  switch(response.action) {
    case 'View All Employees' : employeeView();
      break

    case 'Add Employee' : employeeAdd();
       break;

    case 'View All Roles' : roleView();
      break;
    
    case '"Add Role' : roleAdd();
      break

    case 'View All Departments' : departmentView();
      break;

    case 'Add Department' : departmentAdd();
      break;
  }
}),




function departmentView() {
  db.query(`SELECT * FROM department`, function(err, data){
    if (err) throw err;
    console.log('Every department');
    console.table(data);
    firstQuestion()
  })
},

function departmentAdd() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the name of the department',
      name: 'addDepartmentName'
    }
  ])
  .then((function (response) {
    db.query(`INSERT INTO department (addDepartmentName) VALUES ('${response.addDepartmentName}')`, function(err,data) {
      if (err) throw err;
      console.log ('Added Department');
      addDepartmentName.choices.push(response.addDepartmentName);
      firstQuestion()
    })
  }))
}

]
function init() {
  inquirer
      .prompt(firstQuestion);

  }

  init();