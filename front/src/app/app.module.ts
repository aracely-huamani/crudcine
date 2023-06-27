import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListarListaesperaComponent } from './listaespera/listar-listaespera/listar-listaespera.component';
import { CrearListaesperaComponent } from './listaespera/crear-listaespera/crear-listaespera.component';
import { EditarListaesperaComponent } from './listaespera/editar-listaespera/editar-listaespera.component';
import { ListarPeliculaComponent } from './pelicula/listar-pelicula/listar-pelicula.component';
import { CrearPeliculaComponent } from './pelicula/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './pelicula/editar-pelicula/editar-pelicula.component';
import { ListarSocioComponent } from './socio/listar-socio/listar-socio.component';
import { CrearSocioComponent } from './socio/crear-socio/crear-socio.component';
import { EditarSocioComponent } from './socio/editar-socio/editar-socio.component';
import { ListarPrestamosComponent } from './prestamos/listar-prestamos/listar-prestamos.component';
import { CrearPrestamosComponent } from './prestamos/crear-prestamos/crear-prestamos.component';
import { EditarPrestamosComponent } from './prestamos/editar-prestamos/editar-prestamos.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListarListaesperaComponent,
    CrearListaesperaComponent,
    EditarListaesperaComponent,
    ListarPeliculaComponent,
    CrearPeliculaComponent,
    EditarPeliculaComponent,
    ListarSocioComponent,
    CrearSocioComponent,
    EditarSocioComponent,
    ListarPrestamosComponent,
    CrearPrestamosComponent,
    EditarPrestamosComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
