const express = require('express');
const userRouter = express.Router();
const {registerUser,loginUser} = require('../Controller/dbController');


userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
module.exports = userRouter;