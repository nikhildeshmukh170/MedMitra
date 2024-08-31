const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Register a new user
router.post('/register', async (req, res) => {
  const { name, email, address, phone, aadhaarNo, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      address,
      phone,
      aadhaarNo,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error('Registration Error:', err.message);
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', async (req, res) => {
    console.log('Login route hit with data:', req.body); // Add this line to check if the route is hit
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (!user) {
        console.log('User not found');
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password does not match');
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Create and send JWT token
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      console.error('Login Error:', err.message);
      res.status(500).send('Server error');
    }
  });
  
  
module.exports = router;
