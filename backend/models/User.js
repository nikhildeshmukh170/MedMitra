const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  aadhaarNo: { type: String, required: true },
  password: { type: String, required: true },
  // You may want to hash passwords before storing them
});

module.exports = mongoose.model('User', UserSchema);
