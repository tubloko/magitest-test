const knex = require('knex');
const config = require('config');

module.exports = knex({
    client: 'mysql',
    connection: {
        database: process.env.DATABASE || 'magitest',
        host: process.env.HOST || '127.0.0.1',
        ...config.get('db'),
    }
});
