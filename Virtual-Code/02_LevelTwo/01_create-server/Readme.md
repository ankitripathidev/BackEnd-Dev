## Level-2

- A Server is a computer or system that provides services, resources or data to other computers, called Clients, over a network.

## Example

- When you open a website, your browser ( the Client ) sends a request to a server, and the server sends back the website data so you can see it.

## First Nodejs Project command

- npm init
- npm init -y (yes to all)

###


```
Important Note About import

Your code uses:

import http from "http";

This works only if your project uses ES Modules.

Add this in package.json:

{
  "type": "module"
}

Otherwise use CommonJS syntax:

const http = require("http");
```
