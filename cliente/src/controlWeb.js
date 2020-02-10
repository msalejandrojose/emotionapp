
var nick;

function comprobarUsuario() {
	if ($.cookie("usr")) {
		rest.comprobarUsuario();
	}
	else {
		mostrarAgregarUsuario();
	}
}

$("#encenderLed").click(function () {
	console.log("Vamos a encender el led");
	//rest.encenderLed();

});

/*function mostrarAgregarUsuario(){
	$('#mLP').remove();
	$('#mP').remove();
	$('#mCP').remove();
	var cadena="<div id='mAU'>";
	cadena=cadena+"<h3>Usuario</h3>";
	cadena=cadena+"<div class='row'><div class='col-sm-6'>";
	cadena=cadena+'<input id="nombre" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';		
	cadena=cadena+"</div><div class='col-sm-6'>"
	cadena=cadena+'<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Iniciar Usuario</button>';	
	cadena=cadena+"</div></div>";

	$('#inicio').append(cadena);
	$('#inicioBtn').on('click',function(){
        var nombre=$('#nombre').val();
        if (nombre==""){
        	nombre="Neutro";
        }
        rest.agregarUsuario(nombre);
     });
}*/

function mostrarAgregarUsuario() {
	$('#mLP').remove();
	$('#mP').remove();
	$('#mCP').remove();
	$('#mAU').remove();
	var cadena = "<div id='mAU'>";
	cadena = cadena + "<h3>Crear Usuario</h3>";
	cadena = cadena + "<h3>Email</h3>";
	cadena = cadena + "<div class='row'><div class='col-sm-12'>";
	cadena = cadena + '<input id="email" type="email" class="form-control" name="email" placeholder="Email">';
	cadena = cadena + "<h3>Confirmacion Email</h3>";
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<input id="emailConfirm" type="email" class="form-control" name="emailConfirmacion" placeholder="Confirmar Email">';
	cadena = cadena + "<h3>Nick</h3>";
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<input id="nick" type="text" class="form-control" name="nick" placeholder="Nick">';
	cadena = cadena + "<h3>Contraseña</h3>";
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<input id="contrasena" type="password" class="form-control" name="contrasena" placeholder="Contraseña">';
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<button type="button" id="registrar" class="btn btn-primary btn-md">Crear Usuario</button>';
	cadena = cadena + "</div></div>";

	cadena = cadena + "<h3>Inicio de Sesion</h3>";
	cadena = cadena + "<h3>Email</h3>";
	cadena = cadena + "<div class='row'><div class='col-sm-12'>";
	cadena = cadena + '<input id="IS_email" type="IS_email" class="form-control" name="email" placeholder="Email">';
	cadena = cadena + "<h3>Contraseña</h3>";
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<input id="IS_contrasena" type="password" class="form-control" name="contrasena" placeholder="Contraseña">';
	cadena = cadena + "</div><div class='col-sm-12'>"
	cadena = cadena + '<button type="button" id="InicioSesion" class="btn btn-primary btn-md">Iniciar Usuario</button>';
	cadena = cadena + "</div></div>";

	$('#inicio').append(cadena);
	$('#registrar').on('click', function () {
		console.log("Vamos a encender el led");
		rest.encenderLed();
		var email = $('#email').val();
		var emailC = $('#emailConfirm').val();
		var nick = $('#nick').val();
		var contrasena = $('#contrasena').val();
		if (email == "") {
			email = "Neutro";
		}
		//rest.agregarUsuario(nombre);
		if (email != emailC) {
			mostrarAviso("Confirmacion del email no valida");
			mostrarAgregarUsuario();
		} else {
			/*rest.registrarUsuarios(email, emailC, nick, contrasena,function(r){
				console.log("Respuesta: "+r);
				if(r=="ok"){
					rest.agregarUsuario(nick);
				}else{
					//mostrarAviso("Nick no valido");
					mostrarAgregarUsuario();
				}
			});*/
			rest.registrarUsuarios(email, emailC, nick, contrasena);
		}

	});

	$('#InicioSesion').on('click', function () {
		var email = $('#IS_email').val();
		var contrasena = $('#IS_contrasena').val();
		if (email == "") {
			email = "Neutro";
		}
		//rest.agregarUsuario(nombre);
		rest.iniciarUsuario(email, contrasena, function (response) {
			if (response.res == 'ok') {

			}
		});
	});
}

function mostrarUsuario(data) {
	$('#mAU').remove();
	ws = new ClienteWS(data.nick);
	ws.ini();
	nick = data.nick;
	mostrarCrearPartida(data.nick);
}

function mostrarAviso(msg) {
	alert(msg);
	$('#nombre').val("Usa otro nick");
}

function mostrarCrearPartida(nick) {
	$('#mCP').remove();
	$('#mLP').remove();
	$('#mP').remove();
	var cadena = "<div id='mCP'>";
	cadena = cadena + "<h3>Bienvenido " + nick + "</h3>";
	cadena = cadena + '<p><button type="button" id="cerrarSesion" class="btn btn-primary btn-md" onclick="rest.cerrarSesion()">Cerrar sesión</button></p>';
	cadena = cadena + "<div class='row'><div class='col-sm-8'>";
	cadena = cadena + "<h3>Crear Partida</h3>";
	cadena = cadena + '<input id="nombrePartida" type="text" class="form-control" name="nombrePartida" placeholder="Nombre partida">';
	cadena = cadena + '<button type="button" id="crearPartidaBtn" class="btn btn-primary btn-md">Crear partida</button>';
	cadena = cadena + "</div><div class='col-sm-4'><h3>Unirse</h3>";
	cadena = cadena + '<button type="button" id="unirseAPartidaBtn" class="btn btn-primary btn-md">Unirse a partida</button>';
	cadena = cadena + "</div></div>";

	$('#inicio').append(cadena);
	$('#crearPartidaBtn').on('click', function () {
		var nombre = $('#nombrePartida').val();
		if (nombre == "") {
			nombre = "SinNombre";
		}
		//rest.crearPartida(nombre,nick);
		ws.crearPartida(nombre);
	});
	$('#unirseAPartidaBtn').on('click', function () {
		//rest.obtenerPartidas();
		ws.obtenerPartidas();
	});

}

function mostrarPartida(data) {
	$('#mCP').remove();
	$('#mLP').remove();
	var cadena = "<div id='mP'>";
	cadena = cadena + "<h3>Bienvenido a la partida: " + data.nombre + "</h3>";
	cadena = cadena + '<p><button type="button" id="preparadoBtn" class="btn btn-primary btn-md" onclick="ws.preparado()"">Preparado</button> ';
	cadena = cadena + ' <button type="button" id="salirBtn" class="btn btn-primary btn-md" onclick="ws.salir()"">Salir</button></p></div>';
	$('#inicio').append(cadena);
}

function mostrarListaPartidas(data) {
	$('#mCP').remove();
	var numeroPartidas = Object.keys(data).length;
	var cadena = "<div id='mLP'>";
	cadena = cadena + "<h3>Lista de partidas</h3>";
	//cadena=cadena+'<ul class="list-group">';
	cadena = cadena + '<table class="table"><thead><tr>';
	cadena = cadena + '<th scope="col">Nombre</th><th scope="col">Número jugadores</th><th>Unirse</th>';
	cadena = cadena + '</tr></thead>';
	cadena = cadena + '<tbody>';
	for (var key in data) {
		cadena = cadena + '<tr>'
		cadena = cadena + '<td>' + data[key].nombre + '</td>';
		cadena = cadena + '<td>' + Object.keys(data[key].jugadores).length + '</td>';
		cadena = cadena + '<td><button type="button" id="unirmeAPartidaBtn" class="btn btn-primary btn-md" onclick="ws.unirAPartida(\'' + data[key].idp + '\',\'' + nick + '\')">Unirse a partida</button></td>';
		cadena = cadena + '</tr>';
	};
	cadena = cadena + "</tbody></table></div>";
	$('#inicio').append(cadena);
}

function mostrarListaJugadores(jugadores) {
	//$('#mCP').remove();
	$('#mLJ').remove();
	//var numeroPartidas=Object.keys(data).length;
	var cadena = "<div id='mLJ'>";
	cadena = cadena + "<h3>Lista de jugadores</h3>";
	cadena = cadena + '<table class="table"><thead><tr>';
	cadena = cadena + '<th scope="col">Nick</th><th scope="col">Vidas</th><th>Otros</th>';
	cadena = cadena + '</tr></thead>';
	cadena = cadena + '<tbody>';
	for (var key in jugadores) {
		cadena = cadena + '<tr>'
		cadena = cadena + '<td>' + jugadores[key].nick + '</td>';
		cadena = cadena + '<td>-</td>';
		cadena = cadena + '<td>' + jugadores[key].estado + '</td>';
		cadena = cadena + '</tr>';
	};
	cadena = cadena + "</tbody></table></div>";
	$('#mP').append(cadena);
}

function mostrarCanvas(num) {
	$('#mLJ').remove();
	console.log(num);
	game = new Phaser.Game(240, 240, Phaser.CANVAS, "juego");
	game.state.add("BootState", new Bomberman.BootState());
	game.state.add("LoadingState", new Bomberman.LoadingState());
	game.state.add("TiledState", new Bomberman.TiledState());
	game.state.start("BootState", true, false, "assets/levels/level1-" + num + ".json", "TiledState");
}

function borrarCanvas() {
	$('canvas').remove();
}