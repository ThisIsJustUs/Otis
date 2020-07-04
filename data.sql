DROP TABLE photos;
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