const User = require('../controllers/user.controller')

module.exports = (app) => {
    app.post("/api/users", User.register)
}