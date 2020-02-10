import { Component, OnInit } from '@angular/core';
import { Alumno } from '../estudiante/alumno';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  alumnoCreate: Alumno = {
    nombre: '',
    apellidos: '',
    clase: '',
    email: '',
    contrasena: '',
  }
  editarAlumno = false;
  onSelectedAlumno: Alumno;
  listaAlumnos = [];

  gestionAlumnos=true;
  gestionActividades=false;

  constructor() { }

  ngOnInit() {
  }
  //anadirAlumno(nombre:string,apellidos:string,clase:string,email:string,contrasena:string) {
  anadirAlumno() {
    this.listaAlumnos.push(new Alumno(this.alumnoCreate.nombre, this.alumnoCreate.apellidos, this.alumnoCreate.clase, this.alumnoCreate.email, this.alumnoCreate.contrasena));
    this.limpiar();
    this.editarAlumno = false;
  }
  actualizarAlumno(){
    this.limpiar();
    this.editarAlumno=false;
  }
  limpiar() {
    if (this.editarAlumno) {
      this.onSelectedAlumno = {
        nombre: '',
        apellidos: '',
        clase: '',
        email: '',
        contrasena: '',
      }
    } else {
      this.alumnoCreate = {
        nombre: '',
        apellidos: '',
        clase: '',
        email: '',
        contrasena: '',
      }
    }

  }
  editar(item: Alumno) {
    this.editarAlumno = true;
    this.onSelectedAlumno = item;
  }
  borrar(item) {
    console.log("Falta por implementar");
  }

  abrirAlumnos(){
    this.gestionAlumnos=true;
    this.gestionActividades=false;
  }
  abrirActividades(){
    this.gestionActividades=true;
    this.gestionAlumnos=false;
    console.log(this.listaAlumnos);
  }

}
