const express = require("express");
const app = express();
const importData = require('./data.json');

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`app is listening on port http://localhost:${port}`);
})

app.get("/coders", (req, res) => {
    res.send(importData);
})