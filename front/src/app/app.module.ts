import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CrearSociosComponent } from './pages/socio/crear-socios/crear-socios.component';
import { EditarSociosComponent } from './pages/socio/editar-socios/editar-socios.component';
import { ListarSociosComponent } from './pages/socio/listar-socios/listar-socios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    ListarSociosComponent,
    CrearSociosComponent,
    EditarSociosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
