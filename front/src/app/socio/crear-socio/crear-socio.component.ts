import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Socio } from 'app/models/socio';
import { SocioService } from 'app/services/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-socios',
  templateUrl: './crear-socio.component.html'
})
export class CrearSocioComponent {
  socioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private socioService: SocioService
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

  agregarSocio() {
    if (this.socioForm.invalid) {
      return;
    }

    const socio: Socio = {
      nombre: this.socioForm.value.nombre,
      direccion: this.socioForm.value.direccion,
      telefono: this.socioForm.value.telefono,
      directoresFavoritos: this.socioForm.value.directoresFavoritos.split(',').map((item: string) => item.trim()),
      actoresFavoritos: this.socioForm.value.actoresFavoritos.split(',').map((item: string) => item.trim()),
      generosPreferidos: this.socioForm.value.generosPreferidos.split(',').map((item: string) => item.trim())
    };

    Swal.fire({
      title: 'Creación de Socio',
      text: '¿Desea crear el socio?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.socioService.guardarSocio(socio).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-socio']);
        });
      }
    });
  }
}
