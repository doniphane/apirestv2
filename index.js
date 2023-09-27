import mysql from 'mysql';

let connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'restful_api',
  });
   
  connection.connect((err)=>{
    if(err) throw err
    console.log("ok")
    getAllTasks();
    getTaskFromIdUser();
 

  });

  function getAllTasks() {
    const sqlselection = "SELECT * FROM tasks";
    connection.query(sqlselection, (err, results) => {
        if(err) {
            console.error("Erreur de recherche dans la base de donée:", err);
            return;
        }

        console.log("liste des task:");
        console.log(results);

      
        // connection.end();
    });
}

function  getTaskFromIdUser() {
  const sqlselection = "SELECT * FROM USER";
  connection.query(sqlselection, (err, results) => {
      if(err) {
          console.error("Erreur de recherche dans la base de donée:", err);
          return;
      }

      console.log("liste des USER:");
      console.log(results);

    
      connection.end();
  });
}





