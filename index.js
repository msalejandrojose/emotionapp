var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var exp = require("express");
var secure = require('ssl-express-www');
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
app.use(secure);

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
  centro.agregarActividad(act.nombre,act.profesor,act.fecha,act.alumnos,act.resumen,act.clase,function(res){
    if (res != '') {
      console.log("Actividad agregada");
      //console.log(res);
      response.send(res);
    }
  })
});

app.post("/actualizarActividad", function (request, response) {
  var act = request.body;
  //console.log(act);
  centro.editarActividad(act,function(res){
    if (res != '') {
      console.log("Actividad actualizada");
      console.log(res);
      response.send(res);
    }
  })
});

app.delete("/eliminarActividad", function (request, response) {
  var act = request.body;
  console.log(act._id);
  centro.borrarActividad(act, function (res) {
    response.send(res);
  });
});

//CRUD Clases

app.get("/verClases", function (request, response) {
  centro.mostrarClases(function (res) {
    response.send(res);
    return res;
  })
});

app.post("/registrarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.agregarClase(clase,function(res){
    if (res != '') {
      console.log("Clase creada");
      response.send(res);
    }
  })
});

app.post("/actualizarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.editarClase(clase,function(res){
    if (res != '') {
      console.log("Clase actualizada");
      response.send(res);
    }
  })
});

app.delete("/eliminarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.borrarClase(clase,function(res){
    if (res != '') {
      console.log("Clase borrada");
      response.send(res);
    }
  })
});

app.post("/agregarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.crearActividadEnClase(clase,act,function(res){
    if (res != '') {
      console.log("Actividad creada y añadida");
      response.send(res);
    }
  })
});

app.post("/editarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.editarActividadEnClase(clase,act,function(res){
    if (res != '') {
      console.log("Actividad editada");
      response.send(res);
    }
  })
});

app.delete("/borrarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.borrarActividadEnClase(clase,act,function(res){
    if (res != '') {
      console.log("Actividad borrada");
      response.send(res);
    }
  })
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