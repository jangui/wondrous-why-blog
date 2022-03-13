import express from 'express';

import {
    editUser,
    getUser,
    deleteUser,
} from '../controllers/userController.js';

router = express.Router();

// edit user
router.route('/edit').post(editUser);

// get current user
router.route('/').get(getUser)

// delete current user
router.route('/').delete(deleteUser);

export default router;
