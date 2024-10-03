drop schema if exists test;
create database test;
use test;

-- TODO: Crear la tabla de productos
create table products (
    idProduct varchar(255) primary key,
    productName varchar(100),
    price decimal(10, 2),
    stock int,
    createdAt datetime default current_timestamp
);

insert into products (idProduct, productName, price, stock) values ('1', 'Laptop', 999.99, 10);
insert into products (idProduct, productName, price, stock) values ('2', 'Smartphone', 499.99, 25);
insert into products (idProduct, productName, price, stock) values ('3', 'Tablet', 299.99, 15);
insert into products (idProduct, productName, price, stock) values ('4', 'Headphones', 79.99, 50);
insert into products (idProduct, productName, price, stock) values ('5', 'Smartwatch', 199.99, 30);

select idProduct from products where idProduct = '10';