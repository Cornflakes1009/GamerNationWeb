const express = require("express");
const app = express();
const importData = require('./data.json');
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [];

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`app is listening on port http://localhost:${port}`);
});

app.get("/coders", (req, res) => {
    res.send(importData);
});



app.get('/users', (req, res) => {
    res.json(users)
});

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user);
//         res.status(201).send();
//     } catch {
//         res.status(500).send()
//     }
    
// });

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (user == null) {
//         return res.status(400).send('Cannot find user')
//     }    
//     try {
//         if(await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success');
//         } else {
//             res.send('Invalid Password');
//         }
//     } catch {
//         res.status(500).send();
//     }
// });