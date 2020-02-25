var dao = require("./dao");
var ObjectID = require("mongodb").ObjectID;

function Centro() {

    //Atributos

    this.actividades = {};
    this.estudiantes = {};
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
                ju.estudiantes[email] = new Estudiante(u._id, u.nombre, u.apellidos, u.clase, u.email, u.contrasena);
                console.log(ju.estudiantes[email]);
                //ju.borrarEstudiante(email);
                //ju.modificarEstudiante("emailAntiguo", "nombre", "apellidos", "clase", "emailNuevo", "contrasena");
                callback(u);
                db.close();
            });
        });

    }

    this.modificarEstudiante = function (emailAntiguo, nombre, apellidos, clase, emailNuevo, contrasena, callback) {
        var ju = this;
        let e = {
            _id: this.estudiantes[emailAntiguo]._id,
            nombre: nombre,
            apellidos: apellidos,
            clase: clase,
            email: emailNuevo,
            contrasena: contrasena,
        }

        this.dao.connect(function (db) {
            ju.dao.modificarEstudiante(e, function (u) {
                ju.estudiantes[emailNuevo] = ju.estudiantes[emailAntiguo].modificarDatos(u.nombre, u.apellidos, u.clase, u.emailNuevo, u.contrasena);
                delete ju.estudiantes[emailAntiguo];
                callback(u);
                db.close();
            });
        });

    }

    this.borrarEstudiante = function (email, callback) {
        var ju = this;
        if (this.estudiantes[email] != null) {
            this.dao.connect(function (db) {
                ju.dao.eliminarEstudiante(ju.estudiantes[email]._id, function (u) {
                    delete ju.estudiantes[email];
                    callback(u);
                    db.close();
                });
            });
        }
    }

    //CRUD Actividades
    this.agregarActividad = function (nombre, profesor, estudiantes, callback) {
        var ju = this;
        let alumnos = {};
        for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }
        let a = {
            nombre: nombre,
            profesor: profesor,
            alumnos: alumnos,
            estado: 'Creada',
        }

        this.dao.connect(function (db) {
            ju.dao.insertarActividad(a, function (u) {
                ju.actividades[nombre] = new Actividad(u._id, u.nombre, u.profesor, u.alumnos, u.estado);
                callback(u);
                db.close();
            });
        });
    }
    this.editarActividad = function (nombreAntiguo, nombreNuevo, profesor, estudiantes, estado, callback) {
        var ju = this;
        if (this.actividades[nombreAntiguo] != null) {
            let alumnos = {};
            for (var email in estudiantes) {
                alumnos[email] = new Alumno(estudiantes[email]);
            }
            let a = {
                _id: this.actividades[nombreAntiguo]._id,
                nombre: nombreNuevo,
                profesor: profesor,
                alumnos: alumnos,
                estado: estado,
            }
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(a, function (u) {
                    ju.actividades[nombreNuevo] = ju.actividades[nombreAntiguo].editarActividad(u.nombreNuevo, u.profesor, u.alumnos, u.estado);
                    delete ju.actividades[nombreAntiguo];
                    callback(u);
                    db.close();
                });
            });
        }
    }
    this.borrarActividad = function (nombre, callback) {
        var ju = this;
        if (this.actividades[nombre] != null) {
            this.dao.connect(function (db) {
                ju.dao.eliminarActividad(ju.actividades[nombre]._id, function (u) {
                    delete ju.actividades[nombre];
                    callback(u);
                    db.close();
                });
            });
        }
    }

    //Añadir Alumnos a la Actividad
    this.anadirAlumnoaActividad = function (nombreActividad, emailEstudiante,callback) {
        var ju = this;
        var act = this.actividades[nombreActividad];
        if (act != null) {
            act.alumnos[emailEstudiante] = new Alumno(this.estudiantes[emailEstudiante]);
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    console.log(ju.actividades);
                    ju.actividades[nombreActividad].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    callback(u);
                    db.close();
                });
            });
        }
    }

    this.borrarAlumnoDeActividad = function (nombreActividad, emailAlumno,callback) {
        this.actividades[nombreActividad].borrarAlumno(emailAlumno);

        var ju = this;
        var act = this.actividades[nombreActividad];
        if (act != null) {
            delete act.alumnos[emailAlumno];
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    console.log(ju.actividades);
                    //ju.actividades[nombreActividad].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    ju.actividades[nombreActividad].borrarAlumno(emailAlumno);
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
                ju.estudiantes=u;
                callback(u);
                db.close();
            });
        });
        return this.estudiantes;
    }

    this.mostrarActividades = function(callback){
        var ju = this;
        this.dao.connect(function (db){
            ju.dao.mostrarActividades(function(u){
                ju.actividades=u;
                callback(u);
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

    //Metodos
    this.anadirAlumno = function (estudiante) {

        this.alumnos[estudiante.email] = new Alumno(estudiante);

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

    this.modificarDatos = function (nombre, apellidos, clase, email, contrasena) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.clase = clase;
        this.email = email;
        this.contrasena = contrasena;
        return this;
    }

}

function Alumno(estudiante) {

    //Atributos
    this.estudiante = estudiante;
    this.posicion = { x: 0, y: 0 }


}

module.exports.Centro = Centro;