const {Chats} = require("../database/models");

addChat = (chat) => {
    const chatEntry = new Chat({
        id: chat.id,
        ctype: chat.type,
        isAdmin: false
    });
    await chatEntry.save();
}

removeChat = (chat) => {
    
}

updateChat = async () => {

}

module.exports = {
    addChat,
    removeChat,
    updateChatId
}