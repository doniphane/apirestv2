import express from "express";
import axios from "axios";
import { connection } from "./db.js";
import {
  getAllTasks,
  getTaskFromIdUser,
  gettaskByuser,
  editAllTaskByNameUser,
  addTaskToUser,
} from "./controllers/task.js";

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("La base de donnée est connectée!");
});

// Serveur web express
const app = express();
const port = 3000;

// Configurer le moteur de vue EJS
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime");
    const animeData = response.data.data;

    // Altération du JSON pour ajouter le champ "regarder oui ou non "
    animeData.forEach((anime) => {
      // j'utlise la fonction mathrandom pour choisie les aime regarde ou pas
      anime.regarder = Math.random() > 0.5; // Si le nombre donner par le mathrandom et > a 0.5 anime et regarder et si < a 0,5 animé par regarder 
    });

    res.render("animeCards", { animes: animeData });
  } catch (error) {
    console.error("Erreur:", error);
    res.status(500).send("j'ai pas put récuperer les anime de l'api");
  }
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
