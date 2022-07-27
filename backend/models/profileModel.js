const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  education: {
    type: String
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: false
  },
  skills: {
    type: String,
    required: false
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  
  }
);

module.exports = mongoose.model('profile', profileSchema);