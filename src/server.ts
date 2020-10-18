import express from "express";
import "express-async-errors";

import "./database/connection";
import routes from "./routes";
import path from "path";

const app = express();

// Configure Express to work with json sent in request body
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(3333);
