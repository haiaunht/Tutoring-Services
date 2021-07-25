DROP TABLE IF EXISTS email_subscription;
CREATE TABLE email_subscription (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL
)