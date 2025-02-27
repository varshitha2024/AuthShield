const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async ()=>{
    try{
        await mongoose.connect(process.env.mongo_url)
        console.log("database  connection successful")
    }
    catch(err){
        console.log(`theres an error connecting to database ${err}`)
        process.exit(1) // exits the process, so that rest of the operations are not executed arent executed without a database connection
    }
}
