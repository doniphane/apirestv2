import mysql from "mysql"
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.dbname);
 export let connection = mysql.createConnection({
   host: process.env.hostname,
   user: process.env.dbnameuser,
   password: process.env.dbnamepassword,
   database: process.env.dbname,
   socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
 });

