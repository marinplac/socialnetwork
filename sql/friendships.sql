DROP TABLE IF EXISTS friendships;

CREATE TABLE friendships(
id SERIAL PRIMARY KEY,
sender_id INT NOT NULL,
recipient_id INT NOT NULL,
accepted BOOLEAN DEFAULT false
);
