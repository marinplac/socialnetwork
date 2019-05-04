DROP TABLE IF EXISTS friendships;

CREATE TABLE friendships(
id SERIAL PRIMARY KEY,
sender_id VARCHAR (200) NOT NULL,
recipient_id VARCHAR (200) NOT NULL,
accepted BOOLEAN DEFAULT false
);
