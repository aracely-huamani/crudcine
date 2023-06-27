import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { CrearPeliculaComponent } from '../../pelicula/crear-pelicula/crear-pelicula.component';
import { ListarPeliculaComponent } from '../../pelicula/listar-pelicula/listar-pelicula.component';
import { EditarPeliculaComponent } from '../../pelicula/editar-pelicula/editar-pelicula.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, 
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    {path: 'crear-pelicula', component:CrearPeliculaComponent },
    {path: 'listar-pelicula', component:ListarPeliculaComponent },
    {path: 'editar-pelicula', component:EditarPeliculaComponent }

];
