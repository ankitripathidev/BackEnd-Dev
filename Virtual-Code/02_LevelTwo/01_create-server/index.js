// By default nodejs me hota hai http module
import http from "http";

const port = 3000;

// create server using the built-in http module.
const serverBanaliya = http.createServer((req, res) => {
  res.end("Hello, This is my first server");
});

serverBanaliya.listen(port, () => {
  console.log(`server is running at ${port} ..`);
});
