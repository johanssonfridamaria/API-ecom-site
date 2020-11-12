// import app
const app = require('./app');
// import mongoose from node_modules
const mongoose = require('mongoose');

const port = 8000;

const serverURI = 'http://localhost:' + port;
const mongoURI = 'mongodb+srv://frida:bytmig123@cluster0.2xfoe.mongodb.net/ECOM?retryWrites=true&w=majority';

app.listen(port, () => console.log('Webserver: ' + serverURI));