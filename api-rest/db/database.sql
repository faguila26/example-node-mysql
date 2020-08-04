CREATE DATABASE IF NOT EXISTS classroom;

USE classroom;

CREATE TABLE student (
  id INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(id),
  name VARCHAR(45) DEFAULT NULL,
  rut VARCHAR(10) DEFAULT NULL
);

DESCRIBE student;

INSERT INTO student values 
  (1, 'Felipe Aguila', '18493060-9'),
  (2, 'Daniel Collao', '19542976-7'),
  (3, 'Karen Perez', '22785279-2'),
  (4, 'Jerson Barrientos', '20431683-k'),
  (5, 'Bastian Garcia', '17427412-0');

SELECT * FROM student;