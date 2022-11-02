const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Profile = require('../models/profileModel');

// Get Current User Profile
// GET    /api/profile
const getProfile = asyncHandler(async (req, res) => {
  // Get user using ID in JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const profile = await Profile.find({ user: req.user.id });

  res.status(200).json(profile);
});

// Create New Profile (will be greatly expanded upon in the future)
// POST   /api/profile
const createProfile = asyncHandler(async (req, res) => {
  const { education, location, company, bio } = req.body;

  if (!education || !location || !company || !bio) {
    res.status(400);
    throw new Error('Please fill out missing items.');
  }
  // above code is an example of items not set by the user that must be filled out

  // Get user using ID in JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const profile = await Profile.create({
    user: req.user.id,
    education,
    location,
    company,
    bio,
  });

  res.status(201).json(profile);
});

module.exports = {
  getProfile,
  createProfile,
};
