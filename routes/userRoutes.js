const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//API for registration of the user
router.post('/register', async (req, res) => {
    try {
    const { name, email, password} = req.body;
    const user = new User({name, email, password});
    await user.save();
    res.status(201).send({ user, message:'User created successfully'});
}
catch (err){
    res.status(400).send({ error: 'Unable to register' });
}
});

//API for logging in the user
router.post('/login', async (req,res) => {
    try{
        const {email, password} = req.body;
        //try to find if the user exists or not
        const user = await User.findOne({ email });
        //case to execute if user not found
        if(!user){
            throw new Error('Oops! Unable to login');
        }
        //case if user is found
        const isMatch = await bcrypt.compare(password, user.password);      
        //if the password doesnt match
        if(!isMatch){
            throw new Error('Oops! Unable to login');
        }
        const token = jwt.sign({
            _id: user._id.toString()            
        } ,process.env.JWT_SECRET_KEY);
        res.send({user, token, message:"Logged in successfully" });
    }
    catch (err) {
        res.status(400).send({error: err.message});
    }
});
router.get('/', (req, res) =>{
    res.send('User routes are working');
});


//creating modules for login and register
router.post('/register', async (req, res) => {
    const{name, email, password} = req.body;
});
router.post('/login', async (req, res) =>{

});

module.exports = router;
