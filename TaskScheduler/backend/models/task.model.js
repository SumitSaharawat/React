const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    date: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema);