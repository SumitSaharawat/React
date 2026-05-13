const DB_URL = 'mongodb+srv://sumitsaharawat:Sumit123@cluster0.mbuuqy0.mongodb.net';
const DB_NAME = 'TaskScheduler';
const mongoose = require('mongoose');


const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    
}

module.exports = connectToDatabase;