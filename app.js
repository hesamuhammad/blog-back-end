var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const expressJWT = require("express-jwt");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/blogusers");
var blogsRouter = require("./routes/blogs");

var app = express();

app.use(cors());
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/assets", express.static("assets"))
app.use(
    expressJWT({ secret: "INISECRET" }).unless({
        path: [
            { url: "/", methods: ["GET"] }, //homepage
            { url: "/blogusers", methods: ["GET"] }, //id user
            { url: "/blogusers", methods: ["POST"] }, //registation
            { url: "/blogusers/login", methods: ["POST"] }, //login
            { url: "/blogs", methods: ["GET"] }, //blogs
            { url: "/blogs", methods: ["POST"] }, //add new blog
        ]
    })
);

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.status(401).send({ message: "You are not my member" });
    } else {
        return next();
    }
});

const static = function(req, res, next) {
    next();
};

app.use("/", indexRouter);
app.use("/blogusers", usersRouter);
app.use("/blogs", blogsRouter);

module.exports = app;
