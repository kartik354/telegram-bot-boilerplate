const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    id: String,
    ctype: Number,
    isAdmin: Boolean
})

module.exports = mongoose.model("chats" , chatSchema);