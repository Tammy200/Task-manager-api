const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
require('./db');
const PORT = process.env.PORT ||8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'My task manager api is working!'});
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});