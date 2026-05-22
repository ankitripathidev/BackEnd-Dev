const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

// allow cross-origin
app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "ankit", age: 26, address: "new-delhi" });
});

app.listen(port, () => {
  console.log(`server running at ${port} ..`);
});
