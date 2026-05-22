# Middleware
- Middleware is a function that runs between the request and the response in a server application.
- Middleware checks, changes, or handles the request before it reaches the main route logic.
- Client Request → Middleware → Route → Response


## What is Middleware?
- Middleware run before the route handler
- Middleware must call next() to continue to the next function.
- If middleware does not call next(), the request will hang.
- There are some built-in, custom, third-party middleware etc.

# What middleware can do
- Check authentication/login
- Parse JSON data
- Handle errors
- Log requests
- Validate data


## Types of Middleware
### (1) Built-in Middleware
```bash
 app.use(express.json());
```

#### Explanation
- express.json() is a built-in middleware provided by Express.
- It parses incoming JSON data from the request body.


# Example with JSON middleware
- app.use(express.json());
- This middleware converts incoming JSON data into a JavaScript object.
- Without it:req.body // undefined
- With it: req.body // { name: "Ankit" }

### (2) Third-Party Middleware
```bash
  app.use(cors());
```

#### Explanation
- cors() is a third-party middleware.
- It allows cross-origin requests.

### (3) Custom Middleware
```bash
app.use((req, res, next) => {
  console.log("custom middleware");
  next();
});
```

#### Explanation
- This is a user-created middleware.
- next() passes control to the next middleware or route handler.


## Example Complete Code
```bash
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Third-party middleware
app.use(cors());

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
  console.log("Custom Middleware Running");
  next();
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
```


# Think of middleware like a security guard at a company:
- User enters the building (request)
- Security checks ID (middleware)
- Then user goes to the employee/room (route handler)


### In Node.js + Express.js, middleware is one of the most important concepts because almost every request passes through middleware first.