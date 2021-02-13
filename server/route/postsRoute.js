const express = require("express");
const router = express.Router();
const postsService = require("../service/postsService");

router.get("/posts", async function (req, res) {
  const posts = await postsService.getPosts();
  res.json(posts);
});

router.post("/posts", async function (req, res) {
  console.log(req.body);
  res.end();
})

module.exports = router;
