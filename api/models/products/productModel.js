const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req,res)=>{
    Product.find()
    .then(data=> res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to get products',
        error: err
    }))
}

exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to get product',
        error: err
    }))
}