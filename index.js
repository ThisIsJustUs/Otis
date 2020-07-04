const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index');
require('./db/index.js');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', db.getUsers);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
