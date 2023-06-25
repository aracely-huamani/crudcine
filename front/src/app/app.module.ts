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
import { CrearPrestamoComponent } from './pages/prestamos/crear-prestamos/crear-prestamos.component';
import { EditarPrestamoComponent } from './pages/prestamos/editar-prestamos/editar-prestamos.component';
import { ListarPrestamosComponent } from './pages/prestamos/listar-prestamos/listar-prestamos.component';
import { CrearPeliculaComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { EditarPeliculaComponent } from './pages/pelicula/editar-peliculas/editar-peliculas.component';
import { ListarPeliculasComponent } from './pages/pelicula/listar-peliculas/listar-peliculas.component';
import { ListaEsperaComponent } from './pages/ListaEspera/crear-ListaEspera/crear-listaespera.component';
import { EditarListaEsperaComponent } from './pages/ListaEspera/editar-ListaEspera/editar-listaespera.component';
import { ListarListaEsperaComponent } from './pages/ListaEspera/listar-ListaEspera/listar-listaespera.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    ListarSociosComponent,
    CrearSociosComponent,
    EditarSociosComponent,
    EditarPrestamoComponent,
    ListarPrestamosComponent,
    CrearPrestamoComponent,
    CrearPeliculaComponent,
    EditarPeliculaComponent,
    ListarPeliculasComponent,
    ListaEsperaComponent,
    ListarListaEsperaComponent,
    EditarListaEsperaComponent,


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
