function ServidorWS() {
    this.enviarRemitente = function (socket, mens, datos) {
        socket.emit(mens, datos);
    }
    this.enviarATodos = function (io, nombre, mens, datos) {
        io.sockets.in(nombre).emit(mens, datos);
    }
    this.enviarATodosMenosRemitente = function (socket, nombre, mens, datos) {
        socket.broadcast.to(nombre).emit(mens, datos)
    };
    this.enviarCliente = function (io, socket, id_socket, mens, datos) {
        console.log(io.sockets);
        io.sockets.in(id_socket).emit(mens, datos);
    }
    this.lanzarSocketSrv = function (io, centro) {
        var cli = this;
        io.on('connection', function (socket) {
            //socket.join('123');
            console.log("Nueva conexión");

            socket.on('soyEstudiante',function(estudiante){
                //socket.join("estudiantes");
                socket.join(estudiante._id);
                //console.log("El id del estudiante es: "+estudiante._id);
                console.log("Conexion asignada al estudiante");
            })
            socket.on('soyProfesor',function(){
                socket.join("profesores");
                console.log("Conexion asignada al profesor");
            })
            socket.on('abrirActividad',function(actividad){
                //console.log(actividad);
                socket.join(actividad._id);
                console.log("Conexion asignada a la actividad");
            })
            socket.on('meConectoActividad',function(actividad,estudiante){
                //console.log(actividad);
                cli.enviarATodos(io, actividad._id, 'seHaConectado',estudiante);
            });
            socket.on('listoParaRecibirDatos',function(actividad){
                for(let i =0;i<actividad.alumnos.length;i++){
                    cli.enviarATodos(io, actividad.alumnos[i].estudiante._id, "enviaDatos", actividad);
                }
            })
            socket.on('meDesconectoActividad',function(actividad,estudiante){
                cli.enviarATodos(io,actividad._id, 'seHaDesconectado',estudiante);
            })

            socket.on('crearActividadLista', function (actividad) {

                centro.anadirActividadLista(actividad, function (u) {
                    cli.enviarRemitente(socket, "actividadAnadida", u);
                    //console.log(u.alumnos);
                    //console.log(u.alumnos[i].estudiante._id);
                    //socket.join("profesor");
                    for(let i =0;i<u.alumnos.length;i++){
                        cli.enviarATodos(io, u.alumnos[i].estudiante._id, "actividades", u);
                    }
                    
                })

                /*juego.crearPartida(nombrePartida, nick, function (partida) {
                    cli.enviarRemitente(socket, "partidaCreada", partida);
                    socket.join(partida.idp);
                });*/
            });

            socket.on('borrarActividadLista', function (actividad) {
                centro.borrarActividadLista(actividad, function (u) {
                    cli.enviarRemitente(socket, "actividadBorrada", u);
                    for(let i =0;i<u.alumnos.length;i++){
                        cli.enviarATodos(io, u.alumnos[i].estudiante._id, "borrarActividad", u);
                    }
                    //cli.enviarATodos(io, "estudiantes", "borrarActividad", u);
                });
            })

            socket.on('envioDeDatos',function(datos,actividad){
                //console.log(datos);
                if(actividad){
                    cli.enviarATodos(io, actividad._id, "recepcionDatos", datos);
                }
                
            })

            socket.on('disconect',function(actividad,estudiante){
                cli.enviarATodos(io,actividad._id, 'seHaDesconectado',estudiante);
            })

            /*
            this.socket.emit('crearActividadLista',this.id,actividad,function(){
			    console.log("Actividad: "+actividad._id+" está lista.");
		    })
            */

            /*
            socket.on('crearPartida', function (nick, nombrePartida) {
                juego.crearPartida(nombrePartida, nick, function (partida) {
                    cli.enviarRemitente(socket, "partidaCreada", partida);
                    socket.join(partida.idp);
                });
            });
            socket.on('obtenerPartidas', function () {
                juego.obtenerPartidasInicial(function (partidas) {
                    cli.enviarRemitente(socket, "partidas", partidas);
                });
            });
            socket.on("unirAPartida", function (idp, nick) {
                var partida = juego.unirAPartida(idp, nick);
                socket.join(idp);
                cli.enviarRemitente(socket, "unido", partida);
                cli.enviarATodosMenosRemitente(socket, idp, "nuevoJugador", partida.jugadores);
            });
            socket.on("salir", function (idp, nick) {
                var partida = juego.salir(idp, nick);
                cli.enviarRemitente(socket, "saliste");
                if (partida != undefined) {
                    cli.enviarATodosMenosRemitente(socket, idp, "saleJugador", partida.jugadores);
                }
            });
            socket.on("preparado", function (idp, nick) {
                juego.jugadorPreparado(idp, nick, function (partida) {
                    cli.enviarATodos(io, idp, "otropreparado", partida.jugadores);
                    if (partida.fase.nombre == "jugando") {
                        cli.enviarATodos(io, idp, "aJugar", { numJugadores: partida.numJugadores, jugadores: partida.jugadores });
                    }
                });
            });

            socket.on("enviarResultado", function (idp, nick) {
                juego.enviarResultado(idp, nick, function (partida) { //function(resultados) 
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                    }
                    else {
                        cli.enviarRemitente(socket, "anotado"); // ,resultados);
                    }
                });
            });
            socket.on("muereEnemigo", function (idp, nick, enemy) {
                juego.muereEnemigo(idp, nick, enemy, function (partida) {
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                    }
                    else {
                        cli.enviarRemitente(socket, "anotado"); // ,resultados);
                    }
                })
            });
            socket.on("jugadorHerido", function (idp, nick) {
                juego.jugadorHerido(idp, nick, function (partida) {
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                        juego.anotarResultado(partida, function () { });

                    }
                    else {
                        cli.enviarRemitente(socket, "sigueVivo"); // ,resultados);
                    }
                })
            });
            socket.on("mover", function (idp, nick, operacion, posicion) {
                cli.enviarATodosMenosRemitente(socket, idp, "mover", operacion, posicion);
            });
            */
        });
    }
}

module.exports.ServidorWS = ServidorWS;