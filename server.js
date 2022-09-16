const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

// creates connection to sql database
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: '1234',
    database: 'employee_db'
})

