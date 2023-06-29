import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'app/models/pelicula';
import { PeliculaService } from 'app/services/pelicula.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html'
})
export class ListarPeliculaComponent implements OnInit {
  listPeliculas: Pelicula[] = [];
  elementos: number = 0;

  constructor(private _peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this._peliculaService.getPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    });
  }

  eliminarPelicula(id: string) {
    Swal.fire({
      title: 'Eliminación de película',
      text: '¿Desea eliminar la película?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._peliculaService.deletePelicula(id).subscribe(data => {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
        });
      }
    });
  }
}
