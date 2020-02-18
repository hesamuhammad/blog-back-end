const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    subTitle: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        required: true
    }
});

const Comments = mongoose.model("comments", commentSchema);

module.exports = Comments;
