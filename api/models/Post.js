const mongoose = require("mongoose")

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    message: { type: String, required: true },

}, {
    timestamps: true,
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;