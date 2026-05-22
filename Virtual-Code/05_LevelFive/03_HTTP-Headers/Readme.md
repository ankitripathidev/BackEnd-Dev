# HTTP Headers

- HTTP Headers are key-value pairs used in HTTP requests and responses to pass additional information between the client and the server.

- They help in defining metadata, specifying content type, setting authentication tokens, etc.

---

## Types of HTTP Headers

### 1. Request Headers
- Sent by the client to the server
- Example:
  - `User-Agent`

### 2. Response Headers
- Sent by the server to the client
- Example:
  - `Content-Type`

---


## Get Request Headers

### 1. `req.get()`
- Used for getting specific headers.

#### Example:
```js
req.get("Content-Type");
```

---

### 2. `req.headers`
- Used for getting all headers.

#### Example:
```js
console.log(req.headers);
```

---

# Set Response Headers

Use:
- `res.set()`
- `res.header()`

#### Example:
```js
res.set("Content-Type", "application/json");
```

```js
res.header("Authorization", "Bearer token");
```

---

# Remove Headers

Use:
```js
res.removeHeader(headerName);
```

#### Example:
```js
res.removeHeader("X-Powered-By");
```

---