const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Admin = require('../models/Admins')
const logger = require('../utils/Logger');

const filename = 'Login.js';

const loginController = async(req, res) => 
{
    // Get user input
    const { username, password } = req.body;


    // Validate user input
    if (!username || !password) 
      return res.status(400).json({ error: 'Please provide username and password.' });
    
    // if (!/\S+@\S+\.\S+/.test(username))
    //   return res.status(400).json({ error: 'Please provide a valid username address.' });
    
    try
    {
        // Find the user by username in the database
        const admin = await Admin.findOne({ 'username': username })
        
        logger.log(filename, `DB Output: ${admin}`);

        if (!admin) 
            return res.status(400).json({ error: 'Invalid credentials.' });
        
        // Compare the password provided by the user with the hashed password in the database
        // const isMatch = await bcrypt.compare(password, admin.password);
        const isMatch = password === admin.password;
        if (!isMatch) 
            return res.status(400).json({ error: 'Invalid credentials.' });

        // Generate a JWT token
        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET);

        // Return the token to the client
        res.status(200).json({ message: "Successfull login.", adminId: admin._id, token: token });
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({ error: 'Server error' });    
    }

}


module.exports = { loginController }