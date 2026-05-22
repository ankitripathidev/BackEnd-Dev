import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.json({ name: "ankit", address: "gudgaon", age: 25 });
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`server running at ${port} ...`);
});
