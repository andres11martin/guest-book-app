const express = require("express");
const router = express.Router();
const Post = require("../models/Post")

router.get("/", (req, res) => {
    res.send("We are on posts");
});

router.post("/", async (req, res) => {
    console.log("holaaaaaaa", req.body)
    const post = await Post.create(req.body)
    console.log(post)
    return res.json(post)
});

module.exports = router;