import mysql from "mysql2/promise";

// TODO: Añadir la conexión a MySQL

const dataConnection = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "test"
}

try{
    var connection = await mysql.createConnection(dataConnection);
    console.log("Conexión a MySQL correcta!");
}
catch(error){
    console.log(error);
}
export default connection;