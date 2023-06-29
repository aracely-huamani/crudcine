import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from 'app/models/socio';
import { SocioService } from 'app/services/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-socios',
  templateUrl: './editar-socio.component.html'
})
export class EditarSocioComponent implements OnInit {
  socioForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _socioService: SocioService
  ) {
    this.socioForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      directoresFavoritos: ['', Validators.required],
      actoresFavoritos: ['', Validators.required],
      generosPreferidos: ['', Validators.required]
    });
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this._socioService.verSocio(this.id).subscribe(data => {
        this.socioForm.setValue({
          nombre: data.nombre,
          direccion: data.direccion,
          telefono: data.telefono,
          directoresFavoritos: data.directoresFavoritos.join(', '),
          actoresFavoritos: data.actoresFavoritos.join(', '),
          generosPreferidos: data.generosPreferidos.join(', ')
        });
      });
    }
  }

  editarSocio() {
    const SOCIO: Socio = {
      nombre: this.socioForm.get('nombre')?.value,
      direccion: this.socioForm.get('direccion')?.value,
      telefono: this.socioForm.get('telefono')?.value,
      directoresFavoritos: this.socioForm.get('directoresFavoritos')?.value.split(',').map((item: string) => item.trim()),
      actoresFavoritos: this.socioForm.get('actoresFavoritos')?.value.split(',').map((item: string) => item.trim()),
      generosPreferidos: this.socioForm.get('generosPreferidos')?.value.split(',').map((item: string) => item.trim())
    };

    Swal.fire({
      title: 'Actualización de Socio',
      text: '¿Desea actualizar el socio?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this._socioService.actualizarSocio(this.id, SOCIO).subscribe(data => {
            console.log(SOCIO);
            this.router.navigate(['/listar-socio']);
          });
        }
      }
    });
  }
}
