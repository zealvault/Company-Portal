var express = require('express');
var app = express();
app.use(express.static('./'));
var server = app.listen(2112, function(){
var host = server.address().address;
var port = server.address().port;
console.log("hello world!!");
}
);
