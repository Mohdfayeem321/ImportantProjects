// routes/auth.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// router.post('/register',

const registration = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({ username, password });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        res.json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

// router.post('/login',

const login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }

            // Generate JWT token
            const token = jwt.sign({ sub: user._id }, 'your_secret_key');
            return res.json({ token });
        });
    })(req, res, next);
}

module.exports = { registration, login }
