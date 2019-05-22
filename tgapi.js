const axios = require("axios");

const { BOT, HOSTURL } = require("./configs")

const api = axios.create({
    baseURL: BOT.APIURL + BOT.APIKEY
})

// Sets webhook to url
setWebhook = async (route) => {
    try {
        const response = await api.post('/setWebhook', {
            url: HOSTURL + route
        })

        console.log(response.data);

    }
    catch (e) {
        console.log(e);
    }
}

// Returns Bot info
getBotInfo = async () => {
    try {
        const info = await api.get('/getMe');
        console.log(info.data);
        
        return info.data;
    } catch (error) {
        console.log(error);
    }
}

// Returns Webhook Info
getWebhookInfo = async () => {
    try {
        const webhookinfo = await api.get('/getWebhookInfo');
        return webhookinfo.data;
    } catch (error) {
        console.log(error);    
    }
}


module.exports = {
    getBotInfo,
    getWebhookInfo,

    setWebhook
}