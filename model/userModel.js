const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],

    },
    email: {
        type: String,
        required:[true, "Please add your email"],
        unique: [true, "user email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please add password"],
    }, 
},    { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);