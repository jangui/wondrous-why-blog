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
    let posts = await Post.find();
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// get total posts count
router.route('/total').get( async (req, res) => {
  try {
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
  const order = req.body.order;

  let sortBy;
  if (order === 'new') {
    sortBy = {date: -1}
  } else if (order === 'old') {
    sortBy = {date: 1}
  }

  try {
    let posts = await Post.find().sort(sortBy).skip(s).limit(l);
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// search posts based on title
router.route('/search/').post( async (req, res) => {
  const s = parseInt(req.body.skip);
  const l = parseInt(req.body.limit);
  const order = req.body.order;
  const search = req.body.search;
  const postType = req.body.postType;

  let sortBy;
  if (order === 'new') {
    sortBy = {date: -1}
  } else if (order === 'old') {
    sortBy = {date: 1}
  }

  try {
    let posts = await Post.find(
      {
        $or:[
          {title: {"$regex": search, "$options": "i"}},
          {tags: {"$regex": search, "$options": "i"}},
        ],
        type: postType,
      }
    ).sort(
      sortBy
    ).skip(s).limit(l);
    return res.json(posts)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// get total posts count based off search
router.route('/count').post( async (req, res) => {
  try {
    let count = await Post.find(
      {title: {"$regex": req.body.search, "$options": "i"}}
    ).countDocuments();
    return res.json(count)
  } catch(err) {
    return res.status(400).json('Error: ' + err);
  }
});

// add post
router.route('/add').post( async (req, res) => {
  const title = req.body.title;
  const filepath = req.body.filepath;
  const date = Date.parse(req.body.date);
  const tags = req.body.tags;
  const type = req.body.type;

  const newPost = new Post({title, filepath, type, date, tags});

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
