const express=require('express');
const router=express.Router();

router.use(express.json());
const userModel=require('../model/userModel');
require('../db/connection')

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Verify password (for demonstration; use hashed passwords in production)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post(
    '/register',
    
    async (req, res) => {
    
  
      const { name, email, password,  phone, Admin } = req.body;
      console.log(req.body);

  
      try {
        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already in use' });
        }
  
        // Create new user
        const newUser = new userModel({
          name,
          email,
          password,
          phone,
          Admin
        });
        await newUser.save();
  
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
      }
    }
  );
  
  module.exports = router;
 



  























