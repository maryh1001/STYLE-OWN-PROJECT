const asyncHandler = require('express-async-handler')
// please reference https://github.com/Abazhenov/express-async-handler for documentation
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')



// Register new user
// @route   /api/users
const registerUser = asyncHandler(async(req, res) => {
  const { name, email, password } = req.body
  // console.log(req.body);


  // VALIDATION
  // I covered this in an online course back in backend but can't remember which one, please reference: https://expressjs.com/en/guide/error-handling.html
  
  if (!name || !email || !password) {
    // return res.status(400).json({ message: 'Please include all fields'})
    res.status(400) // bad request
    throw new Error('Please include all fields') 
  }

  // Find if user already exists
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Encrypt Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
      //still awaiting token
    })
  } else {
    res.status(400)
    throw new error('Invalid user data')
  }

  // res.send('Register Route')
})

// Login an existing user
// @route   /api/users/login
const loginUser = asyncHandler(async(req, res) => {
  res.send('Login Route')
})



module.exports = {
  registerUser,
  loginUser,
}
