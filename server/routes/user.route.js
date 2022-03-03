const User = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config')

module.exports = (app) => {
    // find all users
    // app.get("/api/users", authenticate, User.findAll);
    app.get("/api/users", User.findAll);
    // create a user
    app.post("/api/users", User.create);
    app.post("/api/user/login", User.login);
    app.get("/api/user/logout", User.logout);
}