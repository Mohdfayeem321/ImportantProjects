// authentication.js
const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
// const User = require('./models/User');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_secret_key'
};

passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.sub);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err, false);
    }
}));


// router.post('/login',

const login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }

            // Generate JWT token
            const token = jwt.sign({ sub: user._id }, 'your_secret_key');
            return res.json({ token });
        });
    })(req, res, next);
}


module.exports = { passport, login }
