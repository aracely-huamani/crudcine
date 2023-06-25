import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamos.component.html',
  styleUrls: ['./crear-prestamos.component.css']
})
export class CrearPrestamoComponent {
  prestamoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private prestamoService: PrestamoService
  ) {
    this.prestamoForm = this.fb.group({
      socio: ['', Validators.required],
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
      cintaNumero: ['', Validators.required]
    });
  }

  agregarPrestamo() {
    if (this.prestamoForm.invalid) {
      return;
    }

    const prestamo: Prestamo = {
      socio: this.prestamoForm.value.socio,
      estado: this.prestamoForm.value.estado,
      fecha: new Date(this.prestamoForm.value.fecha),
      cintaNumero: this.prestamoForm.value.cintaNumero
    };

    Swal.fire({
      title: 'Creación de Préstamo',
      text: '¿Desea crear el préstamo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.prestamoService.guardarPrestamo(prestamo).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-prestamos']);
        });
      }
    });
  }
}
