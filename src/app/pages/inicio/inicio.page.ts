import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { personajesFirebase } from '../../interfaces/interfaces';
import { Personajes as PersonajesService } from 'src/app/services/personajes';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

interface Elemento {
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  standalone: true,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class InicioPage implements OnInit {

  personajesRecientes: personajesFirebase[] = [];

  elementos: Elemento[] = [
    { icono: 'newspaper-outline', nombre: 'Noticias', ruta: '/noticias' },
    { icono: 'construct-outline', nombre: 'Componentes', ruta: '/componentes' },
    { icono: 'people-outline', nombre: 'Nosotros', ruta: '/nosotros' }
  ];

  constructor(
    private servicioPersonajes: PersonajesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.servicioPersonajes.getPersonajes().subscribe({
      next: (respuesta) => {
        this.personajesRecientes = respuesta as personajesFirebase[];
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
      }
    });
  }

  async verDetalle(id: string): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });
    await modal.present();
  }
}