const express = require('express');
const homerouter = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');

homerouter.get('/welcome', authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to the home page"
    });
});

module.exports = homerouter;