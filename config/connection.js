const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://hesamuhammad:Hesa1234@blog-ppjnb.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("Connected to mongo database");
    })
    .catch(error => {
        console.log("There is something wrong", error);
    });

const db = mongoose.connection;

module.exports = db;
