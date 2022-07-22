const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')


// New User
// router.post('/register', (req, res) => {
//   res.send('Register New User Route')
// })
router.post('/', registerUser) // pretty sure we can go without '/register' here to clean it up and make it more RESTful

// Login
// router.post('/login', (req, res) => {
//   res.send('Login Route')
// })
router.post('/login', loginUser)


module.exports = router