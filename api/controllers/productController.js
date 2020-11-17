const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');
const app = require('../app');

/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       name:
 *         type: string
 *       brand:
 *         type: string
 *       short:
 *         type: string
 *       desc:
 *         type: string
 *       price:
 *         type: number
 *       image:
 *         type: string
 */


/**
 * @swagger
 * /api/products:
 *      get:
 *      tags:
 *       - Products
 *      description: Get all products
 *      produces:
 *       - application/json
 *      responses:
 *          200:
 *              description: An array of Products
 *              schema:
 *                  $ref: '#/definitions/Product'
 */

router.get('/', productModel.getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     description: Returns a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         schema:
 *           $ref: '#/definitions/Product'
 */

router.get('/:id', productModel.getOneProduct);

 /**
 * @swagger
 * /api/products/new:
 *   post:
 *     tags:
 *       - Products
 *     description: Creates a new product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post('/new', auth.verifyToken, productModel.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     tags:
 *       - Products
 *     description: Updates a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: Product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully updated
 */

router.patch('/:id', auth.verifyToken, productModel.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     description: Deletes a single product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */

router.delete('/:id', auth.verifyToken, productModel.deleteProduct);


module.exports = router;