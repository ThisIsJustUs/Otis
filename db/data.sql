DROP TABLE likes;
DROP TABLE comments;
DROP TABLE animals;
DROP TABLE users;

-- Create the table in the specified schema
CREATE TABLE users
(
    id BIGSERIAL not null PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    created_at DATE not null DEFAULT now()
);

CREATE TABLE animals
(
    id BIGSERIAL not null PRIMARY KEY,
    user_id BIGINT REFERENCES users (id),
    image_url VARCHAR(255) not null,
    type_text VARCHAR(255),
    location_text VARCHAR(255),
    created_at TIMESTAMP not null default now()
);

CREATE TABLE comments
(
    id BIGSERIAL not null PRIMARY KEY,
    comment_text VARCHAR(255) not null,
    user_id BIGINT REFERENCES users (id) not null,
    animal_id BIGINT REFERENCES animals (id) not null,
    created_at TIMESTAMP not null default now()
);

CREATE TABLE likes
(
    user_id BIGINT REFERENCES users (id) not null PRIMARY KEY,
    animal_id BIGINT REFERENCES animals (id) not null,
    created_at TIMESTAMP not null default now()
);