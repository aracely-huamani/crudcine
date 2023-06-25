import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamos.component.html',
  styleUrls: ['./editar-prestamos.component.css']
})
export class EditarPrestamoComponent implements OnInit {
  prestamoForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _prestamoService: PrestamoService
  ) {
    this.prestamoForm = this.fb.group({
      socio: ['', Validators.required],
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
      cintaNumero: ['', Validators.required]
    });
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this._prestamoService.viewPrestamo(this.id).subscribe(data => {
        this.prestamoForm.setValue({
          socio: data.socio,
          estado: data.estado,
          fecha: new Date(data.fecha).toISOString().substring(0, 10),
          cintaNumero: data.cintaNumero
        });
      });
    }
  }

  editarPrestamo() {
    const PRESTAMO: Prestamo = {
      socio: this.prestamoForm.get('socio')?.value,
      estado: this.prestamoForm.get('estado')?.value,
      fecha: new Date(this.prestamoForm.get('fecha')?.value),
      cintaNumero: this.prestamoForm.get('cintaNumero')?.value
    };

    Swal.fire({
      title: 'Actualización de Préstamo',
      text: '¿Desea actualizar el préstamo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this._prestamoService.actualizarPrestamo(this.id, PRESTAMO).subscribe(data => {
            console.log(PRESTAMO);
            this.router.navigate(['/listar-prestamos']);
          });
        }
      }
    });
  }
}
