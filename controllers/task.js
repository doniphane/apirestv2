 import { connection } from "../db.js";
 export function getAllTasks() {
  const sqlselection = "SELECT * FROM tasks";
  connection.query(sqlselection, (err, results) => {
    if (err) {
      console.error("Erreur de recherche dans la base de donée:", err);
      return;
    }

    console.log("liste des task:");
    console.log(results);

    // connection.end();
  });
}

export function getTaskFromIdUser() {
  const sqlselection = "SELECT * FROM USER";
  connection.query(sqlselection, (err, results) => {
    if (err) {
      console.error("Erreur de recherche dans la base de donée:", err);
      return;
    }

    console.log("liste des USER:");
    console.log(results);

    connection.end();
  });
}
