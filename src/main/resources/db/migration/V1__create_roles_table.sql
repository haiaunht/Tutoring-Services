DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id SERIAL PRIMARY KEY ,
    name varchar(255) NOT NULL,
    description TEXT
)