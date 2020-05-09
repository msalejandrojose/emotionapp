var dao = require("./dao");
var ObjectID = require("mongodb").ObjectID;
var moment = require('moment');

function Centro() {

    //Atributos
    this.clases = {};
    this.actividades = {};
    this.resumenActividades = {}
    this.actividadesEnProceso = {};
    this.intervalo = null;
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

    //CRUD Clases
    this.agregarClase = function (clase, callback) {
        var ju = this;
        /*let alumnos = {};
        for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }*/
        let a = {
            nombre: clase.nombre,
            profesor: clase.profesor,
            alumnos: clase.alumnos,
            actividades: clase.actividades,
            resumen: clase.resumen,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarClase(a, function (ru) {
                ju.clases[ru._id] = new Clase(ru._id, ru.nombre, ru.profesor, ru.alumnos, ru.actividades, ru.resumen);
                console.log(ju.clases);
                callback(ru);
                db.close();
            });
        });
    }
    this.editarClase = function (act, callback) {
        var ju = this;
        if (!this.clases[act._id]) {
            let alumnos = {};
            /*for (var email in estudiantes) {
                alumnos[email] = new Alumno(estudiantes[email]);
            }*/
            let a = {
                nombre: act.nombre,
                profesor: act.profesor,
                alumnos: act.alumnos,
                actividades: act.actividades,
                resumen: act.resumen,
            }
            this.dao.connect(function (db) {
                //console.log(a);
                ju.dao.modificarClase(act._id, a, function (u) {
                    callback(act);
                    db.close();
                });
            });
        }
    }
    this.borrarClase = async function (act, callback) {
        var ju = this;
        var k;
        var bbdd;
        await this.dao.connect(function (db) {
            var a = act;
            ju.dao.eliminarClase(act, function (u) {
                //delete ju.clases[act._id];
                k = u;
                var jus = ju;
                console.log(u);
                for (var i in a.actividades) {
                    console.log('hola');
                    console.log(a.actividades[i]);
                    jus.dao.eliminarActividad(a.actividades[i], function (u) {
                        console.log('Actividad borrada');
                        console.log(u);
                        delete ju.actividades[act._id];
                    });
                    //ju.borrarActividad(i.actividades[i]);
                }

                callback(u);

            });
            bbdd = db;

        });
        bbdd.close();
        //}
    }

    this.mostrarClase = function (clase, callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.obtenerClaseCriterio(clase._id, function (c) {
                console.log(c)
                console.log("clase actualizada");
                callback(c);
                db.close();
            });
        });
    }

    this.mostrarClases = function (callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarClases(function (u) {
                ju.clases = u;
                console.log(u);
                callback(u);
                db.close();
            });
        });
    }

    //CRUD Actividades dentro de la Clase

    this.crearActividadEnClase = function (clase, actividad, callback) {
        var ju = this;
        console.log("crearActividadEnClase")
        //console.log(clase);
        //console.log(actividad);
        if (!this.clases[clase._id]) {
            let ac = {
                nombre: clase.nombre,
                profesor: clase.profesor,
                alumnos: clase.alumnos,
                actividades: clase.actividades,
                resumen: clase.resumen,
            }
            let a = {
                nombre: actividad.nombre,
                profesor: actividad.profesor,
                fecha: actividad.fecha,
                alumnos: actividad.alumnos,
                estado: 'Creada',
                resumen: actividad.resumen,
                clase: actividad.clase,
            }
            /*this.dao.connect(function (db) {
                //console.log(a);
                ju.agregarActividad(actividad.nombre, actividad.profesor, actividad.fecha, actividad.alumnos, actividad.resumen, function (act) {
                    a.actividades[act._id] = new Actividad(act._id,act.nombre, act.profesor, act.fecha, act.alumnos, act.resumen);
                    //console.log(act);
                    console.log("Actividad Agregada")
                    ju.dao.modificarClase(clase._id, a, function (u) {
                        //console.log(u);
                        //console.log(ju.clases);
                        //ju.clases[clase._id].actividades[actividad._id]=new Actividad(actividad._id,actividad.nombre,actividad.profesor,actividad.fecha,actividad.alumnos,actividad.estado);
                        console.log("Actividad añadida a la clase");
                        clase.actividades[act._id]=act;
                        console.log(clase)
                        callback(clase);
                        db.close();
                    });
                })
            });*/
            this.dao.connect(function (db) {
                ju.dao.insertarActividad(a, function (ru) {
                    let act = {
                        nombre: ru.nombre,
                        profesor: ru.profesor,
                        fecha: ru.fecha,
                        alumnos: ru.alumnos,
                        estado: 'Creada',
                        resumen: ru.resumen,
                        clase: ru.clase,
                    }
                    let alu = [];
                    /*for (let i = 0; i < ru.alumnos.length; i++) {
                        ru.alumnos[i].id_item = ru.alumnos[i]._id + ru._id;
                    }*/
                    for (let i = 0; i < ru.alumnos.length; i++) {
                        //item.id_item = item.estudiante._id + ru._id;
                        //alu.push(ru.alumnos[i].id_item=ru.alumnos[i].estudiante._id + ru._id);
                        alu.push(new Alumno(ru.alumnos[i].estudiante, ru.alumnos[i].posicion, ru, ru.alumnos[i].datos));
                    }
                    ru.alumnos = alu;
                    act.alumnos = alu;
                    ju.dao.modificarActividad(ru._id, act, function (r) {
                        ju.actividades[ru._id] = new Actividad(ru._id, ru.nombre, ru.profesor, ru.fecha, ru.alumnos, ru.estado, ru.clase);
                        console.log("Actividad Agregada")
                        ac.actividades[ru._id] = ru;
                        ju.dao.modificarClase(clase._id, ac, function (u) {
                            //console.log("elemento añadido")
                            //console.log(u);
                            //console.log(ju.clases);
                            //ju.clases[clase._id].actividades[actividad._id]=new Actividad(actividad._id,actividad.nombre,actividad.profesor,actividad.fecha,actividad.alumnos,actividad.estado);
                            //console.log("Actividad añadida a la clase");
                            clase.actividades[ru._id] = ru;
                            //console.log(clase)
                            /*ju.dao.obtenerClaseCriterio(clase._id, function (c) {
                                callback(c);
                                db.close();
                            });*/
                            console.log("ID");
                            console.log(ru._id);
                            ju.dao.obtenerActividadCriterio(ru._id, function (res) {
                                callback(res);
                                db.close();
                            })
                        });
                    })

                    //callback(ru);
                    //db.close();
                    //a.actividades[act._id] = new Actividad(act._id, act.nombre, act.profesor, act.fecha, act.alumnos, act.resumen);
                    //console.log(act);

                });
            });
        }
    }
    this.editarActividadEnClase = function (actividad, callback) {
        var ju = this;
        var bbdd;
        let act = {
            nombre: actividad.nombre,
            profesor: actividad.profesor,
            fecha: actividad.fecha,
            estado: actividad.estado,
            alumnos: actividad.alumnos,
            resumen: actividad.resumen,
            clase: actividad.clase,
        }
        //a.actividades[actividad._id] = actividad;
        this.dao.connect(function (db) {
            bbdd = db;
            ju.dao.obtenerClaseCriterio(actividad.clase._id, function (clase) {
                ju.dao.modificarActividad(actividad._id, act, function (u) {
                    if (act.estado == "Comenzada") {
                        ju.actividadesListas[actividad._id] = actividad;
                    }
                    if (u != null) {
                        ju.actividades[u._id] = actividad;
                        //callback(act); ///////
                    }
                    let c = {
                        nombre: clase.nombre,
                        profesor: clase.profesor,
                        alumnos: clase.alumnos,
                        actividades: clase.actividades,
                        resumen: clase.resumen,
                    }

                    c.actividades[actividad._id] = actividad;
                    ju.dao.modificarClase(clase._id, c, function (u) {
                        clase[actividad._id] = actividad;
                        ju.clases[clase._id] = clase;
                        //ju.clases[clase._id].actividades[actividad._id] = actividad;
                        /*ju.editarActividad(actividad, function (act) {
                            callback(clase);
                            db.close();
                        });*/
                        callback(actividad);
                        db.close();
                    });
                    //db.close();
                });
            })
            /*ju.dao.modificarClase(clase._id, a, function (u) {
                ju.clases[clase._id].actividades[actividad._id] = actividad;
                ju.editarActividad(actividad, function (act) {
                    callback(clase);
                    db.close();
                });

            });*/
        });
    }
    this.borrarActividadEnClase = function (actividad, callback) {
        var ju = this;
        var bbdd;
        console.log('Hola')
        this.dao.connect(function (db) {
            bbdd = db;
            ju.dao.obtenerClaseCriterio(actividad.clase._id, function (clase) {
                console.log('Hola')
                ju.dao.eliminarActividad(actividad, function (u) {
                    delete ju.actividades[actividad._id];
                    let c = {
                        nombre: clase.nombre,
                        profesor: clase.profesor,
                        alumnos: clase.alumnos,
                        actividades: clase.actividades,
                        resumen: clase.resumen,
                    }
                    delete c.actividades[actividad._id]
                    console.log('Hola')
                    ju.dao.modificarClase(clase._id, c, function (u) {
                        delete clase[actividad._id];
                        ju.clases[clase._id] = clase;
                        //ju.clases[clase._id].actividades[actividad._id] = actividad;
                        /*ju.editarActividad(actividad, function (act) {
                            callback(clase);
                            db.close();
                        });*/
                        ju.dao.obtenerClaseCriterio(clase._id, function (c) {
                            callback(c);
                            db.close();
                        });
                    });
                    //db.close();
                });
            })
            /*ju.dao.modificarClase(clase._id, a, function (u) {
                ju.clases[clase._id].actividades[actividad._id] = actividad;
                ju.editarActividad(actividad, function (act) {
                    callback(clase);
                    db.close();
                });

            });*/
        });
    }

    //CRUD Actividades
    this.agregarActividad = function (nombre, profesor, fecha, alumnos, resumen, clase, callback) {
        var ju = this;
        /*let alumnos = {};
        for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }*/
        let a = {
            nombre: nombre,
            profesor: profesor,
            fecha: fecha,
            alumnos: alumnos,
            estado: 'Creada',
            resumen: resumen,
            clase: clase,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarActividad(a, function (ru) {
                let alu = [];
                for (let i = 0; i < ru.alumnos.length; i++) {
                    ru.alumnos[i].id_item = ru.alumnos[i]._id + ru._id;
                }
                for (let i = 0; i < ru.alumnos.length; i++) {
                    //item.id_item = item.estudiante._id + ru._id;
                    //alu.push(ru.alumnos[i].id_item=ru.alumnos[i].estudiante._id + ru._id);
                    alu.push(new Alumno(ru.alumnos[i].estudiante, ru.alumnos[i].posicion, ru, ru.alumnos[i].datos));
                }
                ru.alumnos = alu;
                ju.dao.modificarActividad(ru._id, ru, function (u) {
                    ju.actividades[u._id] = new Actividad(u._id, u.nombre, u.profesor, u.fecha, u.alumnos, u.estado, u.clase);
                    callback(ru);
                    db.close();
                });
            });
        });
    }
    this.editarActividad = function (act, callback) {
        var ju = this;
        let alumnos = {};
        /*for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }*/
        let a = {
            nombre: act.nombre,
            profesor: act.profesor,
            fecha: act.fecha,
            alumnos: act.alumnos,
            estado: act.estado,
            resumen: act.resumen,
            clase: act.clase,
        }
        this.dao.connect(function (db) {
            //console.log(a);
            ju.dao.modificarActividad(act._id, a, function (u) {
                //ju.actividades[u._id].editarActividad(u.nombre, u.profesor, u.alumnos, u.estado);
                //console.log(u);
                if (act.estado == "Comenzada") {
                    ju.actividadesListas[act._id] = act;
                }
                console.log("Valor de la bbdd");
                console.log(u);
                if (u != null) {
                    ju.actividades[u._id] = act;
                    callback(act);
                }
                db.close();
            });
        });

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
    this.verActividadesDeAlumno = function (alumno, callback) {
        var ju = this;
        var actividades = [];
        this.dao.connect(function (db) {
            ju.dao.mostrarActividades(function (u) {
                for (let i = 0; i < u.length; i++) {
                    for (let j = 0; j < u[i].alumnos.length; j++) {
                        //console.log(u[i].alumnos[j].estudiante)
                        if (alumno._id == u[i].alumnos[j].estudiante._id) {
                            actividades.push(u[i]);
                        }
                    }
                }
                callback(actividades);
                db.close();
            });
        });

    }

    //Gestion de datos de la actividad
    this.empezarActividad = function (actividad, callback) {
        var ju = this;
        console.log("Empezar");
        console.log(actividad._id);
        this.actividades[actividad._id] = actividad;
        console.log(this.actividades);
        this.actividadesListas[actividad._id] = actividad;
        console.log("Actividad Comenzada");
        if (actividad.clase._id == "") {
            this.editarActividad(actividad, function (res) {
                if (res != '') {
                    var num = 0;
                    console.log("Actividad empezada");
                    console.log(res);
                    ju.actividadesEnProceso[actividad._id] = actividad._id;
                    ju.resumenActividades[actividad._id] = new DatosResumen();
                    ju.comprobar()
                    callback(actividad);
                }
            });
        } else {
            this.editarActividadEnClase(actividad, function (res) {
                if (res != '') {
                    console.log("Actividad empezada");
                    console.log(res);
                    ju.actividadesEnProceso[actividad._id] = actividad._id;
                    ju.resumenActividades[actividad._id] = new DatosResumen();
                    ju.comprobar()
                    callback(actividad);
                }
            });
        }
    }

    this.comprobar = function () {
        console.log("Comprobar");
        var num = 0;
        for (var key in this.actividadesEnProceso) {
            num++;
        }
        if (num == 1) {
            console.log("Creacion del intervalo");
            this.intervalo = setInterval(async => {
                this.hacerResumenActividad();
            }, 20000);
        }
        if (num == 0) {
            clearImmediate(this.intervalo);
        }
    }

    this.hacerResumenActividad = function () {
        for (var key in this.actividadesEnProceso) {
            var tiempo = moment().format();
            var sumatorioE = this.resumenActividades[key].alegria +
                this.resumenActividades[key].asco +
                this.resumenActividades[key].ira +
                this.resumenActividades[key].miedo +
                this.resumenActividades[key].sorpresa +
                this.resumenActividades[key].tristeza;
            var sumatorioDC = this.resumenActividades[key].distraido + this.resumenActividades[key].concentrado;
            var sumatorioMF = this.resumenActividades[key].motivado + this.resumenActividades[key].frustrado;

            this.actividades[key].resumen.alegria.push({y:this.resumenActividades[key].alegria / sumatorioE,x:tiempo});
            this.actividades[key].resumen.asco.push( {y:this.resumenActividades[key].asco / sumatorioE,x:tiempo});
            this.actividades[key].resumen.concentrado.push( {y:this.resumenActividades[key].concentrado / sumatorioDC,x:tiempo});
            this.actividades[key].resumen.distraido.push( {y:this.resumenActividades[key].distraido / sumatorioDC,x:tiempo});
            this.actividades[key].resumen.frustrado.push( {y:this.resumenActividades[key].frustrado / sumatorioMF,x:tiempo});
            this.actividades[key].resumen.ira.push( {y:this.resumenActividades[key].ira / sumatorioE,x:tiempo});
            this.actividades[key].resumen.miedo.push( {y:this.resumenActividades[key].miedo / sumatorioE,x:tiempo});
            this.actividades[key].resumen.motivado.push( {y:this.resumenActividades[key].motivado / sumatorioMF,x:tiempo});
            this.actividades[key].resumen.sorpresa.push( {y:this.resumenActividades[key].sorpresa / sumatorioE,x:tiempo});
            this.actividades[key].resumen.tristeza.push( {y:this.resumenActividades[key].tristeza / sumatorioE,x:tiempo});
            this.actividades[key].resumen.pulsaciones.push( {y:this.resumenActividades[key].pulsaciones / this.resumenActividades[key].nPulsaciones,x:tiempo});
            this.resumenActividades[key] = new DatosResumen();
        }
    }

    this.insertarDatos = function (datos) {
        var ju = this;
        try {
            console.log("Insertar datos");
            console.log(this.actividades[datos.id_actividad]);
            for (let i = 0; i < this.actividades[datos.id_actividad].alumnos.length; i++) {
                console.log(this.actividades[datos.id_actividad].alumnos[i]);
                console.log(datos.id_item);
                if (datos.id_item == ju.actividades[datos.id_actividad].alumnos[i].id_item) {

                    ju.resumenActividades[datos.id_actividad]['alegria'] += datos.alegria.y;
                    ju.resumenActividades[datos.id_actividad]['asco'] += datos.asco.y;
                    ju.resumenActividades[datos.id_actividad]['concentrado'] += datos.concentrado.y;
                    ju.resumenActividades[datos.id_actividad]['distraido'] += datos.distraido.y;
                    ju.resumenActividades[datos.id_actividad]['frustrado'] += datos.frustrado.y;
                    ju.resumenActividades[datos.id_actividad]['ira'] += datos.ira.y;
                    ju.resumenActividades[datos.id_actividad]['miedo'] += datos.miedo.y;
                    ju.resumenActividades[datos.id_actividad]['motivado'] += datos.motivado.y;
                    ju.resumenActividades[datos.id_actividad]['sorpresa'] += datos.sorpresa.y;
                    ju.resumenActividades[datos.id_actividad]['tristeza'] += datos.tristeza.y;
                    ju.resumenActividades[datos.id_actividad]['pulsaciones'] += datos.pulsaciones.y;
                    ju.resumenActividades[datos.id_actividad]['nPulsaciones']++;


                    /*this.resumen.alegria += datos.alegria.y;
                    this.resumen.asco += datos.asco.y;
                    this.resumen.concentrado += datos.concentrado.y;
                    this.resumen.distraido += datos.distraido.y;
                    this.resumen.frustrado += datos.frustrado.y;
                    this.resumen.ira += datos.ira.y;
    
                    this.resumen.miedo += datos.miedo.y;
                    this.resumen.motivado += datos.motivado.y;
                    this.resumen.sorpresa += datos.sorpresa.y;
    
                    this.resumen.tristeza += datos.tristeza.y;
                    this.resumen.pulsaciones += datos.pulsaciones.y;
                    this.numPulsaciones++;*/

                    ju.actividades[datos.id_actividad].alumnos[i].datos.alegria.push({ x: datos.alegria.x, y: datos.alegria.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.asco.push({ x: datos.asco.x, y: datos.asco.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.ira.push({ x: datos.ira.x, y: datos.ira.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.miedo.push({ x: datos.miedo.x, y: datos.miedo.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.sorpresa.push({ x: datos.sorpresa.x, y: datos.sorpresa.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.tristeza.push({ x: datos.tristeza.x, y: datos.tristeza.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.pulsaciones.push({ x: datos.pulsaciones.x, y: datos.pulsaciones.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.tiempo.push({ x: datos.tiempo.x, y: datos.tiempo.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.distraido.push({ x: datos.distraido.x, y: datos.distraido.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.concentrado.push({ x: datos.concentrado.x, y: datos.concentrado.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.frustrado.push({ x: datos.frustrado.x, y: datos.frustrado.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.motivado.push({ x: datos.motivado.x, y: datos.motivado.y });
                    console.log("Datos modificados en el servidor");
                }
            }
        } catch (e) {
            console.log(e);
        }
        //console.log(this.actividades[datos.id_actividad]);

    }

    this.terminarActividad = function (actividad, callback) {
        var ju = this;
        console.log("SERVIDOR");
        console.log(actividad._id);
        console.log(ju.actividades);
        for (var key in ju.actividades) {
            if (ju.actividades[key]._id == actividad._id) {
                ju.actividades[key].estado = "Finalizada";
                ju.actividades[key].fecha = actividad.fecha;
                console.log("datos a almacenar");
                console.log(ju.actividades[key].resumen);
                console.log(ju.actividades[key].alumnos[0].datos);
                if (actividad.clase._id == "") {
                    this.editarActividad(ju.actividades[key], function (res) {
                        if (res != '') {
                            console.log("Actividad terminada");
                            console.log(res);
                            delete ju.actividadesEnProceso[actividad._id];
                            delete ju.resumenActividades[actividad._id];
                            ju.comprobar();
                            callback(ju.actividades[key]);
                        }
                    })
                } else {
                    this.editarActividadEnClase(ju.actividades[key], function (res) {
                        if (res != '') {
                            console.log("Actividad terminda");
                            console.log(res);
                            delete ju.actividadesEnProceso[actividad._id];
                            delete ju.resumenActividades[actividad._id];
                            ju.comprobar()
                            callback(ju.actividades[key]);
                        }
                    })
                }
                break;
            }
        }
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

    this.anadirActividadLista = function (act, callback) {
        if (this.actividadesListas[act._id] == null) {
            this.actividadesListas[act._id] = act;
        }
        console.log(this.actividadesListas);
        callback(this.actividadesListas[act._id]);
    }

    this.borrarActividadLista = function (act, callback) {
        delete this.actividadesListas[act._id];
        callback(act);
    }

    this.mostrarActividadListasxAlumno = function (id_alu, callback) {
        let actividades = [];
        console.log(id_alu);
        for (var id in this.actividadesListas) {
            for (let i = 0; i < this.actividadesListas[id].alumnos.length; i++) {
                if (this.actividadesListas[id].alumnos[i].estudiante._id == id_alu) {
                    actividades.push(this.actividadesListas[id]);
                    break;
                }
            }
        }
        callback(actividades);
    }

    //Iniciar Sesion
    this.iniciarSesion = function (email, contrasena, callback) {
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

function Actividad(id, nombre, profesor, fecha, alumnos, estado, clase) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.profesor = profesor;
    this.fecha = fecha;
    this.alumnos = alumnos;
    this.estado = estado;
    this.resumen = {};
    this.clase = {};

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


function Clase(id, nombre, profesor, alumnos, actividades, resumen) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.profesor = profesor;
    this.alumnos = alumnos;
    this.actividades = actividades;
    this.resumen = resumen;

    //Metodos
    /*this.anadirAlumno = function (estudiante, posicion) {

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
    }*/

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

function Alumno(estudiante, posicion, actividad, datos) {

    //Atributos
    this.estudiante = estudiante;
    this.posicion = posicion;
    this.id_item = this.estudiante._id + actividad._id;
    this.datos = datos;

    this.setActividad = function (act) {
        this.id_item = this.estudiante._id + act._id;
    }
}

function DatosResumen() {
    this.alegria=0;
    this.asco=0;
    this.concentrado=0;
    this.distraido=0;
    this.frustrado=0;
    this.ira=0;
    this.miedo=0;
    this.motivado=0;
    this.sorpresa=0;
    this.tristeza=0;
    this.pulsaciones=0;
    this.nPulsaciones=0;
}

module.exports.Centro = Centro;