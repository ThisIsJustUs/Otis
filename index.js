const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');
require('./db/index.js');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api', db.getUsers);
app.get('/api/:id', db.getUserById);

// REST API Animals
app.get('/animals', db.getAnimals);
app.get('/animals/:id', db.getAnimalsById);
app.post('/animals', db.createAnimal);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
