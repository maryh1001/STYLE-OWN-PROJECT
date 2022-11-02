const express = require('express');
const router = express.Router();
const {
  getProfile,
  createProfile,
} = require('../controllers/profileController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getProfile).post(protect, createProfile);

// example of how I would route the forum posts, can also use this for other mulifaceted routing in app
//  router.route('/:id').get(protect, getForumPost).delete(protect, deleteForumPost).put(protect, deleteForumPost)

module.exports = router;
