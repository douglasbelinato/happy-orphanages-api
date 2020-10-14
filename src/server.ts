import express from "express";
import "./database/connection";
import routes from "./routes";

const app = express();

// Configure Express to work with json sent in request body
app.use(express.json());
app.use(routes);

app.listen(3333);
