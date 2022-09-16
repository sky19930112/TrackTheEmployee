DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  ID INT NOT NULL AUTO_INCREMENT,
  department VARCHAR(99) NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE roles (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(99) NULL,
  PRIMARY KEY (ID),
  department VARCHAR(99) NULL,
  salary INT NULL
);

CREATE TABLE employees (
  ID INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID),
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  title VARCHAR(99) NULL,
  department VARCHAR(99) NULL,
  salary INT NULL
  manager_ID INT NULL REFERENCES employee(ID)
);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;
