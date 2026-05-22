## Queary-Params

- `req.query` is an object that stores query parameters from the URL.
- It is used to get data from the URL after `?`.

```
-  In the URL: http://localhost:8000/search?name=ankit&age=26
-  name=ankit` and `age=26` are called Query Parameters
```

# Structure of Query Params

```bash
?key=value&key=value


Example:
| Key  | Value |
| ---- | ----- |
| name | ankit |
| age  | 26    |
```

# Accessing Query Params in Express JS

```js
import express from "express";

const app = express();

app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(8000, () => {
  console.log("Server Started");
});
```

## Difference Between Params and Query

| Route Params                | Query Params                 |
| --------------------------- | ---------------------------- |
| Part of URL path            | Comes after `?`              |
| Used for specific resource  | Used for filtering/searching |
| Example: `/user/10`         | Example: `?name=ankit`       |
| Accessed using `req.params` | Accessed using `req.query`   |

## Route Params

```bash
/user/25
```

## Query Params

```bash
/search?name=ankit
```
