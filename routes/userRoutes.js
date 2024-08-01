const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) =>{

    res.send('User routes are working');
});


//creating modules for login and register

//register the user

//login the user


module.exports = router;
