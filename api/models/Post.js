const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;