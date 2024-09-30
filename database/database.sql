drop schema if exists test;
create database test;
use test;

create table users (
    idUser int primary key,
    userName varchar(100),
    email varchar(255),
    password varchar(255),
    createAt datatime defaul time_current
);