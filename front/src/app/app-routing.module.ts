import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSociosComponent } from './pages/socio/crear-socios/crear-socios.component';
import { EditarSociosComponent } from './pages/socio/editar-socios/editar-socios.component';
import { ListarSociosComponent } from './pages/socio/listar-socios/listar-socios.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-socios', component: ListarSociosComponent },
  { path: 'crear-socios', component: CrearSociosComponent },
  { path: 'editar-socios/:id', component: EditarSociosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
