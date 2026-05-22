import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
let password ="ankit@12345"

// (1) Built-in Middleware
app.use(express.json());

// (2) Third Party Middleware
app.use(cors({ origin: "http://localhost:5173" }));

// (3) Custom Middleware
app.use((req, res, next)=>{
  if(req.body.pass!=password){
    res.send("password does not match")
  }
  next()
})

// get-method
app.get("/", (req, res) => {
  res.json({ name: "ankit", addresss: "delhi" });
});

// post-method
app.post("/about", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`server running at ${port}...`);
});
