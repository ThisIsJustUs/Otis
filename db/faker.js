const faker = require('faker');

module.exports = async (pool) => {
    for (let i = 0; i < 100; i++) {
        let randomUsername = faker.internet.userName();

        let text = 'INSERT INTO users (username) VALUES($1)';
        let values = [randomUsername];

        const res = await pool.query(text, values);
    }

    for (let i = 0; i < 100; i++) {
        let data = {
            user_id: Math.floor(Math.random() * 100),
            image_url: faker.image.animals(),
            type_text: 'Dog',
            city: faker.address.city(),
            zipcode: faker.address.zipCode(),
            streetAddress: faker.address.streetAddress(),
            country: faker.address.country(),
        };

        let text = `INSERT INTO animals 
                    (user_id, 
                    image_url, 
                    type_text, 
                    city, zipcode, 
                    street_address, 
                    country) 
            VALUES($1, $2, $3, $4, $5, $6, $7)`;

        let values = [
            data.user_id,
            data.image_url,
            data.type_text,
            data.city,
            data.zipcode,
            data.streetAddress,
            data.country,
        ];

        const res = await pool.query(text, values);
    }
};
