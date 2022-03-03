const User = require('../controllers/user.controller')

module.exports = (app) => {
    // find all users
    app.get("/api/users", User.findAll);
    // create a user
    app.post("/api/users", User.create);
}