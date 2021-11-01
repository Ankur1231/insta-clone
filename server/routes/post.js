const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const requireLogin = require("../middleware/requireLogin");

router.post("/createPost", requireLogin, (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });

  post
    .save()
    .then((savedPost) => {
      res.json({ post: savedPost });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allPost", (req, res) => {
  Post.find()
    .populate("postedBy", "-password")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myPost", requireLogin, (req, res) => {
  console.log(req.user);
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "-password")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
