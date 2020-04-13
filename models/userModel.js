const knex = require('./../knex');
const jwt = require('jsonwebtoken');

const TABLE_NAME = 'users';

module.exports = {
    createAccessJWT(email) {
        return jwt.sign({email: email}, process.env.SECRET, {
            expiresIn: '7d',
        });
    },
};
