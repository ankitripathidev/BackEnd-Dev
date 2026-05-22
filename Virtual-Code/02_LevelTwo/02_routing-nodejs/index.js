import http from "http";

const port = 3000;

// server created
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Page");
  } else if (req.url === "/about") {
    res.end("Welcome to About Page");
  } else if (req.url === "/contact") {
    res.end("Welcome to Contact Page");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`server is running at ${port} ...`);
});
