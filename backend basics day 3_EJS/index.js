const express = require('express');
const app = express();
const path = require('path');


const ports = 8080;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));


app.get('/', (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
});



app.get("/hello", (req, res) => {
    res.send("Hello World");
});
app.get("/rolldice", (req, res) => {
    let diceVal= Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
});

app.listen(ports, () => {
    console.log(`Server is running on port ${ports}`);
});