# Level-4 : Connect Backend with Frontend

## RESTful API (Representational State Transfer)

- A RESTful API is a way for applications to communicate with each other over the internet using standard HTTP requests like:

- GET
- POST
- PUT
- DELETE

---

## How REST API Works

### 1. Client Sends Request

- A client (example: Mobile App or Website) sends a request to the server.

### 2. Server Processes Request

- The server receives the request and processes it.

### 3. Server Sends Response

- The server sends back a response, usually in JSON format.

---

# Example Flow

```
Frontend (React / Website)
        ↓ Request
Backend Server (Node.js / Express)
        ↓ Response
JSON Data Returned

```

# Common HTTP Methods

| Method | Purpose          |
| ------ | ---------------- |
| GET    | Fetch data       |
| POST   | Send/Create data |
| PUT    | Update data      |
| DELETE | Remove data      |

# Example JSON Response

```json
{
  "name": "Ankit",
  "role": "Frontend Developer"
}
```


# Summary
- REST API helps frontend and backend communicate.
- Client sends request.
- Server processes request.
- Server returns response in JSON format.
- Uses HTTP methods like GET, POST, PUT, DELETE.


<!-- ***************************************************************** -->
# Level-4: Connect Backend with Frontend

## CORS (Cross Origin Resource Sharing) in Express JS

- CORS is a security feature in web browsers that prevents requests from different origins unless explicitly allowed by the server.

- Same-Origin Policy restricts requests from different origins:
  - Protocol
  - Domain
  - Port

- CORS allows servers to specify who can access their resources.

---

## Install CORS Package

```bash
npm install cors
```

---

## Example Usage in Express JS

```js
import express from "express";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS Enabled");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## Why CORS is Needed

Example:

### Frontend

```txt
http://localhost:5173
```

### Backend

```txt
http://localhost:3000
```

Both have different ports, so browsers treat them as different origins.

Without CORS, the frontend cannot access the backend API.

---

## Origin = Combination of

```txt
Protocol + Domain + Port
```

Example:

```txt
http://localhost:3000
```

- Protocol → `http`
- Domain → `localhost`
- Port → `3000`

---

## Restricted CORS Example

```js
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
```

Only this frontend can access the backend.

---

## Summary

- CORS = Cross Origin Resource Sharing
- Browser security feature
- Prevents unauthorized cross-origin requests
- Backend must explicitly allow frontend access
- Commonly used in MERN / Full Stack applications