import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2'

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  },
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  },
  title: string,
  info: string
};


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit{
  
  listTiendas: Tienda[] = [];
  elementos: number = 0;

  constructor(private _tiendaService: TiendaService) {

  }

  ngOnInit(): void {
    
    this.obtenerTiendas();

  }

  obtenerTiendas(){
    this._tiendaService.getTiendas().subscribe(data => {
      console.log(data);
      this.listTiendas = data;
      this.elementos = this.listTiendas.length;
    })
  }

  eliminarTienda(id: any){
      Swal.fire({
        title: 'Eliminacion de Tienda',
        text: "¿Desea eliminar la tienda?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this._tiendaService.deleteTienda(id).subscribe(data => {
          console.log(data);
          this.obtenerTiendas();
          this.elementos = this.listTiendas.length;
        });
      }
    });
  }


  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.0408529, lng: -76.9600572 },
    zoom: 15,
    mapTypeControl: false
  };

  markers: MarkerProperties[] = [
    { position: { lat: -12.0491625, lng: -76.9554737 }, 
      label: { color: 'black', text: 'Tienda N°1', fontSize: '20px', fontWeight: 'bold' },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup
    { position: { lat: -12.077029, lng: -77.083471 }, 
      label: { color: 'black', text: 'Tienda N°2', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Louvre Museum
    { position: { lat: -12.094951, lng: -77.040214 }, 
      label: { color: 'black', text: 'Tienda N°3', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Cathédrale Notre-Dame de Paris
    { position: { lat: -11.994783, lng: -77.058036 }, 
      label: { color: 'black', text: 'Tienda N°4', fontSize: '20px', fontWeight: 'bold' },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       },
  ];

  map!: google.maps.Map;

  handleMapInitialized(map: google.maps.Map) {
    this.map = map;
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map: this.map})
    });
  }

  verTiendas( distrito: string){

    if(distrito == 'Santa Anita'){
      this.verSantaAnita();
    }
    if(distrito == 'San Miguel'){
      this.verSanMiguel();
    }
    if(distrito == 'San Isidro'){
      this.verSanIsidro();
    }
    if(distrito == 'Independencia'){
      this.verIndependencia();
    }

  }
  
  verSantaAnita(){
    const santaAnitaLatLng = new google.maps.LatLng(-12.0491625, -76.9554737);
    this.map.setCenter(santaAnitaLatLng);
    this.map.setZoom(15);
  }

  verSanMiguel(){
    const sanMiguelLatLng = new google.maps.LatLng(-12.077029, -77.083471);
    this.map.setCenter(sanMiguelLatLng);
    this.map.setZoom(15);
  }

  verSanIsidro(){
    const sanIsidroLatLng = new google.maps.LatLng(-12.094951, -77.040214);
    this.map.setCenter(sanIsidroLatLng);
    this.map.setZoom(15);
  }

  verIndependencia(){
    const IndependenciaLatLng = new google.maps.LatLng(-11.994783, -77.058036);
    this.map.setCenter(IndependenciaLatLng);
    this.map.setZoom(15)
  }

}
