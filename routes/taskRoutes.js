const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Tasks')

router.get('/test', auth, (req, res) => {
    res.send({ message: 'task routes are working!', user: req.user });
});

//CRUD tasks for uathenticated users 

//API for Creating a task
router.post('/createtask', auth, async (req, res) => {
    try{ 
        //While creating the tasks, title, description, status, createdat are required 
        const task = new Task({
            ...req.body,
            owner: req.user._id
        });
        await task.save();
        res.status(201).json({task, message: "Task Created Successfully"});
    }
    catch(err){ 

        res.status(400).send({error: "Failed to complete task"});
    }
});

//Retrieve a list of all tasks after user is authenticated, since user cannot have access to other users tasks 
router.get('/gettasks', auth, async (req, res) => {
    try{
        const task = await Task.find({
            owner: req.user._id
        })
        res.status(200).json({task, count:task.length, message: "Task fetched Successfully"});
    }
    catch(err){
        res.status(500).send({error: err});
    }
});

// Retrieve a single task by ID after user is authenticated
router.get('/gettaskbyid/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id
        });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ task, message: "Task fetched successfully" });
    } catch (err) {
        res.status(500).send({ error: err });
    }
});

// API endpoint for updating an existing task by ID
router.put('/updatetasks/:id', auth, async (req, res) => {
    const taskId = req.params.id;
    const updates = req.body;  // Get all fields from the request body

    // Specifying the Allowed updates
    const allowedUpdates = ['title', 'description', 'status'];
    const updatesKeys = Object.keys(updates);

    // Validate the updates
    const isValidOperation = updatesKeys.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).json({ error: "Invalid updates!" });
    }

    try {
        // Find the task and update it
        const task = await Task.findOne({
            _id: taskId,
            owner: req.user._id
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Apply updates
        updatesKeys.forEach(key => task[key] = updates[key]);
        await task.save();

        res.status(200).json({
            message: "Task Updated Successfully",
            task
        });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// API endpoint for Deleting a task by ID
router.delete('/deletetask/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Send a 204 No Content response
        res.status(204).send({message: "Task Deleted successfully"});
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router; 