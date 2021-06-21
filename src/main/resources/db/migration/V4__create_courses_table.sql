DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(255) NOT NULL ,
    description TEXT,
    image_url TEXT NOT NULL ,
    rating DOUBLE PRECISION,
    price DOUBLE PRECISION NOT NULL ,
    category_id INTEGER REFERENCES categories(id)
)