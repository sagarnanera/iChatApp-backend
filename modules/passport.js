const JwtStrategy = require("passport-jwt").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model('Users');

const opts = {};

opts.jwtFromRequest = (req) => {
    var token = null;
    if (req && req.cookies['token']) {
        token = req.cookies['token'];
    }
    return token;
};

opts.secretOrKey = "ThisIsSecretKeyForRealTimeChatApp";

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id).select("-password")
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false, info = {
                        errors: "User does not exists."
                    });
                })
                .catch(err => {
                    console.log(err); return done(err, false, {
                        errors: "authentication error."
                    })
                });
        })
    );
};