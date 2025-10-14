import { Component, OnInit } from '@angular/core';

interface Elemento {
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  //agregar standalone siempre que se cree un componente para que levante servidor
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {

  elementos: Elemento[] = [
    { //Primer elemento de la lista
      icono: 'newspaper-outline',
      nombre: 'Noticias',
      ruta: '/noticias'
    },
    {
      icono: 'newspaper-outline',
      nombre: 'nosotros',
      ruta: '/nosotros'
    },
    {
      icono: 'newspaper-outline',
      nombre: 'componentes',
      ruta: '/componentes'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
