
import { connection } from "./db.js";
import {getAllTasks,getTaskFromIdUser} from './controllers/task.js'



connection.connect((err) => {
  if (err) throw err;
  console.log("ok");
});
getAllTasks();
getTaskFromIdUser();