const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema);