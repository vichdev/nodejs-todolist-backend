import express, { response } from "express";
import { routes } from "./routes/tasks.routes";

const app = express();

app.use(express.json());

app.use("/tasks", routes);

app.listen(3333, () => console.log("Server is running!"));
