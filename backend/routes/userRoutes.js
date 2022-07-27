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

// Login
// router.post('/login', (req, res) => {
//   res.send('Login Route')
// })

// Register New User
router.post('/', registerUser);

// Login User
router.post('/login', loginUser);

router.get('/me', protect, getMe);

module.exports = router;
