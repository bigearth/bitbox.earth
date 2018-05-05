var express = require('express');
var app = express();
let path = require('path');

// serve static assets normally
app.use(express.static(__dirname + '/build'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(3000);
