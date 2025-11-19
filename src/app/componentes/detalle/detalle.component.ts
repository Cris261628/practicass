import { Component, OnInit, Input } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
import { Personaje, personajesFirebase } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  detallePersonaje = {} as personajesFirebase;

  @Input() id!: string;
  personaje!: Personaje;

  constructor(
    private personajesService: Personajes,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (!this.id) {
      console.error('ID no recibido');
      return;
    }

    this.personajesService.getPersonajesDetalle(this.id).subscribe(resp => {
      this.detallePersonaje = resp as personajesFirebase;
      console.log('Detalle cargado:', this.detallePersonaje);
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  getAltText(personaje: personajesFirebase): string {
    return `${personaje.nombre ?? ''} ${personaje.apellido ?? ''}`.trim();
  }
}