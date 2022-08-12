import express, { response } from "express";
import { routes } from "./routes/tasks.routes";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/tasks", routes);

app.listen(3333, () => console.log("Server is running!"));
