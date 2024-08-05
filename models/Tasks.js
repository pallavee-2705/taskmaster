const mongoose = require('mongoose');

// Defining the Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    //Enabling timestamp
    timestamps: true 
});

//Creating the task Model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;