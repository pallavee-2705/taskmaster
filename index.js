const express = require('express');
const bodyParser = require('body-parser');

//defined an instance for express class to use it for api routes 
const app = express();

//for including the environment variables
require('dotenv').config();
require('./db');
const PORT = 8000;


app.use(bodyParser.json());

app.get ('/',(req,res) => {
    res.json({
        message: 'TaskMaster API is working!'
    })
});
app.listen(PORT, () =>{
console.log(`Yay! Server is running on port ${PORT}.`);
});