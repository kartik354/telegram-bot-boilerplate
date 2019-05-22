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
            APIURL: "https://api.telegram.org/bot",
            ID: process.env.BOT_ID
        },
        HOSTURL: process.env.HOSTURL,
        DATABASE: {
            USERNAME: process.env.DB_USERNAME,
            PASSWORD: process.env.DB_PASSWORD,
            HOST: process.env.DB_HOST,
            NAME: process.env.DB_NAME
        }
    }    
}

module.exports = config;