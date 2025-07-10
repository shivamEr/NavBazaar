const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtKey = process.env.JWT_SECRET;

const userInfo = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
};

// POST -> SingUp user
const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPw = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPw });
        await newUser.save();

        const { _id } = newUser;
        res.status(201).json({
            message: 'User registered successfully',
            user: { _id, name, email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

// POST -> login user
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id },
            jwtKey,
            { expiresIn: "1h" }
        );

        const { _id, name } = user;
        res.status(200).json({
            message: 'Login successful',
            token,
            user: { _id, name, email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};


module.exports = {userInfo, signup, login };
