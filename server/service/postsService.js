const postData = require("../data/postsData");

exports.getPosts = function () {
  return postData.getPosts();
};
