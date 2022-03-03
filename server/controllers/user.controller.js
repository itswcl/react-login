const User = require('../models/user.model')
const jwt = require('jsonwebtoken')


module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(users => res.json({ users: users }))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in find users ❌❌❌", error: err }))
    },

    create: (req, res) => {
        User.create(req.body)
            .then(user => {
                // res.json({ user: user });
                // console.log("success register")
                // we do the same when we registered a user we giving JWT token and cookie stored
                const userToken = jwt.sign({
                    id: user_id
                }, process.env.ACCESS_TOKEN_SECRET)

                res.cookie(
                    "usertoken",
                    userToken,
                    secret,
                    { httpOnly: true })
                    .json({
                        message: "success log in"
                    })
            })
            .catch(err => res.status(400).json({ message: "❌❌❌ Something Wrong create user ❌❌❌", error: err }))
    },

    // remember to add async for await use
    login: async (req, res) => {
        // await the User to findOne see the user exist
        const user = await User.findOne({ email: req.body.email })
        if (user === null) return res.sendStatus(400);

        // if we pass the email test now we need to check the password
        // compare the bcrypt hash password and the one we stored
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        // if password is correct we giving the token and cookie for the user
        // const payload = { id: user_id }; add direct to userToken
        // JWT token store
        const userToken = jwt.sign({ id: user_id }, process.env.ACCESS_TOKEN_SECRET, /* optional {expiresIn: "1h"}*/)
        res.json({ userToken: userToken })

        // cookie store
        res.cookie(
            "userToken",
            userToken,
            secret,
            { httpOnly: true })
            .json({
                message: "success log in"
            })
    },

    logout: (req, res) => {
        res.clearCookie('userToken');
        res.sendStatus(200;)
    }
}

