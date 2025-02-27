const mongoose = require('mongoose');

const  dbSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:[true,"Username already exists"],
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
        trim:true
    },
    Password:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        default:"User",
        enum:["User","Admin"]
    }
   
})
module.exports = mongoose.model("User",dbSchema)