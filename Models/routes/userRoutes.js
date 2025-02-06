const express = require('express');
const user = require('../models/User'); // Correct path (going up two levels)
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User routes are working!');
});

module.exports = router;