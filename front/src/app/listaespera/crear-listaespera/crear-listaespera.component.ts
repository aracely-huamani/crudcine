import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaEspera } from 'app/models/ListaEspera';
import { ListaEsperaService } from 'app/services/ListaEspera.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './crear-listaespera.component.html'
})
export class CrearListaesperaComponent implements OnInit {
  listaEsperaForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private listaEsperaService: ListaEsperaService
  ) {
    this.listaEsperaForm = this.fb.group({
      pelicula: ['', Validators.required],
      socios: ['', Validators.required]
    });
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this.listaEsperaService.getListaEsperaPorId(this.id).subscribe(data => {
        this.listaEsperaForm.setValue({
          pelicula: data.pelicula,
          socios: data.socios.join(', ')
        });
      });
    }
  }
  
  guardarListaEspera() {
    if (this.listaEsperaForm.invalid) {
      return;
    }

    const listaEspera: ListaEspera = {
      pelicula: this.listaEsperaForm.value.pelicula,
      socios: this.listaEsperaForm.value.socios.split(',').map((item: string) => item.trim())
    };

    Swal.fire({
      title: 'Guardar Lista de Espera',
      text: '¿Desea guardar la lista de espera?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this.listaEsperaService.actualizarListaEspera(this.id, listaEspera).subscribe(data => {
            console.log(listaEspera);
            this.router.navigate(['/listar-listaespera']);
          });
        } else {
          this.listaEsperaService.guardarListaEspera(listaEspera).subscribe(data => {
            console.log(listaEspera);
            this.router.navigate(['/listar-listaespera']);
          });
        }
      }
    });
  }
}
