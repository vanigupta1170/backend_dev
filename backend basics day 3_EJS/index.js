const express = require('express');
const app = express();
const path = require('path');


const ports = 8080;


app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));


app.get('/', (req, res) => {
    res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
    res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
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

app.get("/users", (req, res) => {
    const instaData = require("./data.json");

    res.render("users.ejs", {
        users: Object.keys(instaData)
    });
});

app.get("/quote",(req,res)=>{

    let quotes=[
        "Never give up",
        "Keep learning",
        "Practice daily",
        "Success takes time"
    ];

    let idx=Math.floor(Math.random()*quotes.length);

    res.send(quotes[idx]);
});