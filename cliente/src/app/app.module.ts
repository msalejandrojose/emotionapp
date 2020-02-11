import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfesorComponent } from './profesor/profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { SidenavProfesorComponent } from './profesor/sidenav-profesor/sidenav-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    EstudianteComponent,
    SidenavProfesorComponent,
  ],
  exports:[
    MatSidenavModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [MatSidenavModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
