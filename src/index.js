const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const route = require('./routes/routes');

// Load environment variables from .env file

dotenv.config();

// Import routes
// Create Express app

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI);

// Check database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

// Routes
app.use('/', route)
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
