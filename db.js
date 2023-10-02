import mysql from "mysql"

 export let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "restful_api",
  socket : '/Applications/MAMP/tmp/mysql/mysql.sock'
});

