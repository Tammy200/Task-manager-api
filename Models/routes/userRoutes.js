const express = require('express');
const User = require('../user'); // Correct path to User model
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('User routes are working!');
});

router.post('/register', async (req, res) => {
    console.log("Register endpoint hit!");
    console.log("Request Body:", req.body); // Log request data

    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            console.log("Missing fields!");
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Hashing password...");
        const hashedPassword = await bcrypt.hash(password, 10);
        
        console.log("All fields received. Creating user...");
        const user = new User({ name, email, password });
        await user.save();

        console.log("User created successfully!");
        res.status(201).send({ user, message: "User Created Successfully" });
    } catch (err) {
        console.error("Error in register:", err);
        res.status(400).send({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
    
        if(!user){
            throw new Error('Unable to login , invalid credentials');
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if(!isMatch){
            throw new Error('Unable to login , invalid credentials');
        }
    
        const token = jwt.sign({
            _id: user._id.toString()
        }, process.env.JWT_SECRET_KEY );
    
        res.send({ user, token , message: "Logged in successfully"});
       }
        catch (err) {
            res.status(400).send({ error: err });
        }
     });

// register a user
// login a user
module.exports = router;