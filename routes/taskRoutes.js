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

//Get a list of tasks specific to a particular user
router.get('/gettask', auth, async (req, res) => {
    try{
        const task = await Task.find({
            owner: req.user_id
        })
        res.status(200).json({task, count:task.length, message: "Task fetched Successfully"});
    }
    catch(err){
        res.status(500).send({error: err});
    }
});

//API end point for Updating a task by id - description and status
router.patch('/updatetask/:id', auth, async (req, res) =>{
    const taskid = req.params.id;
    const updates = Object.keys(req.body);
   
    const allowedUpdates = ['description', 'status'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
        if(!isValidOperation){
            return res.status(400).json({error: "Invalid Operation"})
        }
    try{
        const task = await Task.findOne({
            _id: taskid,
            owner: req.user._id
        });
        if(!task){
            return res.status(404).json({message: "Task not found"});
        }

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();

        res.json({
            message: "Task Updated Successfully",
            task
        })
    }
    catch(err){
        res.status(500).send({error: err});
    }
});

module.exports = router; 