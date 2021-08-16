DROP TABLE IF EXISTS cart_items;
CREATE TABLE cart_items (
   id SERIAL PRIMARY KEY ,
   user_id INTEGER REFERENCES users(id),
   course_id INTEGER REFERENCES courses(id),
   quantity INTEGER
)