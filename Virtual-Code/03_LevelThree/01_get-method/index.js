// Importing express package
import express from "express";

// creates an express application.
const app = express();

// Defines the Port number
const port = 3000;

// HTTP Method  app.[http method](route, callback)
app.get("/", (req, res) => {
  // res.send("Welcome to Home Page");
  // res.send("<h1>Home Page</h1>");
  res.json({ name: "Ankit", age: "26" });
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

app.listen(port, () => {
  console.log(`server running at ${port}...`);
});
