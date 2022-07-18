// Register new user
// @route   /api/users
const registerUser = (req, res) => {
  console.log(req.body);
  
  res.send('Register Route')
}

// Login an existing user
// @route   /api/users/login
const loginUser = (req, res) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser
}