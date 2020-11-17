const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');
const app= require('../app');


router.get('/', productModel.getProducts);
/**
 * @swagger
 * /products:
 *      get:
 *          description: Get all products
 *          responses:
 *              200:
 *                    description: Success
 */

 
router.get('/:id', productModel.getOneProduct);

router.post('/new',auth.verifyToken, productModel.createProduct);

router.patch('/:id',auth.verifyToken, productModel.updateProduct);

router.delete('/:id',auth.verifyToken, productModel.deleteProduct);


module.exports = router;