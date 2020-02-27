var mongo = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

function Dao() {
    this.Actividad = undefined;
    this.Estudiante = undefined;
    this.Profesor = undefined;

    /*this.insertarResultado = function (resu, callback) {
        insertar(this.resultados, resu, callback);
    }

    this.obtenerResultados = function (callback) {
        obtenerTodos(this.resultados, callback);
    }*/

    function obtenerTodos(coleccion, callback) {
        coleccion.find().toArray(function (error, col) {
            callback(col);
        });
    };

    /*this.obtenerResultadosCriterio = function (criterio, callback) {
        obtener(this.usuarios, criterio, callback);
    };

    this.insertarUsuario = function (resu, callback) {
        insertar(this.usuarios, resu, callback);
    }

    this.obtenerUsuariosCriterio = function (criterio, callback) {
        obtener(this.usuarios, criterio, callback);
    };*/

    this.obtenerEstudianteCriterio = function(criterio,callback){
        obtener(this.Estudiante,criterio,callback);
    }

    this.insertarEstudiante = function (est, callback) {
        //console.log(estudiante);
        insertar(this.Estudiante, est, callback);
    }

    this.modificarEstudiante = function (id,est, callback) {
        modificarColeccion(this.Estudiante, id ,est, callback);
    }

    this.eliminarEstudiante = function (est, callback) {
        eliminar(this.Estudiante, { _id: ObjectID(est._id) }, callback);
    }

    this.mostrarEstudiantes = function (callback) {
        obtenerTodos(this.Estudiante, callback);
    }

    this.insertarActividad = function (act, callback) {
        insertar(this.Actividad, act, callback);
    }

    this.modificarActividad = function (id,act, callback) {
        modificarColeccion(this.Actividad, id, act, callback);
    }

    this.eliminarActividad = function (act, callback) {
        eliminar(this.Actividad, { _id: ObjectID(act._id) }, callback);
    }

    this.mostrarActividades = function (callback) {
        obtenerTodos(this.Actividad, callback);
    }

    function obtener(coleccion, criterio, callback) {
        coleccion.find(criterio).toArray(function (error, usr) {
            console.log(usr)
            if (usr.length == 0) {
                callback(undefined);
            }
            else {
                callback(usr[0]);
            }
        });
    };

    /*this.modificarColeccionUsuarios = function (usr, callback) {
        modificarColeccion(this.usuarios, usr, callback);
    }*/

    function modificarColeccion(coleccion, id, usr, callback) {
        coleccion.findOneAndReplace({ _id: ObjectID(id) }, usr, function (err, result) {
            if (err) {
                console.log("No se pudo actualizar (método genérico)");
                console.log(err)
            }
            else {
                console.log("Elemento actualizado");
            }
            callback(result);
        });
    }

    /*this.eliminarUsuario = function (uid, callback) {
        eliminar(this.usuarios, { _id: ObjectID(uid) }, callback);
    }*/

    function eliminar(coleccion, criterio, callback) {
        coleccion.deleteOne(criterio, function (err, result) {
            if (!err) {
                console.log("Elemento borrado");
                callback(result);
            }
        });
    }

    function insertar(coleccion, elemento, callback) {
        coleccion.insertOne(elemento, function (err, result) {
            if (err) {
                console.log("error");
            }
            else {
                console.log("Nuevo elemento creado");
                callback(elemento);
            }
        });
    }


    this.connect = function (callback) {
        var dao = this;
        //mongo.connect("mongodb+srv://msalejandrojose@gmail.com:qwerty123A@cluster0-4rkvn.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, function (err, database) {
        mongo.connect("mongodb+srv://usuario:sSs9vuKNWsvrEkuR@emotionappaj-7mcat.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, function (err, database) {

            if (err) {
                console.log("No pudo conectar a la base de datos: " + err)
            }
            else {
                console.log("conectado a Mongo: EmotionAppAJ");
                database.db("emotionappaj").collection("Actividad", function (err, col) {
                    if (err) {
                        console.log("No pude obtener la coleccion Actividad")
                    }
                    else {
                        console.log("tenemos la colección Actividad");
                        dao.Actividad = col;
                    }
                });
                database.db("emotionappaj").collection("Estudiante", function (err, col) {
                    if (err) {
                        console.log("No pude obtener la coleccion Estudiante")
                    }
                    else {
                        console.log("tenemos la colección Estudiante");
                        dao.Estudiante = col;
                    }
                });
                database.db("emotionappaj").collection("Profesor", function (err, col) {
                    if (err) {
                        console.log("No pude obtener la coleccion Profesor")
                    }
                    else {
                        console.log("tenemos la colección Profesor");
                        dao.Profesor = col;
                    }
                });
                callback(database);
            }
        });

    }

    //this.connect();
}

module.exports.Dao = Dao;