const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5002;

app.use(cors({
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

let tasks = [
    { id: 1, name: "Setup Node.js backend", date: "Today", completed: false },
    { id: 2, name: "Wire up Add & Delete buttons", date: "Tomorrow", completed: false }
];

// GET: Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`TaskScheduler Server is running on port ${PORT}`);
});