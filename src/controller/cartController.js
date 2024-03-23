const User = require('../model/user');


// Cart
// app.get('/api/cart', authenticateToken,

const getCartDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// app.post('/api/cart/add', authenticateToken,

const addCartProducts = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const user = await User.findById(req.user.id);
        user.cart.push({ productId, quantity });
        await user.save();
        res.status(201).json({ message: 'Product added to cart' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// app.delete('/api/cart/remove/:productId', authenticateToken,

const removeProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const user = await User.findById(req.user.id);
        user.cart = user.cart.filter(item => item.productId !== productId);
        await user.save();
        res.json({ message: 'Product removed from cart' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getCartDetails, addCartProducts, removeProduct }


