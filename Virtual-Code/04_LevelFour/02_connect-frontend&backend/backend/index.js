import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Built-In Middleware
app.use(express.json());

// allow cross-origin post request from this url
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.json({ name: "ankit", age: 25, address: "new-delhi" });
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`server running at ${port} ...`);
});
