const faker = require('faker');

module.exports = (pool) => {
    for (let i = 0; i < 100; i++) {
        let randomUsername = faker.internet.userName();

        let text = 'INSERT INTO users (username) VALUES($1)';
        let values = [randomUsername];

        // promise
        pool.query(text, values)
            .then((res) => {})
            .catch((e) => console.error(e.stack));
    }
};
