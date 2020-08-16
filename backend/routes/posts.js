const router = require('express').Router();
let Post = require('../models/post.model');

// get all posts
router.route('/').get( async (req, res) => {
  try {
    let posts = await Post.find();
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// add post
router.route('/add').post( async (req, res) => {
  const title = req.body.title;
  const date = Date.parse(req.body.date);
  //const tags = req.body.tags;

  //const newPost = new Post({title, date, tags});
  const newPost = new Post({title, date});

  try {
    let response = await newPost.save();
    return res.json(`Post '${title}' added!`);
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// find post by id
router.route('/:id').get( async (req, res) => {
  try {
    let postDoc = await Post.findById(req.params.id);
    return res.json(postDoc)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// delete post by id
router.route('/:id').delete( async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    return res.json("post deleted")
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// update post (currently only updating title allowed)
router.route('/update/:id').post( async (req, res) => {
  try {
    let postDoc = await Post.findById(req.params.id);
    postDoc.title = req.body.title;

    try {
      let response = await postDoc.save();
      return res.json(`Post '${postDoc.title}' updated!`);
    } catch(err) {
      return res.status(400).json('Error: ' + err);
    }
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
