require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        })
    }
    try{
     const decodedTokenInfo = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
     req.userInfo = decodedTokenInfo
     next()
    }
    catch(err){
        res.status(403).json({
            success: false,
            message: err.message
        })
    }
    
} 
module.exports = authMiddleware; 