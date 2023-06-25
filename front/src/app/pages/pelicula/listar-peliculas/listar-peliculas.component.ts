import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  peliculaForm: FormGroup;
  listPeliculas: Pelicula[] = [];
  elementos: number = 0;

  constructor(
    private _peliculaService: PeliculaService,
    private fb: FormBuilder
  ) {
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      actores: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerPeliculas();
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      actores: ['', Validators.required]
    });
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
