//Making connection

const soket =  io.connect('http://localhost:4000');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

btn.addEventListener('click',function(){
    soket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

//Listen for chat'

soket.on('chat',function(data){
    output.innerHTML +='<p><strong>'+ data.handle+':</strong>'+data.message+'</p>'
});