const express = require("express");

const {SERVER,BOT} = require("./configs");

const {setWebhook} = require("./tgapi");
const {getBotInfo,getWebhookInfo} = require("./tgapi");

const {processNewMember,processLeftMember,handleMigraton,botAddToNewChat} = require("./helpers/memberEntryExit");

require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/",async (req,res)=>{
    const info = await getBotInfo();
    const webhookinfo = await getWebhookInfo();
    res.send({
        info,
        webhookinfo
    });
})

app.post("/updates",async (req,res) => {
    console.log("Message:",req.body);
    console.log("Entities:",req.body.message.entities);
    
    let msg = req.body.message;

    // Bot/User added to chat
    if(msg.new_chat_member){
        await processNewMember(msg);
        return;
    }

    // Bot added to grp while it was created
    if(msg.group_chat_created){
        await botAddToNewChat(msg);
    }

    // Bot/User removed from chat
    if(msg.left_chat_member){
        await processLeftMember(msg);
        return;
    }

    // Group -> Supergroup
    if(msg.migrate_to_chat_id){
        await handleMigraton(msg);
        return;
    }

    // 2nd Msg When Group -> Supergroup | Ignore this
    if(msg.migrate_from_chat_id){
        return;
    }

    
    
    res.sendStatus(200);
    
})

app.listen(SERVER.PORT,async ()=>{
    console.log("Server Started");
    await setWebhook('/updates');
})