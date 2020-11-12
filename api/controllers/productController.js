const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

router.get('/', productModel.getProducts);
router.get('/:id', productModel.getOneProduct);

router.post('/new',productModel.createProduct);

module.exports = router;