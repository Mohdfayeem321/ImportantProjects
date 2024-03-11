const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route.js');

const app = express();

// Load environment variables
const dotenv = require('dotenv').config();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.error("MongoDb connection error:", err));

// Routes
app.use('/', route);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`);
});
