DROP TABLE IF EXISTS users_courses;
CREATE TABLE users_courses (
    id SERIAL PRIMARY KEY ,
    user_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id)
)