const express = require('express');

const router = express.Router();

const { authenticateToken } = require('../middleware/auth')
const { addCartProducts, removeProduct } = require("../controller/cartController");
const { getProducts, createProduct } = require("../controller/productController");
const { signUp, signIn } = require("../controller/userController");

router.post('/signup', signUp)

router.post('/signin', signIn)

router.post('/product', createProduct)

router.get('/product', getProducts)

router.post('/cart/add', authenticateToken, addCartProducts)

router.post('/cart/remove', authenticateToken, removeProduct)

module.exports = router;