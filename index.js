var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var exp = require("express");
var app = exp();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var srvWS=require('./servidor/servidorWS');
var ws=new srvWS.ServidorWS();

var modelo = require("./servidor/modelo");

var centro = new modelo.Centro();


app.set('port', (process.env.PORT || 5000));

app.use(exp.static(__dirname + "/public"));
//app.use(exp.static(__dirname + "/cliente_Prueba"));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/verEstudiantes", function (request, response) {
  centro.mostrarEstudiantes(function (res) {
    response.send(res);
    return res;
  })
});

app.post("/registrarEstudiante", function (request, response) {
  var est = request.body;
  centro.agregarEstudiante(est.nombre, est.apellidos, est.clase, est.email, est.contrasena, function (res) {
    if (res != '') {
      console.log("Estudiante agregado");
      response.send(res);
    }
  })
});

app.put("/actualizarEstudiante", function (request, response) {
  var est = request.body;
  console.log(est);
  centro.modificarEstudiante(est, function (res) {
    response.send(res);
  })
});

app.delete("/eliminarEstudiante", function (request, response) {
  var est = request.body;
  console.log(est._id);
  centro.borrarEstudiante(est, function (res) {
    response.send(res);
  });
});

app.get("/verActividades", function (request, response) {
  centro.mostrarActividades(function (res) {
    response.send(res);
    return res;
  })
});

app.post("/verActividadesComenzadas", function (request, response) {
  var alumno = request.body;
  centro.mostrarActividadListasxAlumno(alumno._id,function(res){
    console.log("Actividades abiertas");
    console.log(res);
    response.send(res);
  })
});

app.post("/registrarActividad", function (request, response) {
  var act = request.body;
  centro.agregarActividad(act.nombre,act.profesor,act.alumnos,function(res){
    if (res != '') {
      console.log("Actividad agregada");
      response.send(res);
    }
  })
});

app.post("/actualizarActividad", function (request, response) {
  var act = request.body;
  centro.editarActividad(act,function(res){
    if (res != '') {
      console.log("Actividad actualizada");
      response.send(res);
    }
  })
});

//actualizarActividad

app.delete("/eliminarActividad", function (request, response) {
  var act = request.body;
  console.log(act._id);
  centro.borrarActividad(act, function (res) {
    response.send(res);
  });
});

app.post("/estudianteIniciarSesion", function (request, response) {
  var est = request.body;
  //console.log(est);
  centro.iniciarSesion(est.email,est.contrasena,function(res){
    response.send(res);
  })
});


server.listen(app.get('port'), function () {
  console.log('Node app se está ejecutando en el puerto', port);
});

ws.lanzarSocketSrv(io,centro);