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
