const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/socialnetwork"
);

exports.registerUser = function registerUser(
    firstname,
    lastname,
    email,
    password
) {
    let q = `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING ID`;
    let params = [firstname, lastname, email, password];
    return db.query(q, params);
};
exports.getRegisteredPass = function getRegisteredPass(email) {
    let q = `SELECT password, id FROM users WHERE email = $1`;
    let params = [email];
    return db.query(q, params);
};

exports.getUser = function getUser(id) {
    let q = `SELECT * FROM users WHERE id= $1`;
    let params = [id];
    return db.query(q, params);
};
exports.putUrlIntoTable = function putUrlIntoTable(users_image, id) {
    let q = `UPDATE users SET users_image=$1 WHERE ID=$2 RETURNING users_image`;
    let params = [users_image, id];
    return db.query(q, params);
};
exports.setBio = function setBio(id, bio) {
    let q = `UPDATE users
    SET bio = $2
    WHERE ID = $1`;
    let params = [id, bio];
    return db.query(q, params);
};

exports.getFriendReq = function getFriendReq(recipient_id, sender_id) {
    let q = `SELECT * FROM friendships
    WHERE (recipient_id = $1 AND sender_id = $2)
    OR (recipient_id = $2 AND sender_id = $1)`;
    let params = [recipient_id, sender_id];
    return db.query(q, params);
};
exports.beFriend = function beFriend(sender_id, recipient_id) {
    let q = `INSERT INTO friendships (sender_id, recipient_id, accepted)
    VALUES ($1, $2, false) RETURNING ID`;
    let params = [sender_id, recipient_id];
    return db.query(q, params);
};
exports.cancelReq = function cancelReq(sender_id) {
    let q = `DELETE FROM friendships WHERE sender_id = $1`;
    let params = [sender_id];
    return db.query(q, params);
};
exports.acceptReq = function acceptReq(sender_id, recipient_id) {
    let q = `INSERT INTO friendships (sender_id,recipient_id, accepted) VALUES ($1, $2, false) RETURNING ID`;
    let params = [sender_id, recipient_id];
    return db.query(q, params);
};
exports.endFriend = function endFriend(sender_id) {
    let q = `DELETE FROM friendships WHERE sender_id = $1`;
    let params = [sender_id];
    return db.query(q, params);
};
