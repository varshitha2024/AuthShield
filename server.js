require('dotenv').config();
const express = require('express');
const connectDB = require('./Database/db');
const userRouter = require('./Routes/dbroutes');
const homeRouter = require('./Routes/homeroute');
const adminRouter = require('./Routes/adminroute');
const app = express();
connectDB();


app.use(express.json())
app.use('/page/user',userRouter)
app.use('/page/home',homeRouter)
app.use('/page/home',adminRouter)  
app.listen(process.env.PORT,()=>{
    console.log("server is listening")
})