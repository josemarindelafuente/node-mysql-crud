const mysql = require("mysql");

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    database: "0_node_mysql"
});

conection.connect((error)=>{
 if(error) {
    console.error(error);
    return;
 } else {
    console.log("Conectado a Mysql");
 }
});

module.exports = conection;