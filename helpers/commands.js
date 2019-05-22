const event = require("events")
const emitter = new event.EventEmitter();

/*
    Event Listeners
    All event listeners should come before and then events shd be dispatched on them
*/

emitter.on('test',()=>{
    console.log("Test Event Emitted");
})

processCommand = async (msg) => {
    console.log("Command Found");
    if(msg.text === "/test"){
        emitter.emit('test');
    }
}


module.exports = {
    processCommand,
}