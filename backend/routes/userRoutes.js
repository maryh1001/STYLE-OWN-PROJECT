const express = require('express')
const router = express.Router()

// New User
router.post('/register', (req, res) => {
  res.send('Register New User Route')
})

// Login
router.post('/login', (req, res) => {
  res.send('Login Route')
})

module.exports = router