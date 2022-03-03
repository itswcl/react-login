const User = require('../models/user.model')
const jwt = require('jsonwebtoken')


module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(users => res.json({users: users}))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in find users ❌❌❌", error: err }))
    },

    create: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({user: user});
                console.log("success register")
            })
            .catch(err => res.status(400).json({ message: "❌❌❌ Something Wrong create user ❌❌❌", error: err }))
    },

    login: (req, res) => {
        const payload = {id: user_id};

        jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)
    }
}

