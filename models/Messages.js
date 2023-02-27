const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        message: {
            type: String,
            trim: true,
        },
        chat: {
            type: mongoose.Types.ObjectId,
            ref: "Chat",
        },
    },
    {
        timestamps: true,
    }
);

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
