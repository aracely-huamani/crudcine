import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-socios', component: ListarSociosComponent },
  { path: 'crear-socios', component: CrearSociosComponent },
  { path: 'editar-socios/:id', component: EditarSociosComponent },
  { path: 'listar-prestamos', component: ListarPrestamosComponent },
  { path: 'crear-prestamos', component: CrearPrestamoComponent },
  { path: 'editar-prestamos/:id', component: EditarPeliculaComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-peliculas', component: CrearPeliculaComponent },
  { path: 'editar-peliculas/:id', component: EditarPrestamoComponent },
  { path: 'listar-ListaEspera', component: ListarListaEsperaComponent },
  { path: 'crear-ListaEspera', component: ListaEsperaComponent },
  { path: 'editar-ListaEspera/:id', component: EditarListaEsperaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
