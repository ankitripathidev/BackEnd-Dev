import express from "express";

const app = express();
const port = 8000;

// Built-In Middleware
app.use(express.json());

let users = [
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

app.post("/user", (req, res) => {
  res.json(users);
});

app.post("/user/:id", (req, res) => {
  let id = req.params.id;

  let existingUser = users.find((myuser) => myuser.id == id);
  console.log(existingUser);

  if (!existingUser) {
    res.send("user doesn't exists");
  }

  res.json(existingUser);
});

app.listen(port, () => {
  console.log(`server running at ${port} ...`);
});
