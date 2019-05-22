const express = require("express");

const {SERVER} = require("./configs/configs");

const {setWebhook} = require("./tgapi");
const {getBotInfo,getWebhookInfo} = require("./tgapi");

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

app.post("/updates",(req,res) => {
    console.log(req.body);
    res.sendStatus(200);
    
})

app.listen(SERVER.PORT,async ()=>{
    console.log("Server Started");
    await setWebhook('/updates');
})