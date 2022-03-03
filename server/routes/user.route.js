const User = require('../controllers/user.controller')

module.exports = (app) => {
    app.get("/api/users", User.findAll);
    app.post("/api/users", User.create);
}