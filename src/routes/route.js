const express = require('express');

const router = express.Router();

const { getPost, postCount, registration } = require('../controller/postController');

const { passport, login } = require('../middleware/authentication.js');


router.post('/register', registration);

module.exports = router;
