const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/socialnetwork"
);

exports.registerUser = function registerUser(first, last, email, pass) {
    let q = `INSERT INTO users (first, last, email, pass) VALUES ($1, $2, $3, $4) RETURNING ID`;
    let params = [first, last, email, pass];
    return db.query(q, params);
};
