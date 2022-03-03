const User = require('../models/user.model')

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({user: user});
            })
            .catch(err => res.json({error: err}))
    }
}