let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://2022goureshmadye:HKDiWw0YdBvPX9Mf@cluster0.bight.mongodb.net/');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection