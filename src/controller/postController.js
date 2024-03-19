// routes/posts.js
const passport = require('../middleware/authentication.js');
const Post = require('../models/post.js');
const Registration = require('../models/registration.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Define CRUD routes here
// routes/posts.js
// Add a route to retrieve posts by location
// router.get('/posts/nearby', passport.authenticate('jwt', { session: false }),
// router.get('/post-count',

const registration = async (req, res) => {

    try {
        const { username, password } = req.body;
        if (!username || username === undefined || !password || password === undefined) return res.json({ message: 'fill the username or password' })
        // Check if user already exists
        let user = await Post.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new Registration({ username, password });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await Registration.save();

        res.json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const postCount = async (req, res) => {
    try {
        const activeCount = await Post.countDocuments({ active: true });
        const inactiveCount = await Post.countDocuments({ active: false });
        res.json({ activeCount, inactiveCount });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}


const getPost = async (req, res) => {

    const { latitude, longitude, radius } = req.query;
    try {
        const posts = await Post.find({
            location: {
                $nearSphere: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    },
                    $maxDistance: parseInt(radius) * 1000 // convert to meters
                }
            }
        }).populate('createdBy');
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}


module.exports = { getPost, postCount, registration }
