import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaEspera } from 'app/models/ListaEspera';
import { ListaEsperaService } from 'app/services/ListaEspera.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-listaespera',
  templateUrl: './editar-listaespera.component.html'
})
export class EditarListaesperaComponent implements OnInit {
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

  editarListaEspera() {
    const listaEspera: ListaEspera = {
      pelicula: this.listaEsperaForm.get('pelicula')?.value,
      socios: this.listaEsperaForm.get('socios')?.value.split(',').map((item: string) => item.trim())
    };

    Swal.fire({
      title: 'Actualización de Lista de Espera',
      text: '¿Desea actualizar la lista de espera?',
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
        }
      }
    });
  }
}
