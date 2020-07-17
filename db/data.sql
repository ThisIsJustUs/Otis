DROP TABLE likes;
DROP TABLE comments;
DROP TABLE animals;
DROP TABLE users;

-- Create the table in the specified schema
CREATE TABLE users
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password_text VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT NOW(),
    UNIQUE(email)
);

CREATE TABLE animals
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id BIGINT REFERENCES users (id),
    image_url VARCHAR(255) NOT NULL,
    type_text VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(255),
    street_address VARCHAR(255),
    country VARCHAR(255),
    created_at TIMESTAMP NOT NULL default now()
);

CREATE TABLE comments
(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    user_id BIGINT REFERENCES users (id) NOT NULL,
    animal_id BIGINT REFERENCES animals (id) NOT NULL,
    created_at TIMESTAMP NOT NULL default now()
);

CREATE TABLE likes
(
    user_id BIGINT REFERENCES users (id) NOT NULL PRIMARY KEY,
    animal_id BIGINT REFERENCES animals (id) NOT NULL,
    created_at TIMESTAMP NOT NULL default now()
);