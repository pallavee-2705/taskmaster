//import jsonwebtokens to compare the tokens received from API calls
//if token matches, let the user perform the action or else give err message 

const jwt = require('jsonwebtoken');
const User = require('../models/User'); //this will actually provide the token for checking if user is valid or not



const auth = async (req, res, next) =>{
    try{
        //Check for authorization
        const token = req.header('Authorization').replace('Bearer ',''); 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({_id: decoded._id})

        //if user not found
        if(!user){
            throw new Error('Unable to login, invalid credentials');
        }

        //if user is found add the user field to API call, whenever an API is called
        req.user = user;
        req.token = token;
        next();

    
    }
    catch(error){
        res.status(401).send({ error: error.message});
    }
}

module.exports = auth;