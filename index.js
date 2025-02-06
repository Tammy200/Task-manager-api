const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({
        message: 'My task manager api is working!'
    })
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
});