
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type : String, required : true },
    email: { type : String, required : true, unique : true },
    password: { type : String, required : true }
});


//creating the middlewear to convert the password into a hash format
userSchema.pre('save', async function(next) {
    const user = this;
     
    //this condition only runs when the password field is changed 
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;