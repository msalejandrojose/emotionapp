import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  dentro=false;
  profesor=false;
  estudiante=false;

  entrarProfesor(){
    this.dentro=true;
    this.profesor=true;
  }

  entrarEstudiante(){
    this.dentro=true;
    this.estudiante=true;
  }

  salir(){
    this.dentro=false;
    this.profesor=false;
    this.estudiante=false;
  }
}
