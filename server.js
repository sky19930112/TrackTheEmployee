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

// start sql
connection.connect((err) => {
    if (err) throw err;
    start()
});

function start() {
    inquirer.prompt({
            name: 'search',
            type: 'list',
            message: 'what you gonna do?',
            choices: [
                    'View departments',
                    'View roles',
                    'View employees',
                    'Add department',
                    'Add role',
                    'Add employee',
                    'Update employee role'
                    ]
            })
            .then(function (answer) {
                switch (answer.action) {
                    case 'View departments':
                        viewDepartments();
                        break;
                    case 'View roles':
                        viewRoles();
                        break;
                    case 'View employees':
                        viewEmployees();
                        break;
                    case 'Add department':
                        addDepartment();
                        break;
                    case 'Add role':
                        addRole();
                        break;
                    case 'Add employee':
                        addEmployee();
                        break;
                    case 'Update employee role':
                        updateRole();
                        break;
                    default:
                        break;
                }
        })
};

function viewDepartments() {
    var query = 'SELECT * FROM departments';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('Departments:', res);
        options();
    })
};

function viewRoles() {
    var query = 'SELECT * FROM roles';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.table('Roles:', res);
        options();
    })
};

function viewEmployees() {
    var query = 'SELECT * FROM employees';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Employees:', res); 
        options();
    })
};