const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a Username"],
        trim: true,
        minlength: 4,
    },
    avatar: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        required: [true, "please provide a email"],
        unique: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: "Please Provide Email",
        },
    },
    password: {
        type: String,
        required: [true, "Please Provide Password"],
        minlength: 8,
        trim: true,
    },
    bio: {
        type: String,
        default: "Hello There! I am using iChatApp",
        minlength: 2,
        maxlength: 250,
    },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
