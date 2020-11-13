// import express from node_modules
const express= require('express');
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI= require('swagger-ui-express');

// Synkronize with our app
const app= express();

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
    }
    next()
})

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//controllers
app.use('/api/users', userController);
app.use('/api/products', productController);

//export the whole file
module.exports = app;

