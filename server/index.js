const mongoose = require('mongoose');
const express = require('express');

const { SERVER_RUNNING, DB_CONNECTION_ERROR, DB_CONNECTED } = require('./constants/serverMessages');

require('dotenv').config();
const routes = require('./routes');
const blacklistScheduler = require('./schedulers/blacklistScheduler');
const cors = require('./middlewares/corsMiddleware');

start();

async function start() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(DB_CONNECTED);
    } catch (err) {
        console.log(DB_CONNECTION_ERROR);
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routes);
    app.use(cors);

    await blacklistScheduler();
    
    app.listen(3030, () => console.log(SERVER_RUNNING));
}