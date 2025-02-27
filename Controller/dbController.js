require("dotenv").config()
const User = require('../Schema/dbSchema');
const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async (req,res)=>{
    try{
        const {Username,Email,Password,Role} = req.body;
        const userexists = await User.findOne({$or:[{Username,Email}]})
        if(userexists){
            res.status(400).json({
                success: false,
                message: "User already exists "
            })
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(Password,salt)
        const newlycreateduser = await User.create({
            Username,
            Email,
            Password: hashedPassword,
            Role
        })
        if(newlycreateduser){
            res.status(200).json({
                success: true,
                message: `Hello ${Username}, you've successfully registered`
            })
        }
        else{
            res.status(400).json({
                success: false,
                message: "Registration failed"
            })
        }
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }

}

const loginUser = async (req,res)=>{
    try{
       const{Email,Password} = req.body
       const userexistance = await User.findOne({Email})
       if(!userexistance){
        res.status(400).json({
            success: false,
            message: " there is no user with this email id"
        })
       }
       const passwordmatch = await bcrypt.compare(Password,userexistance.Password)
       if(!passwordmatch){
        res.status(400).json({
            success:false,
            message: "invalid credentials please try again with a valid password"
        })
       }
       const accessToken = jwt.sign({
              id: userexistance._id,
              role: userexistance.Role
         },process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: "30m"
         })
          res.status(200).json({
                success: true,
                message: "login successful",
                accessToken
                // this is the accessToken that will be used to access the protected routes from Auth
          })
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }

}
module.exports = {registerUser,loginUser}