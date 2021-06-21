DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id SERIAL PRIMARY KEY ,
    category_name varchar(255) NOT NULL ,
    description TEXT
)