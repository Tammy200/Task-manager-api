const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./Models/routes/userRoutes'); // Updated path
const taskRoutes = require('./Models/routes/taskRoutes');

require('dotenv').config();
require('./db');
const PORT = process.env.PORT ||8000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.get('/', (req, res) => {
    res.json({
        message: 'My task manager api is working!'});
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});