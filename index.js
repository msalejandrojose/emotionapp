var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var srvWS=require('./servidor/servidorWS.js');
var ws=new srvWS.ServidorWS();
var modelo=require("./servidor/modelo.js");

var juego=new modelo.Juego();


app.set('port', (process.env.PORT || 5000));
app.use(exp.static(__dirname + "/cliente"));

var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//var blinkstick = require('blinkstick');
//var led = blinkstick.findFirst();

app.get("/encederLed",function(request,response){
	//led.blink('random', function(){
    console.log("Se ha encendido el ledd");
  //});
});

// app.get("/",function(request,response){
// 	response.send("hola");
// });

app.get("/agregarUsuario/:nick",function(request,response){
	var nick=request.params.nick;
	juego.agregarUsuario(nick,function(usr){
		response.send(usr);
	});
});

app.get("/comprobarUsuario/:nick",function(request,response){
	var nick=request.params.nick;
	juego.obtenerUsuario(nick,function(usr){
		response.send(usr);
	})
});

app.get("/crearPartida/:nombrePartida/:nick",function(request,response){
	var nick=request.params.nick;
	var nombrePartida=request.params.nombrePartida;
	console.log("Usuario "+nick+" crea la partida "+nombrePartida);
	juego.crearPartida(nombrePartida,nick,function(partida){
		response.send(partida);
	});
});

app.get("/obtenerPartidas",function(request,response){
	juego.obtenerPartidas(function(partidas){
		response.send(partidas);
	})
});

app.get("/obtenerUsuarios",function(request,response){
	juego.obtenerUsuarios(function(usuarios){
		response.send(usuarios);
	})
});

app.get("/unirAPartida/:nombrePartida/:nick",function(request,response){
	var nick=request.params.nick;
	var nombrePartida=request.params.nombrePartida;
	console.log("Usuario "+nick+" se une a la partida "+nombrePartida);
	var partida={};
	partida=juego.unirAPartida(nombrePartida,nick);
	response.send(partida);
});

app.get("/obtenerJugadores/:nombrePartida",function(request,response){
	var nombrePartida=request.params.nombrePartida;
	juego.obtenerJugadoresPartida(nombrePartida,function(jugadores){
		response.send(jugadores);
	})
});

app.get("/cerrarSesion/:nick",function(request,response){
	var nick=request.params.nick;
	//var data={res:"nook"};
	juego.cerrarSesion(nick,function(data){
		response.send(data);
	});
});

app.get("/obtenerResultados",function(request,response){
	console.log("Estoy obteniendo resultados");
	juego.obtenerResultados(function(resultados){
		response.send(resultados);
	});
});

app.get("/obtenerResultadosCriterio/:nick",function(request,response){
	console.log("Estoy obteniendo resultados");
	var nick=request.params.nick;
	juego.obtenerResultadosCriterio(nick,function(resultados){
		response.send(resultados);
	});
});

app.post("/registrarUsuario",function(request,response){
	var usr = request.body;
	juego.registrarUsuario(usr,function(res){
		if(res!=''){
			console.log("Usuarios Registrado: "+res.nick);
		}
		response.send(res);
	});
});

app.post("/iniciarUsuario",function(request,response){
	var usr = request.body;
	juego.iniciarUsuario(usr,function(res){
		if(res.nick!=''){
			console.log("Inicio de Sesion: "+res.nick);
		}
		response.send(res);
	});
});

app.put("/actualizarUsuario",function(request,response){
    juego.actualizarUsuario(request.body,function(result){
            response.send(result);
        });
});

app.delete("/eliminarUsuario/:uid",function(request,response){
    var uid=request.params.uid;
    juego.eliminarUsuario(uid,function(result){
        response.send(result);
    });
});



//console.log("Servidor escuchando en "+host+":"+port);
//app.listen(port,host);
/*server.listen(port, function() {
  console.log('Node app se está ejecutando en el puerto', port);
});*/

server.listen(app.get('port'), function() {
	console.log('Node app se está ejecutando en el puerto', port);
  });
  

ws.lanzarSocketSrv(io,juego);