const express = require('express');
const User = require('../user'); // Correct path to User model
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User routes are working!');
});

module.exports = router;