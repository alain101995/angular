import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
//Comando ng g component components/user para crear carpeta user en carperta components
@NgModule({
  declarations: [
    //Aqui van los components
    AppComponent,
    UserComponent
  ],
  imports: [
    //Aqui van los modulos
    BrowserModule
  ],
  providers: [],//Aqui van los servicios
  bootstrap: [AppComponent]//Main app Component
})
export class AppModule { }
