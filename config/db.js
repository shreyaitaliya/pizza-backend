const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ruta:123@cluster0.2chd4c8.mongodb.net/mern');

const db = mongoose.connection;

db.on('connected', (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log('db is connected');
})

module.exports = db;