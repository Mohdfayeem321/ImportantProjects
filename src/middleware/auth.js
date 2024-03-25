const jwt = require('jsonwebtoken');

// // Middleware to verify JWT token
// const authenticateToken = async (req, res, next) => {
//     const authHeader = req.headers['x-api-key'];
//     console.log(authHeader);
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token == null) return res.status(401).json({ message: 'Unauthorized' });
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: 'Forbidden' });
//         req.user = user;
//         next();
//     });
// };


const authenticateToken = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        console.log(token);
        if (!token) return res.status(401).json({ message: 'Unauthorized' });
        jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
            if (error) {
                if (error) return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = decoded
            next()
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { authenticateToken };