import mysql from "mysql2/promise";

const dataConnection = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "test"
}

const URLConnection = `
    mysql://${dataConnection.user}:${dataConnection.password}@${dataConnection.host}:${dataConnection.port}/${dataConnection.database}
`;
try{
    var connetion = await mysql.createConnection(URLConnection);
    console.log("Conexión a MySQL correcta!");
}catch (error){
    console.log(error);
}

export default connetion;