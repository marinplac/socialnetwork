const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcryptauth = require("./utils/bc");
const db = require("./utils/db");
const csurf = require("csurf");
const multer = require("multer");
const uidSafe = require("uid-safe");
const path = require("path");
const s3 = require("./utils/s3");
const config = require("./config.json");

var diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 24 * 14,
        secret: `Dazed and confused.`
    })
);
app.use(compression());
app.use(csurf());
app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

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

//routes//

app.get("/welcome", (req, res) => {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/register", (req, res) => {
    console.log("registration going on", req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    bcryptauth.hashPassword(password).then(password => {
        db.registerUser(firstname, lastname, email, password)
            .then(data => {
                console.log(data);
                req.session.userId = data.rows[0].id;
                console.log(req.session, "this is session label");
                res.json({ success: true });
            })
            .catch(err => {
                console.log("err in register:", err);
                res.json({ success: false });
            });
    });
});
app.post("/login", (req, res) => {
    console.log("logging in going on", req.body);
    let email = req.body.email;
    let password = req.body.password;
    db.getRegisteredPass(email)
        .then(result => {
            bcryptauth
                .checkPassword(password, result.rows[0].password)
                .then(match => {
                    if (match) {
                        req.session.userId = result.rows[0].id;
                        res.json({ success: true });
                    } else {
                        res.json({ success: false });
                    }
                })
                .catch(err => {
                    res.json({ success: false });
                });
        })
        .catch(err => {
            res.json({ success: false });
        });
});

app.post("/upload", uploader.single("file"), s3.upload, function(req, res) {
    if (req.file) {
        const url = config.s3Url + req.file.filename;
        db.putUrlIntoTable(url, req.session.userId)
            .then(({ rows }) => {
                res.json(rows[0]);
                console.log(rows);
            })
            .catch(err => {
                console.log("err in putInTable:", err);
            });
    } else {
        res.json({
            success: false
        });
    }
});

app.get("/user", (req, res) => {
    console.log("getting the user", req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let profilePic = req.body.users_image;
    db.getUser(req.session.userId).then(result => {
        console.log(result, "result from getting user");
        res.json(result.rows[0]);
    });
});

app.get("/user/:id/json", function(req, res) {
    if (req.session.userId == req.params.id) {
        return res.json({
            redirectTo: "/"
        });
    }
    db.getUser(req.params.id)
        .then(data => {
            console.log(data, "this is get user data");

            res.json(data.rows[0]);
        })
        .catch(err => {
            console.log("error happening in getting other user", err);
        });
});

app.post("/user/bio", function(req, res) {
    console.log("posting the bio is happening", req.body);
    let bio = req.body.bio;
    db.setBio(req.session.userId, bio)
        .then(data => {
            console.log(req.session, "this is session label");
            res.json({ success: true });
        })
        .catch(err => {
            console.log(err, "this errore");
            res.json({ success: false });
        });
});

//friends requests//
app.get("/user/friendrequest/:id/json", function(req, res) {
    console.log("getting the requested friendship", req.body);
    db.getFriendReq(req.session.userId, req.params.id).then(data => {
        console.log(data, "this is fucking data");
    });
});
// app.post("/user/")

//do not ever delete this!//

app.get("*", function(req, res) {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(8080, function() {
    console.log("I'm listening to your commands, master.");
});
