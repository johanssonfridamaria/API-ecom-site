const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUser);

router.get('/', userModel.getUsers);
/**
 * @swagger
 * /users:
 *      get:
 *          description: Get all users
 *          responses:
 *              200:
 *                    description: Success
 */

router.patch('/:email', userModel.updateUser);

router.delete('/:email', userModel.deleteUser);

module.exports = router;