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

export function gettaskByuser() {
    // sélectionner la base puis dans tâche joindre avec user et je veux que le user.id soit égale au task.owner /
    const select = "SELECT * FROM tasks INNER JOIN User ON User.id = tasks.owner";
    connection.query(select, (err, result) => {
        if (err) {
            console.error("erreur", err);
            return;
        }
        console.log('liste des tâches par utilisateur ');
        console.log(result);
    });
}

// Récupérer toutes les tâches d'un propriétaire
export function getAllTasksByOwner(ownerId) {
  const sqlSelect = "SELECT * FROM tasks WHERE ownerId = ?";
  
  connection.query(sqlSelect, [ownerId], (err, results) => {
    if (err) {
      console.error("Erreur lors de la recherche dans la base de données:", err);
      return;
    }

    console.log(`Liste des tâches pour l'ID du propriétaire: ${ownerId}`);
    console.log(results);
  });
}




export function editAllTaskByNameUser(id) {
    // Requête SQL pour récupérer toutes les tâches d'un propriétaire en fonction de son ID
    const selectQuery = "SELECT * FROM tasks WHERE owner = 2";

    // Exécute la requête avec l'ID du propriétaire en tant que paramètre
    connection.query(selectQuery, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des tâches de l'utilisateur", err);
            return;
        }

        console.log("Tâches de l'utilisateur avec l'ID ${id = 2}:");
        console.log(result);
    }
)}

//Créer une fonction « addTaskFromNameUser» qui prend un nom d’utilisateur et une
//description de tache en paramètre et qui ajoute une nouvel tache pour un user en particulier.


// Fonction pour ajouter une tâche à un utilisateur par propriétaire
export function addTaskToUser( tasksid, tasksdescription, taskscomplete, tasksowner,) {
    // Requête SQL d'INSERT pour ajouter une tâche avec le propriétaire spécifié
    const insertQuery = "INSERT INTO tasks (id, description, complete, owner) VALUES (?, ?, ?,?)";

    // Exécute la requête d'INSERT avec les paramètres appropriés
    connection.query(
      insertQuery,
      [tasksid, tasksdescription, taskscomplete, tasksowner, ],
      (err, result) => {
        if (err) {
          console.error(
            "Erreur lors de l'ajout de la tâche à l'utilisateur",
            err
          );
          return;
        }

        console.log("Tâche ajoutée à l'utilisateur avec l'ID ${ownerId}:");
        console.log(result);
      }
    );
}