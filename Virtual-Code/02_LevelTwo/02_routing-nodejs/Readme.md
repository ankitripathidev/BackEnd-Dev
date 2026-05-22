## Routing In Node JS

- Routing is the process of defining how an application responds to different client requests based on the URL (or Route).
- Routing means deciding which code should run for a specific URL and HTTP method.

## Types of Routing

#### (1) Static Routing

```bash
   app.get("/about", (req, res) => {
     res.send("About");
   });
```

#### (2) Dynamic Route (Route Params)

```bash
app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.send("User Found");
});
```

#### (3) Query Params

```bash
app.get("/search", (req, res) => {
  console.log(req.query.name);
  res.send("Searching");
});
```

## Express.js

- simplifies route creation.
