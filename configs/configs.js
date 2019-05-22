let config;

if(process.env.NODE_ENV !== "production"){
    config = require("./config-local")
}
else {
    config = {
        SERVER: {
            HOST: process.env.SERVER_HOST,
            PORT: process.env.SERVER_PORT
        },
        BOT: {
            APIKEY: process.env.BOT_APIKEY,
            APIURL: "https://api.telegram.org/bot"
        },
        HOSTURL: process.env.HOSTURL
    }    
}

module.exports = config;