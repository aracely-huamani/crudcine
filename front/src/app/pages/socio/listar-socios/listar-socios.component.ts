import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-socios',
  templateUrl: './listar-socios.component.html',
  styleUrls: ['./listar-socios.component.css']
})
export class ListarSociosComponent implements OnInit {
  socioForm: FormGroup;
  listSocios: Socio[] = [];
  elementos: number = 0;

  constructor(
    private _socioService: SocioService,
    private fb: FormBuilder
  ) {
    this.socioForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      directoresFavoritos: ['', Validators.required],
      actoresFavoritos: ['', Validators.required],
      generosPreferidos: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.obtenerSocios();
    this.socioForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      directoresFavoritos: ['', Validators.required],
      actoresFavoritos: ['', Validators.required],
      generosPreferidos: ['', Validators.required]
    });
  }

  obtenerSocios() {
    this._socioService.getSocios().subscribe(data => {
      console.log(data);
      this.listSocios = data;
      this.elementos = this.listSocios.length;
    });
  }

  eliminarSocio(id: string) {
    Swal.fire({
      title: 'Eliminación de socio',
      text: '¿Desea eliminar el socio?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._socioService.deleteSocio(id).subscribe(data => {
          console.log(data);
          this.obtenerSocios();
          this.elementos = this.listSocios.length;
        });
      }
    });
  }
}