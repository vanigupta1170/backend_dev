# Express.js Routing Basics

A beginner-friendly Express.js server demonstrating core routing concepts including static routes, dynamic parameters, query strings, and middleware.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/vanigupta1170/backend_dev

# Navigate into the project
cd backend_dev

# Install dependencies
npm install express
```

### Run the Server

```bash
node index.js
```

Server will start at: `http://localhost:8080`

---

## 📁 Project Structure

```
├── index.js       # Main Express server file
├── package.json
└── README.md
```

---

## 🛣️ Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Root route — returns a welcome message |
| GET | `/apple` | Returns a message for the apple route |
| GET | `/banana` | Returns a message for the banana route |
| GET | `/search?q=yourquery` | Search route — reads query string and displays result |
| GET | `/:vanigupta1170` | Dynamic route — greets any vanigupta1170 passed in the URL |
| ANY | `*` (unmatched) | 404 fallback middleware |

---

## 💡 Concepts Covered

### 1. Static Routes
Fixed path routes that respond to exact URL matches.
```javascript
app.get("/apple", (req, res) => {
    res.send("You contacted the apple route!");
});
```

### 2. Dynamic Route Parameters
Using `:param` to capture variable parts of the URL via `req.params`.
```javascript
app.get("/:vanigupta1170", (req, res) => {
    console.log(req.params.vanigupta1170
0
    );
    res.send("Hello i am root");
});
```

### 3. Query Strings
Accessing query parameters (e.g. `?q=express`) via `req.query`.
```javascript
// Example: http://localhost:8080/search?q=express
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        return res.send("Please provide something to search.");
    }
    res.send(`<h1>You searched for ${q}</h1>`);
});
```

### 4. 404 Fallback Middleware
Using `app.use()` at the end to catch all unmatched routes.
```javascript
app.use((req, res) => {
    res.status(404).send("Route not found");
});
```

---

## ⚠️ Key Lesson: Route Order Matters

Express matches routes **top to bottom**. A wildcard route like `/:vanigupta1170` will intercept
any route defined after it. Always define **specific routes before wildcard/param routes**.

```
✅ Correct Order:
   /apple
   /banana
   /search
   /:vanigupta1170
   
   
   
0     ← wildcard goes last
   app.use()      ← 404 handler always at the very end
```

---

## 🧪 Example Requests

```bash
GET http://localhost:8080/                    → "Hello i am root!"
GET http://localhost:8080/apple               → "You contacted the apple route!"
GET http://localhost:8080/search?q=nodejs     → "You searched for nodejs"
GET http://localhost:8080/john                → uses /:vanigupta1170 route
GET http://localhost:8080/unknownroute        → 404 "Route not found"
```

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
