const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//defining API routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();
require('./db');
const PORT = 8000;

app.use(bodyParser.json());
app.use('/users' , userRoutes);
app.use('/tasks' , taskRoutes);

app.get ('/',(req,res) => {
    res.json({
        message: 'TaskMaster API is working!'
    })
});
app.listen(PORT, () =>{
console.log(`Yay! Server is running on port ${PORT}.`);
});
