const { createUsersTable, loginUser, createUserData } = require('../controller/users');

const express = require('express');

const router = express.Router();

router.post("/sign-up", createUserData);

router.post("/login", loginUser);

module.exports = router;