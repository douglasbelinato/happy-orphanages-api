import express from "express";

const app = express();

// Configure Express to work with json sent in request body
app.use(express.json());

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333);
