const router = require('express').Router();
const userModel = require('../models/users/userModel');


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

  /**
 * @swagger
 * /api/users/register:
 *   post:
 *     tags:
 *       - Users
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully registered
 */

router.post('/register', userModel.registerUser);

  /**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email & Password
 *         in: body
 *         required: true
 *         properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully signed in
 */

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
 *                  $ref: '#/definitions/User'
 */

router.get('/', userModel.getUsers);

/**
 * @swagger
 * /api/users/{email}:
 *   patch:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User email
 *         in: path
 *         required: true
 *         type: string
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated
 */

router.patch('/:email', userModel.updateUser);

/**
 * @swagger
 * /api/users/{email}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User email
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */

router.delete('/:email', userModel.deleteUser);

module.exports = router;