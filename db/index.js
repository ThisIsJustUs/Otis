const { Pool } = require('pg');
const keys = require('../config/keys');

const pool = new Pool({
    user: keys.user,
    host: keys.host,
    database: keys.database,
    password: keys.database,
    port: keys.port,
});

// Only uncomment when new data is needed
// require('./faker.js')(pool);

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, response) => {
        if (error) {
            throw error;
        }
        res.status(200).json(response.rows);
    });
};

module.exports = {
    getUsers,
};
