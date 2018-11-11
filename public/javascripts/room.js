
// we need to install socket.io in node with
// npm install --save socket.io

// 
// var socket = io();
// console.log('the socket is')
// console.dir(socket)

socket.on('post story', function(msg){
     $('#storyarea').append($('<li>').text(msg));
   });


const storyinput = document.getElementById('storyinput')


storyinput.click(function(event){
 console.log('user sent their story!')
 const input = storyinput.value
 socket.emit('post story', input);
})
