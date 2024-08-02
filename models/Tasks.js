
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


// Updating the `updatedAt` field before saving the document
taskSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


//Creating the task Model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;