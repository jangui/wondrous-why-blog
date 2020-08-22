const router = require('express').Router();
let Post = require('../models/post.model');

// check auth func
function checkAuth(token) {
  if (!(token === process.env.AUTH)) {
    throw "unauthorized";
  }
}

// get all posts
router.route('/').get( async (req, res) => {
  try {
    checkAuth(req.header('Authorization'));
    let posts = await Post.find();
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// get posts count
router.route('/count').get( async (req, res) => {
  try {
    checkAuth(req.header('Authorization'));
    let count = await Post.countDocuments();
    return res.json(count)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// get some post
router.route('/').post( async (req, res) => {
  const s = parseInt(req.body.skip);
  const l = parseInt(req.body.limit);
  try {
    checkAuth(req.header('Authorization'));
    let posts = await Post.find().skip(s).limit(l);
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// add post
router.route('/add').post( async (req, res) => {
  const title = req.body.title;
  const filepath = req.body.filepath;
  const date = Date.parse(req.body.date);
  //const tags = req.body.tags;

  //const newPost = new Post({title, filepath, date, tags});
  const newPost = new Post({title, filepath, date});

  try {
    checkAuth(req.header('Authorization'));
    let response = await newPost.save();
    return res.json(`Post '${title}' added!`);
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// find post by id
router.route('/:id').get( async (req, res) => {
  try {
    checkAuth(req.header('Authorization'));
    let postDoc = await Post.findById(req.params.id);
    return res.json(postDoc)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// delete post by id
router.route('/:id').delete( async (req, res) => {
  try {
    checkAuth(req.header('Authorization'));
    await Post.findByIdAndDelete(req.params.id);
    return res.json("post deleted")
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// update post
router.route('/update/:id').post( async (req, res) => {
  try {
    checkAuth(req.header('Authorization'));
    let postDoc = await Post.findById(req.params.id);
    postDoc.title = req.body.title;
    postDoc.filepath = req.body.filepath;

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
