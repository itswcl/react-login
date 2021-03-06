const mongoose = require('mongoose');
// import bcrypt
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First name is required"]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        // email validation
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }

}, { timestamps: true });

// a virtual storage for confirmPassword. only one time use
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

// compare password and confirmPassword if same
UserSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
})

// hash the password
UserSchema.pre('save', function(next) {
    // bcrypt will create sale to combine 10 fine value of password
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
})


const User = mongoose.model("User", UserSchema);
module.exports = User;