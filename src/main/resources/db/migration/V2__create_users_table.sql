DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    first_name VARCHAR(255) NOT NULL ,
    last_name VARCHAR(255) NOT NULL ,
    email VARCHAR(255) NOT NULL ,
    phone VARCHAR(25),
    role_id INTEGER REFERENCES roles(id)
)