const { PORT } = require("./environment");
const upload = require("./multer");
const db = require("./connection");

module.exports = {
    PORT,
    upload,
    db
};
