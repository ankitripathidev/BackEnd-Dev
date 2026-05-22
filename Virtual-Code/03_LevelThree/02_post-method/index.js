import express from "express";

const app = express();
const port = 3000;

// Built-In Middleware
app.use(express.json());


// get method
app.get("/", (req, res) => {
  res.send("Home Page...");
});


const users = [
  {
    id: 1,
    name: "Ankit Sharma",
    position: "Frontend Developer",
    department: "Engineering",
    salary: 55000,
  },
  {
    id: 2,
    name: "Priya Verma",
    position: "Backend Developer",
    department: "Engineering",
    salary: 62000,
  },
  {
    id: 3,
    name: "Rahul Singh",
    position: "UI/UX Designer",
    department: "Design",
    salary: 48000,
  },
];

// post method
app.post("/", (req, res) => {
  let body = req.body;
  console.log(body);
  res.send(body);
});

app.post("/user", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`server running at ${port} ...`);
});
