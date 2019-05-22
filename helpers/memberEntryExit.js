const {BOT} = require("../configs");


botAddToNewChat = async (chat) => {
    console.log("Bot Added To New Chat");
}

newMemberToChat = async (msg) => {
    console.log("New Member added to Chat");
}

processNewMember = async (msg) => {
    if(msg.new_chat_member.id == BOT.ID){
        await botAddToNewChat(msg.chat);
    }
    else {
        await newMemberToChat(msg);
    }
}

botRemoveFromChat = async (chat) => {
    console.log("Bot removed from Chat");
}

memberRemoveFromChat = async (msg) => {
    console.log("Member removed from Chat");
}


processLeftMember = async (msg) => {
    if(msg.left_chat_member.id == BOT.ID){
        await botRemoveFromChat(msg.chat);
    }
    else {
        await memberRemoveFromChat(msg);
    }
}

handleMigraton = async (msg) => {
    // Update Chat id & type in store atleast
    console.log("Chat Migrated");
    
}

module.exports = {
    botAddToNewChat,
    newMemberToChat,
    processNewMember,
    processLeftMember,
    handleMigraton
}