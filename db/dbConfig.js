const { Pool } = require('pg');
const keys = require('../config/keys');

const pool = new Pool({
    user: keys.user,
    host: keys.host,
    database: keys.database,
    password: keys.database,
    port: keys.port,
});

module.exports = { pool };
