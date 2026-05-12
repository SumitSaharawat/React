const taskModel = require('../models/task.model.js');

const getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const addTask = async (req, res) => {
    try {
        const newTask = await taskModel.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        await taskModel.findByIdAndDelete(taskId);
        res.sendStatus(204);
    } catch(error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, req.body, { new: true });
        res.json(updatedTask);
    }catch (error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getTasks, addTask, deleteTask, updateTask };