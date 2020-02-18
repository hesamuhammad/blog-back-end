const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Blogs = mongoose.model("blogs", blogSchema);

module.exports = Blogs;
