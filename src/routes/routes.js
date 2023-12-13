const { createUserData } = require('../controller/users');

const express = require('express');

const router = express.Router();

router.post("/sign-up", createUserData);

module.exports = router;
