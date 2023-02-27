
const passport = require("passport");


const authenticateJwt = (req, res, next) => {
    passport.authenticate('jwt', function (err, user, info) {
        if (err) {
            console.log(err);
            return next(err);
        };
        if (info) {
            return res.status(401).send({ errors: info.message });
        };
        if (!user) {
            return res.status(401).send({ errors: 'User is not authenticated.' });
        }
        req.user = user;
        next();
    })(req, res, next);
}

export default authenticateJwt;