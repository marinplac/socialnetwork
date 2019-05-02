//the db query that should be made//

SELECT * FROM friendships
WHERE (recipient_id = $1 AND sender_id = $2)
OR (recipient_id = $2 AND sender_id = $1);
