const express = require('express');

const socket = require('socket.io');

const app = express();


//Setting up the port
const server = app.listen(4000,function(){
    console.log("LISTENING AT PORT 4000");
});

//Static Files
app.use(express.static('public'));

//Socket Stup
var io = socket(server);

io.on('connection',function(socket){
    console.log("SOCKET HAS BEEN MADE");
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });
});



