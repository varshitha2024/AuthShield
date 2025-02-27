const express = require('express');
const adminrouter = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const adminMiddleware = require('../Middleware/adminMiddleware');

adminrouter.get('/admin',authMiddleware, adminMiddleware, (req, res) => {
    res.json({
        message: "Welcome to the admin page"
    });
})
module.exports = adminrouter