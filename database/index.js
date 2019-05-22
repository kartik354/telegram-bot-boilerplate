const mongoose = require("mongoose");
const { DATABASE: DB } = require("../configs");

// Import DB Models
const models = require("./models");

mongoose.connect(`mongodb+srv://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}/${DB.NAME}`, { useNewUrlParser: true })
    .then(() => {
        console.log("Connection successful to Database");
    })
    .catch((err) => {
        console.log("Mongoose connection error: ", err);
        process.exit();
    });

mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection is open");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection: " + err + " error");
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection has been disconnected");
});

mongoose.Promise = Promise;

module.exports = models;