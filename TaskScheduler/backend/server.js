const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5002;
const connectToDatabase = require('./db/db.connection');

app.use(cors({
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

//Database Connection
connectToDatabase();


// Router 
const router = require('./routes/task.route');
app.use('/', router);

//Server
app.listen(PORT, () => {
    console.log(`TaskScheduler Server is running on port ${PORT}`);
});