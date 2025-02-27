const express = require('express');
const User = require('../Schema/dbSchema');

const adminMiddleware = (req,res,next)=>{
    if(req.User.Role !== 'admin'){
        return res.status(403).json({
            success: false,
            message: "You are not authorized to access this route"
        })
    }
    next()
}
module.exports = adminMiddleware;