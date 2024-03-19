const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    username: String,
    password: String,
});


module.exports = mongoose.model('Registration', registrationSchema);
