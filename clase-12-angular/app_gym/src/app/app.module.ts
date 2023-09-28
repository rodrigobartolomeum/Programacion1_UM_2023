import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PlanificacionesComponent } from './pages/planificaciones/planificaciones.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerClasesComponent } from './components/ver-clases/ver-clases.component';
import { VerUserComponent } from './components/usuarios/ver-user/ver-user.component';
import { VerPlanificacionesComponent } from './components/planificaciones/ver-planificaciones/ver-planificaciones.component';
import { AbmComponent } from './components/usuarios/abm/abm.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuariosComponent,
    PlanificacionesComponent,
    ErrorPageComponent,
    NavComponent,
    FooterComponent,
    VerClasesComponent,
    VerUserComponent,
    VerPlanificacionesComponent,
    AbmComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
