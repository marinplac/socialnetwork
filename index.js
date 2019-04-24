const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcryptauth = require("./utils/bc");
const db = require("./utils/db");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 24 * 14,
        secret: `Dazed and confused.`
    })
);
app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/register", (req, res) => {
    console.log("registration going on", req.body);
    bcryptauth.hashPassword(req.body.pass).then(hash => {
        db.registerUser(req.body.first, req.body.last, req.body.email, hash)
            .then(data => {
                console.log(data);
                req.session.userId = data.rows[0].id;
                console.log(req.session, "this is session label");
                res.json("/");
            })
            .catch(err => {
                console.log("err in register:", err);
            });
    });
});

app.get("*", function(req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
