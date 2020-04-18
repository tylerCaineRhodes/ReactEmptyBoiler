DROP DATABASE IF EXISTS todolist;

CREATE DATABASE todolist;
USE todolist;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL
);

insert into tasks (task) values ('make todolist');
insert into tasks (task) values ('learn react');
insert into tasks (task) values ('get paid');