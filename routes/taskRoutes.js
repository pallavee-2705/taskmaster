const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');

router.get('/test', auth, (req,res) => {
    res.send('task routes are working!')
});


//CRUD tasks for uathenticated users 

//API for Creating a task
router.post('/createtask', auth, async (req, res) => {
    try{
    }
});
module.exports = router; 