// import app
const app = require('./app');
// import mongoose from node_modules
const mongoose = require('mongoose');

const port = 8000;

const serverURI = 'http://localhost:' + port;
const mongoURI = process.env.MONGO_URI;

app.listen(port, () => console.log('Webserver: ' + serverURI));