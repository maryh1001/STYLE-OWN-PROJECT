const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')


// New User
// router.post('/register', (req, res) => {
//   res.send('Register New User Route')
// })
router.post('/register', registerUser)

// Login
// router.post('/login', (req, res) => {
//   res.send('Login Route')
// })
router.post('/login', loginUser)


module.exports = router