const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: "Tasks route is working!" });
});

// CRUD tasks
module.exports = router;