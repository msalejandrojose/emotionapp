var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 
var server = require('http').Server(app);


app.set('port', (process.env.PORT || 5000));

app.use(exp.static(__dirname + "/cliente/dist"));
//app.use(exp.static(__dirname + "/cliente_Prueba"));

var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

server.listen(app.get('port'), function() {
	console.log('Node app se está ejecutando en el puerto', port);
  });