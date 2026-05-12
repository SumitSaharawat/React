const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
const { getTasks, addTask, deleteTask, updateTask } = require('./controllers/task.controller');
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

app.get('/tasks', getTasks);

app.post('/tasks', addTask);

app.delete('/tasks/:id', deleteTask)

app.put('/tasks/:id', updateTask);

app.listen(PORT, () => {
    console.log(`TaskScheduler Server is running on port ${PORT}`);
});