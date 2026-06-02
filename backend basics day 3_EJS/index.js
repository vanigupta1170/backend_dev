const express = require('express');
const app = express();


const ports = 8080;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.listen(ports, () => {
    console.log(`Server is running on port ${ports}`);
});