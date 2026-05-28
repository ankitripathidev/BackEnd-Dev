// By default nodejs me hota hai http module
import http from "http";

const port = 3000;

// create server using built-in http module
const server = http.createServer((req, res) => {
  res.end("Hello, This is my first server");
});

server.listen(port, () => {
  console.log(`server is running at ${port} ..`);
});
