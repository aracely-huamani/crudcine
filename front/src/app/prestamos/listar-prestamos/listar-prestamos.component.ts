import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'app/models/prestamo';
import { PrestamoService } from 'app/services/prestamo.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html'
})
export class ListarPrestamosComponent implements OnInit {
  prestamoForm: FormGroup;
  listPrestamos: Prestamo[] = [];
  elementos: number = 0;

  constructor(
    private _prestamoService: PrestamoService,
    private fb: FormBuilder
  ) {
    this.prestamoForm = this.fb.group({
      socio: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      cintaNumero: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerPrestamos();
    this.prestamoForm = this.fb.group({
      socio: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      cintaNumero: ['', Validators.required]
    });
  }

  obtenerPrestamos() {
    this._prestamoService.getPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
      this.elementos = this.listPrestamos.length;
    });
  }

  eliminarPrestamo(id: string) {
    Swal.fire({
      title: 'Eliminación de Préstamo',
      text: '¿Desea eliminar el préstamo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this._prestamoService.deletePrestamo(id).subscribe(data => {
          console.log(data);
          this.obtenerPrestamos();
          this.elementos = this.listPrestamos.length;
        });
      }
    });
  }

  guardarPrestamo() {
    if (this.prestamoForm.invalid) {
      return;
    }
    const prestamo: Prestamo = {
      socio: this.prestamoForm.value.socio,
      fecha: this.prestamoForm.value.fecha,
      estado: this.prestamoForm.value.estado,
      cintaNumero: this.prestamoForm.value.cintaNumero
    };
    this._prestamoService.guardarPrestamo(prestamo).subscribe(data => {
      console.log(data);
      this.prestamoForm.reset();
      this.obtenerPrestamos();
      this.elementos = this.listPrestamos.length;
    });
  }
}
