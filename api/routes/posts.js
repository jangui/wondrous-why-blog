import express from 'express';

import {
    createPost,
    editPost,
    getPost,
    getPosts,
    deletePost,
    savePost,
    unsavePost,
    getSavedPosts,
} from '../controllers/postController.js';

import { authUser, authAdmin } from '../middlewares/auth.js');

router = express.Router();

// create post
router.route('/create').post(authAdmin, createPost);

// edit post
router.route('/edit').post(authAdmin, editPost);

// get a post
router.route('/:postName').get(getPost)

// get posts
// TODO add search and filter possibilities
router.route('/').post(getPosts);

// delete post
outer.route('/:id').delete(authAdmin, deletePost);

// save post
router.route('/save').post(authUser, savePost);

// unsave post
router.route('/save').post(authUser, unsavePost);

// get saved posts
router.route('/saved').post(authUser, getSavedPosts);

export default router;
