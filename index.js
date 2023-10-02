
import { connection } from "./db.js";
import {
  getAllTasks,
  getTaskFromIdUser,
  gettaskByuser,
  editAllTaskByNameUser,
  addTaskToUser,
} from "./controllers/task.js";



connection.connect((err) => {
  if (err) throw err;
  console.log("ok");
});
getAllTasks();
getTaskFromIdUser();
gettaskByuser();
editAllTaskByNameUser();
addTaskToUser(3,"repos",1,1);


