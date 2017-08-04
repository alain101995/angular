import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
//Comando ng g component components/user para crear carpeta user en carperta components

const appRoutes: Routes = [
    {path:'', component:UserComponent},
    {path:'about', component:AboutComponent}
    //Todas las rutas deben ser componentes?
];

@NgModule({
  declarations: [
    //Aqui van los components
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    //Aqui van los modulos
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],//Aqui van los servicios
  bootstrap: [AppComponent]//Main app Component
})
export class AppModule { }
