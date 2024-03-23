const express = require('express');

const router = express.Router();

const { authenticateToken } = require('../middleware/auth')
const { getCartDetails, addCartProducts, removeProduct } = require("../controller/cartController");
const { getProducts } = require("../controller/productController");
const { signUp, signIn } = require("../controller/userController");

router.post('/signup', signUp)

router.post('/signin', signIn)

router.post('/products', getProducts)

router.post('/products', addCartProducts)


module.exports = router;