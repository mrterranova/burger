### Schema

CREATE DATABASE parties_db;

USE parties_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);
