function ClienteRest() {

	this.encenderLed = function(){
		$.getJSON("/encederLed", function (data) {
			alert("Handler for .click() called.");
		});
	}

	this.agregarUsuario = function (nick) {
		$.getJSON("/agregarUsuario/" + nick, function (data) {
			console.log(data);
			if (data.nick != "") {
				//$.cookie("usr", JSON.stringify(data));
				mostrarUsuario(data);
			}
			else {
				mostrarAviso("Utiliza otro nick");
			}
		});
	}
	this.comprobarUsuario = function () {
		var usr = JSON.parse($.cookie("usr"));
		
		$.getJSON("/comprobarUsuario/" + usr.nick, function (data) {
			console.log("El nick es: "+data.nick);
			if (data.nick != "") {
				$.cookie("usr",JSON.stringify(data));
				mostrarUsuario(data);
			}
			else {
				console.log("Borro la cookie");
				$.removeCookie("usr");
				mostrarAgregarUsuario();
			}
		});
	}
	this.crearPartida = function (nombrePartida) {
		var usr = JSON.parse($.cookie("usr"));
		$.getJSON("/crearPartida/" + nombrePartida + "/" + usr.nick, function (data) {
			console.log(data);
			mostrarPartida(data);
		});
	}
	this.unirAPartida = function (nombrePartida, nick) {
		$.getJSON("/unirAPartida/" + nombrePartida + "/" + nick, function (data) {
			console.log(data);
			mostrarPartida(data);
		});
	}
	this.obtenerPartidas = function () {
		$.getJSON("/obtenerPartidas", function (data) {
			console.log(data);
			mostrarListaPartidas(data);
		});
	}
	this.obtenerJugadores = function (nombrePartida) {
		$.getJSON("/obtenerJugadores/" + nombrePartida, function (data) {
			console.log(data);
		})
	}
	this.cerrarSesion = function () {
		var usr = JSON.parse($.cookie("usr"));
		$.getJSON("/cerrarSesion/" + usr.nick, function (data) {
			console.log(data);
			if (data.res != "ok") {
				mostrarUsuario(data);
			}
			else {
				$.removeCookie("usr");
				mostrarAgregarUsuario();
			}
		});
	}

	this.registrarUsuarios = function (email, emailC, nick, contrasena) {
		var rest = this;
		$.ajax({
			type: 'POST',
			url: '/registrarUsuario',
			data: JSON.stringify({ email: email, emailC: emailC, nick: nick, contrasena: contrasena }),
			success: function (data) {
				if (data.nick == "") {
					console.log('No se ha podido registrar');
					mostrarAviso("Nick no valido");
					mostrarAgregarUsuario();
				}
				else {
					console.log("Debes confirmar la cuenta: " + data.email);
					$.cookie("usr", JSON.stringify(data));
					mostrarUsuario(data);
					//rest.agregarUsuario(nick);
				}
			},
			contentType: 'application/json',
			dataType: 'json'
		});
	}

	this.iniciarUsuario = function (email, contrasena) {
		var rest = this;
		$.ajax({
			type: 'POST',
			url: '/iniciarUsuario',
			data: JSON.stringify({ email: email, contrasena: contrasena }),
			success: function (data) {
				if (data.nick == "") {
					console.log("No se ha iniciado sesion");
					mostrarAgregarUsuario();
				}
				else {
					console.log("Se ha iniciado sesion");
					$.cookie("usr", JSON.stringify(data));
					mostrarUsuario(data);
				}
			},
			contentType: 'application/json',
			dataType: 'json'
		});
	}

	this.actualizarUsuario = function (oldpass, newpass, newpass2) {
		var usr = JSON.parse($.cookie("usr"));
		$.ajax({
			type: 'PUT',
			url: '/actualizarUsuario',
			data: JSON.stringify({ uid: usr._id, email: usr.email, nick: nick, oldpass: oldpass, newpass: newpass, newpass2: newpass2 }),
			success: function (data) {
				if (!data.email) {
					mostrarRegistro();
				}
				else {
					$.cookie("usr", JSON.stringify(data));
					//mostrarCabecera();
				}
			},
			contentType: 'application/json',
			dataType: 'json'
		});
	}

	this.eliminarUsuario = function () {
		var usr = JSON.parse($.cookie("usr"));
		$.ajax({
			type: 'DELETE',
			url: '/eliminarUsuario/' + usr._id,
			data: '{}',
			success: function (data) {
				if (data.resultados == 1) {
					//mostrarLogin();
					//mostrarNavLogin();
					console.log("Usuario eliminar");
				}
			},
			contentType: 'application/json',
			dataType: 'json'
		});
	}
}