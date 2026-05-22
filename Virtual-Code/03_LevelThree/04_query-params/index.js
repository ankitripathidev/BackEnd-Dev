import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

// Example-1 (get method)
app.get("/search", (req, res) => {
  const query = req.query;
  console.log(query);
  
  res.json(query);
  // res.send(query);
});

// Example.2 (post method)
app.post("/about", (req, res) => {
  console.log(req.query);
  
  const name = req.query.name;
  const age = req.query.age;
  res.json(`Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`server running at ${port} ...`);
});
