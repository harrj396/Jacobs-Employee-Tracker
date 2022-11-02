const express = require('express');
// Import and require mysql2
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
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootroot',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const firstQuestion = [ 
  { type: "list",
  message: "Please select an option",
  choice: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department"],
  name: "landingPage"
}
]

function init() {
  inquirer
      .prompt(firstQuestion);

  }