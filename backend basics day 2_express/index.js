const express=require('express');
const app=express();


console.dir(app);
let port=8080;// or 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//     console.log("Request received:", req.method, req.url);
//     res.send("This is a basic response");
// });

app.get("/", (req, res) => {
    res.send("Hello i am root!");
});

app.get("/apple", (req, res) => {
    res.send("You contacted the apple route!");
});
app.get("/banana", (req, res) => {
    res.send("You contacted the banana route!");
});


//query string example: http://localhost:8080/search?q=express
app.get("/search", (req, res) => {
    let {q}=req.query;
    if(!q) {
        return res.send("Please provide something to search.");
    }
    res.send(`<h1>You searched for ${q}</h1>`);
});

app.get("/:username", (req, res) => {
    console.log(req.params.username);
    res.send("Hello i am root");
});

app.use((req, res) => {
    res.status(404).send("Route not found");
});