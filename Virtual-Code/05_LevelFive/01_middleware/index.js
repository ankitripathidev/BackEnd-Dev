import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// (1) Built-in Middleware
app.use(express.json());

// (2) Third Party Middleware
app.use(cors({origin: "http://localhost:5173"}));


// (3) Custom Middleware

app.get("/", (req, res) => {
  res.json({ name: "ankit", addresss: "delhi" });
});


app.post("/about", (req, res) => {
  console.log(req.body);
  res.send(req.body)
  // res.send({ success: true });
});

app.listen(port, () => {
  console.log(`server running at ${port}...`);
});
