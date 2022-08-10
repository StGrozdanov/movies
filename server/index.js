const mongoose = require('mongoose');
const express = require('express');

start();

async function start() {
    try {
        const database = await mongoose.connect('mongodb://localhost:27017/movies_db');
        console.log('Database connected');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.listen(3030, () => console.log('Server is running on port 3030'));
}