import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "07gil10vAn02@",
    database: "crud"
});