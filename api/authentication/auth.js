const jwt = require('jsonwebtoken');
require('dotenv/config');

const secretKey = process.env.SECRET_KEY;

exports.generateToken = id => {
    return jwt.sign({ id: id }, secretKey, { expiresIn: '1h' })
};