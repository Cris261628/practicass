import { Component, OnInit } from '@angular/core';

import { Personajes as PersonajesService } from 'src/app/services/personajes';

import { Personajes as PersonajesApi } from '../../interfaces/interfaces';
import { RespuestaBD } from '../../interfaces/interfaces';  
//
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  standalone: false, //standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  elementos: Elemento[]= [
    {
      icono: 'newspaper-outline',
      nombre: 'Noticias',
      ruta: '/noticias'
    },
    {
      icono: 'construct-outline',
      nombre: 'Componenetes',
      ruta: '/componentes'
    },
    {
      icono: 'people-outline',
      nombre: 'Nosotros',
      ruta: '/nosotros'
    }
  ];

  personajesRecientes: PersonajesApi[]= [];

  constructor(private servicioPersonajes: PersonajesService,
    private modalCtrl: ModalController
  ) { }

  async verDetalle(id: number){
    const modal = await this.modalCtrl.create({
      component:DetalleComponent,
      componentProps:{id}
    });

    modal.present();
  }


  ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp: RespuestaBD)=>{
      console.log('Personajes', resp);
      this.personajesRecientes=resp.data;
    });
  }

}
