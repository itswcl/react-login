// add jwt
const jwt = require("jsonwebtoken");

// export module
module.exports.authenticate = (req, res, next) => {
    jwt.verify(
        req.cookies.usertoken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, payload) => {
            if (err) {
                res.status(401).json({verified: false});
            } else {
                next();
            }
        });
}
