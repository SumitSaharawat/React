const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
const app = express();
const PORT = 5002;
const DB_URL = 'mongodb+srv://sumitsaharawat:Sumit123@cluster0.mbuuqy0.mongodb.net';
const DB_NAME = 'TaskScheduler';

app.use(cors({
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    
}

connectToDatabase();

// GET: Retrieve all tasks
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await Task.updateOne({ id: id }, req.body);
    res.json({ success: true });
});

app.delete('/tasks/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await Task.deleteOne({ id: id });
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`TaskScheduler Server is running on port ${PORT}`);
});