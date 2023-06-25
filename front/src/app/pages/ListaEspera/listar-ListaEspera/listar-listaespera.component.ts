import { Component, OnInit } from '@angular/core';
import { ListaEspera } from 'src/app/models/ListaEspera';
import { Socio } from 'src/app/models/socio';
import { ListaEsperaService } from 'src/app/services/ListaEspera.service';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-listar-listaespera',
  templateUrl: './listar-listaespera.component.html',
  styleUrls: ['./listar-listaespera.component.css']
})
export class ListarListaEsperaComponent implements OnInit {
  listasEspera: ListaEspera[] = [];
  socios: Socio[] = [];

  constructor(
    private listaEsperaService: ListaEsperaService,
    private socioService: SocioService
  ) {}

  ngOnInit(): void {
    this.obtenerListasEspera();
    this.obtenerSocios();
  }

  obtenerListasEspera() {
    this.listaEsperaService.getListaEspera().subscribe(data => {
      console.log(data);
      this.listasEspera = data;
    });
  }

  obtenerSocios() {
    this.socioService.getSocios().subscribe(data => {
      console.log(data);
      this.socios = data;
    });
  }

  getSocioNombre(socioId: string): string {
    const socio = this.socios.find(s => s.id === socioId);
    return socio ? socio.nombre : '';
  }

  eliminarListaEspera(id: string) {
    // Implementa la lógica para eliminar la lista de espera
  }
}
