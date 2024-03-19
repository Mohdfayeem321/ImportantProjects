// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/route');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/', route)
