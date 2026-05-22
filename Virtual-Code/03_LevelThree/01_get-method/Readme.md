## Express.js

- Express.js is the most popular framework for Node.js
- It helps developers build backend applications and APIs easily.
- Express Provides shortcuts and tools to make backend code cleaner and easier to organize.

## Why Use Express.js

- #### Instead of writing everything manually using the Node.js http module
```
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(3000);
```

- #### Express makes it simpler
```
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

## Advantages of Express.js

- Cleaner syntax
- Faster development
- Easy routing
- Middleware support
- Better project structure
- Easier API creation
- Huge ecosystem and community support

## Install Express.js
- npm install express