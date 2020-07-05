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

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getAnimals = (req, res) => {
    pool.query('SELECT * FROM animals ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getAnimalsById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM animals WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const createAnimal = (req, res) => {
    const { user_id, image_url, type_text, city, zipcode, street_address, country } = req.body;

    pool.query(
        `INSERT INTO animals 
            (user_id, image_url, type_text, city, zipcode, street_address, country) 
        VALUES 
            ($1, $2, $3, $4, $5, $6, $7)`,
        [user_id, image_url, type_text, city, zipcode, street_address, country],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`Animal successfully added`);
        }
    );
};

module.exports = {
    getUsers,
    getUserById,
    getAnimals,
    getAnimalsById,
    createAnimal,
};
