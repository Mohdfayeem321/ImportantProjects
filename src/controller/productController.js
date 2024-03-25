const Product = require('../model/products');
// Products

const createProduct = async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const newProduct = new Product({ name, category, price });
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// app.get('/api/products',
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getProducts, createProduct };