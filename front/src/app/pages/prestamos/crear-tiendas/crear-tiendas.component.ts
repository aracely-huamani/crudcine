import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-tiendas',
  templateUrl: './crear-tiendas.component.html',
  styleUrls: ['./crear-tiendas.component.css']
})
export class CrearTiendasComponent {
  tiendaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _tiendaService: TiendaService){
    this.tiendaForm = this.fb.group({
        departamento:  ['', Validators.required],
        distrito: ['', Validators.required],
        cantidad: ['', Validators.required]
    })
  }

  agregarTienda(){

    const TIENDA: Tienda = {
      departamento: this.tiendaForm.get('departamento')?.value,
      distrito: this.tiendaForm.get('distrito')?.value,
      cantidad: this.tiendaForm.get('cantidad')?.value,
    }

    console.log(TIENDA)

    Swal.fire({
      title: 'Creacion de Tienda',
      text: "¿Desea crear la tienda?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._tiendaService.guardarTienda(TIENDA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/tiendas'])
        }) 
      }
    })    
  }

    //console.log(this.productoForm)
}
