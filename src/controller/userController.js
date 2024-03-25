const jwt = require('jsonwebtoken');
const User = require('../model/user');

const signUp = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ status: 201, message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || password != user.password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        req.headers["x-api-key"] = token;
        res.json({ status: 200, token: token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { signUp, signIn };