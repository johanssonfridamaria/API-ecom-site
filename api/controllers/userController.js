const router = require('express').Router();
const userModel = require('../models/users/userModel');

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       firstName:
 *         type: string
 *      lastName:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 */


router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUser);

/**
 * @swagger
 * /api/users:
 *      get:
 *      tags:
 *       - Users
 *      description: Get all users
 *      produces:
 *       - application/json
 *      responses:
 *          200:
 *              description: An array of Users
 *              schema:
 *                  $ref: '#/definitions/Users'
 */

router.get('/', userModel.getUsers);

router.patch('/:email', userModel.updateUser);

router.delete('/:email', userModel.deleteUser);

module.exports = router;