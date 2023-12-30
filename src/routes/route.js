const express = require('express');

const router = express.Router();

const { createUser, userLogin, getUser, updateUserData, deleteUser } = require('../controllers/user');

const { Authentication, Authorization } = require('../middleware/auth');

const multer = require('multer');

const upload = multer();

//============ Sign Up ==============//

router.post("/signup", createUser);

//============ Login  ==============//

router.post("/login", userLogin);

//============ Get User Details ==============//

router.get("/auth/user", Authentication, Authorization, upload.single('file'), getUser);

//============ Update User Details ==============//

router.put("/auth/user", Authentication, Authorization, updateUserData);

//============ Delete User ==============//

router.delete("/auth/user", Authentication, Authorization, deleteUser);


router.all("/**", (req, res) => {
    return res.status(404).send({ status: false, msg: "This API you request is not Available!" })
});

//===================== Module Export =====================//

module.exports = router;  