import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { CrearPeliculaComponent } from '../../pelicula/crear-pelicula/crear-pelicula.component';
import { ListarPeliculaComponent } from '../../pelicula/listar-pelicula/listar-pelicula.component';
import { EditarPeliculaComponent } from '../../pelicula/editar-pelicula/editar-pelicula.component';
import { ListarListaesperaComponent } from '../../listaespera/listar-listaespera/listar-listaespera.component';
import { CrearListaesperaComponent } from '../../listaespera/crear-listaespera/crear-listaespera.component';
import { EditarListaesperaComponent } from '../../listaespera/editar-listaespera/editar-listaespera.component';
import { ListarSocioComponent } from '../../socio/listar-socio/listar-socio.component';
import { CrearSocioComponent } from '../../socio/crear-socio/crear-socio.component';
import { EditarSocioComponent } from '../../socio/editar-socio/editar-socio.component';
import { ListarPrestamosComponent } from '../../prestamos/listar-prestamos/listar-prestamos.component';
import { CrearPrestamosComponent } from '../../prestamos/crear-prestamos/crear-prestamos.component';
import { EditarPrestamosComponent } from '../../prestamos/editar-prestamos/editar-prestamos.component';
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
    {path: 'editar-pelicula', component:EditarPeliculaComponent },
    {path: 'crear-listaespera', component:CrearListaesperaComponent },
    {path: 'listar-listaespera', component:ListarListaesperaComponent },
    {path: 'editar-listaespera', component:EditarListaesperaComponent },
    {path: 'crear-socio', component:CrearSocioComponent },
    {path: 'listar-socio', component:ListarSocioComponent },
    {path: 'editar-socio', component:EditarSocioComponent },
    {path: 'crear-prestamo', component:CrearPrestamosComponent },
    {path: 'listar-prestamo', component:ListarPrestamosComponent },
    {path: 'editar-prestamo', component:EditarPrestamosComponent },

];
