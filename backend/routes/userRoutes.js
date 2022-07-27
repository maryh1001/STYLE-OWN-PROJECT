const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

// New User
// router.post('/register', (req, res) => {
//   res.send('Register New User Route')
// })
router.post('/', registerUser);

// Login
// router.post('/login', (req, res) => {
//   res.send('Login Route')
// })

router.post('/login', loginUser);
router.get('/me', protect, getMe);

// router.post('/profile', (req, res) => {
//   res.send('profile page')
// })

module.exports = router;
