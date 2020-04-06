var dao = require("./dao");
var ObjectID = require("mongodb").ObjectID;

function Centro() {

    //Atributos

    this.actividades = {};
    this.estudiantes = {};
    this.actividadesListas = {};
    this.dao = new dao.Dao();


    //METODOS

    //CRUD Estudiantes
    this.agregarEstudiante = function (nombre, apellidos, clase, email, contrasena, callback) {
        var ju = this;
        let e = {
            nombre: nombre,
            apellidos: apellidos,
            clase: clase,
            email: email,
            contrasena: contrasena,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarEstudiante(e, function (u) {
                ju.estudiantes[u._id] = new Estudiante(u._id, u.nombre, u.apellidos, u.clase, u.email, u.contrasena);
                console.log(ju.estudiantes[u._id]);
                //ju.borrarEstudiante(email);
                //ju.modificarEstudiante("emailAntiguo", "nombre", "apellidos", "clase", "emailNuevo", "contrasena");
                callback(u);
                db.close();
            });
        });

    }

    this.modificarEstudiante = function (est, callback) {
        var ju = this;
        let e = {
            nombre: est.nombre,
            apellidos: est.apellidos,
            clase: est.clase,
            email: est.email,
            contrasena: est.contrasena,
        }

        this.dao.connect(function (db) {

            ju.dao.modificarEstudiante(est._id, e, function (u) {
                //console.log(est._id);
                delete ju.estudiantes[est._id];
                ju.estudiantes[est._id] = est;
                //ju.estudiantes[est._id].modificarDatos(est);
                //console.log(ju.estudiantes[est._id]);
                callback(u);
                db.close();
            });
        });
    }

    this.borrarEstudiante = function (est, callback) {
        var ju = this;
        //console.log(this.estudiantes[_id]);

        this.dao.connect(function (db) {
            ju.dao.eliminarEstudiante(est, function (u) {
                delete ju.estudiantes[est._id];
                //console.log(u);
                callback(est);
                db.close();
            });
        });
    }

    //CRUD Actividades
    this.agregarActividad = function (nombre, profesor, alumnos, resumen, callback) {
        var ju = this;
        /*let alumnos = {};
        for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }*/
        let a = {
            nombre: nombre,
            profesor: profesor,
            alumnos: alumnos,
            estado: 'Creada',
            resumen: resumen,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarActividad(a, function (ru) {
                let alu = [];
                //console.log(ru);
                for (item of ru.alumnos) {
                    item.id_item = item.estudiante._id + ru._id;
                    //console.log(item);
                    alu.push(item);
                }
                ru.alumnos = alu;
                ju.dao.modificarActividad(ru._id, ru, function (u) {
                    ju.actividades[u._id] = new Actividad(u._id, u.nombre, u.profesor, u.alumnos, u.estado);
                    //console.log(ru);
                    callback(u);
                    db.close();
                });

            });
        });
    }
    this.editarActividad = function (act, callback) {
        var ju = this;
        if (!this.actividades[act._id]) {
            let alumnos = {};
            /*for (var email in estudiantes) {
                alumnos[email] = new Alumno(estudiantes[email]);
            }*/
            let a = {
                nombre: act.nombre,
                profesor: act.profesor,
                alumnos: act.alumnos,
                estado: act.estado,
                resumen: act.resumen,
            }
            this.dao.connect(function (db) {
                console.log(a);
                ju.dao.modificarActividad(act._id,a, function (u) {
                    //ju.actividades[u._id].editarActividad(u.nombre, u.profesor, u.alumnos, u.estado);
                    ju.actividades[u._id]=u;
                    callback(u);
                    db.close();
                });
            });
        }
    }
    this.borrarActividad = function (act, callback) {
        var ju = this;
        //if (this.actividades[_id] != null) {
        this.dao.connect(function (db) {
            ju.dao.eliminarActividad(act, function (u) {
                delete ju.actividades[act._id];
                callback(u);
                db.close();
            });
        });
        //}
    }

    //Añadir Alumnos a la Actividad
    this.anadirAlumnoaActividad = function (_id, emailEstudiante, callback) {
        var ju = this;
        var act = this.actividades[_id];
        if (act != null) {
            act.alumnos[emailEstudiante] = new Alumno(this.estudiantes[emailEstudiante]);
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    console.log(ju.actividades);
                    ju.actividades[_id].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    callback(u);
                    db.close();
                });
            });
        }
    }

    this.borrarAlumnoDeActividad = function (_id, emailAlumno, callback) {
        this.actividades[_id].borrarAlumno(emailAlumno);

        var ju = this;
        var act = this.actividades[_id];
        if (act != null) {
            delete act.alumnos[emailAlumno];
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    console.log(ju.actividades);
                    //ju.actividades[nombreActividad].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    ju.actividades[_id].borrarAlumno(emailAlumno);
                    callback(u);
                    db.close();
                });
            });
        }
    }

    //Print
    this.mostrarEstudiante = function (email) {
        //console.log(this.estudiantes[email]);
        return this.estudiantes[email];
    }
    this.mostrarEstudiantes = function (callback) {
        //console.log(this.estudiantes);
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarEstudiantes(function (u) {
                ju.estudiantes = u;
                callback(u);
                db.close();
            });
        });
        //return this.estudiantes;
    }
    this.mostrarActividades = function (callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarActividades(function (u) {
                ju.actividades = u;
                callback(u);
                db.close();
            });
        });
    }

    this.anadirActividadLista = function(act,callback){
        if(this.actividadesListas[act._id]==null){
            this.actividadesListas[act._id]=act;
        }
        console.log(this.actividadesListas);
        callback(this.actividadesListas[act._id]);
    }

    this.borrarActividadLista = function(act,callback){
        delete this.actividadesListas[act._id];
        callback(act);
    }

    this.mostrarActividadListasxAlumno = function(id_alu,callback){
        let actividades = [];
        console.log(id_alu);
        for (var id in this.actividadesListas) {
            for(let i=0; i<this.actividadesListas[id].alumnos.length;i++){
                if(this.actividadesListas[id].alumnos[i].estudiante._id==id_alu){
                    actividades.push(this.actividadesListas[id]);
                    break;
                }
            }
        }
        callback(actividades);
    }

    //Iniciar Sesion
    this.iniciarSesion = function(email,contrasena,callback){
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.obtenerEstudianteCriterio({ $and: [{ 'contrasena': contrasena }, { 'email': email }] }, function (u) {
				if (!u) {
					//console.log("No se ha podido loguear");
				}
				else {
					//console.log("El usuario es: " + u._id);
					//console.log("Se ha podido Loguear");
					callback(u);
				}
				db.close();
			});
        });

    }

}

function Actividad(id, nombre, profesor, alumnos, estado) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.profesor = profesor;
    this.alumnos = alumnos;
    this.estado = estado;
    this.resumen = {};

    //Metodos
    this.anadirAlumno = function (estudiante, posicion) {

        this.alumnos[estudiante.email] = new Alumno(estudiante, posicion, this);

    }
    this.editarActividad = function (nombre, profesor, alumnos, estado) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.estado = estado;
        return this;
    }
    this.borrarAlumno = function (nombre) {
        delete this.alumnos[nombre];
        return this;
    }

    //Print
    this.mostrarActividad = function () {
        return this;
    }

}

function Estudiante(id, nombre, apellidos, clase, email, contrasena) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.clase = clase;
    this.email = email;
    this.contrasena = contrasena;

    this.modificarDatos = function (est) {
        this.nombre = est.nombre;
        this.apellidos = est.apellidos;
        this.clase = est.clase;
        this.email = est.email;
        this.contrasena = est.contrasena;
        return this;
    }

}

function Alumno(estudiante, posicion, actividad) {

    //Atributos
    this.estudiante = estudiante;
    this.posicion = posicion;
    this.id_item = this.estudiante._id + actividad._id;
    this.datos = {};

    this.setActividad = function (act) {
        this.id_item = this.estudiante._id + act._id;
    }
}

module.exports.Centro = Centro;