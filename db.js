const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

//defining a promise for resolve case and error case for connection to database
mongoose.connect(MONGO_URL,{
 dbName: DB_NAME
}).then(() =>{
    console.log('Yipee! Connected to the database successfully!');
    }

).catch((err) => {
    console.log('Uh oh, failed to connect to database' + err);
})