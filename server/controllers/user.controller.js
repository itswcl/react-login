const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// require dotenv
require('dotenv').config();


module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(users => res.json({ users: users }))
            .catch(err => res.json({ message: "❌❌❌ Something Wrong in find users ❌❌❌", error: err }))
    },

    create: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ user: user })
                console.log(user)
                // we do the same when we registered a user we giving JWT token and cookie stored
                const userToken = jwt.sign({
                    id: user._id
                }, `${process.env.ACCESS_TOKEN_SECRET}`)

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
        // console.log(req.body);
        const user = await User.findOne({ email: req.body.email })
        if (user === null) return res.sendStatus(400);
        // console.log(user);

        // if we pass the email test now we need to check the password
        // compare the bcrypt hash password and the one we stored
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        // console.log(correctPassword);

        // if password is correct we giving the token and cookie for the user
        // const payload = { id: user_id }; add direct to userToken
        // JWT token store
        const userToken = jwt.sign(
            { id: user._id },
            `${process.env.ACCESS_TOKEN_SECRET}`)
        res.json({ userToken: userToken })

        // cookie store
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}

