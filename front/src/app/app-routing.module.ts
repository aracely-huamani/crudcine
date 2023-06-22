import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './pages/pelicula/crear-peliculas/crear-peliculas.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { CrearTiendasComponent } from './pages/tiendas/crear-tiendas/crear-tiendas.component';
import { EditarTiendasComponent } from './pages/tiendas/editar-tiendas/editar-tiendas.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-peliculas', component: ListarPeliculasComponent },
  { path: 'crear-pelicula', component: CrearPeliculaComponent },
  { path: 'editar-pelicula/:id', component: EditarPeliculaComponent },
  { path: 'listar-prestamos', component: ListarPrestamosComponent },
  { path: 'crear-prestamo', component: CrearPrestamoComponent },
  { path: 'editar-prestamo/:id', component: EditarPrestamoComponent },
  { path: 'listar-lista-espera', component: ListarListaEsperaComponent },
  { path: 'crear-lista-espera', component: CrearListaEsperaComponent },
  { path: 'editar-lista-espera/:id', component: EditarListaEsperaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
