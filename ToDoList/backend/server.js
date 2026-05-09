const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors({
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

let todos = [
    { id: 1, text: "Review LeetCode problem patterns", completed: false },
    { id: 2, text: "Submit QA Analyst applications", completed: false }
];


app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { completed } = req.body;
  
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, completed } : todo
  );
  
  res.json({ success: true });
});


app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});