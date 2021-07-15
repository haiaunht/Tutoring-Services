DROP TABLE IF EXISTS testimonials;
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    job varchar(255) NOT NULL
)