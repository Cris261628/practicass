import { Component, OnInit, Input } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
import { Personaje } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id!: number; 
  personaje!: Personaje;

  constructor(
    private personajesService: Personajes,
    private modalCtrl: ModalController
  ) {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    if (this.id === undefined || this.id === null) {
      console.error('ID no recibido');
      return;
    }

    this.personajesService.getPersonajePorId(this.id).subscribe(resp => {
      this.personaje = resp;
      console.log('Personaje cargado desde Firebase:', this.personaje);
    });
  }
}

/*import { Component, OnInit, Input } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
import { Detalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id!: number; 
  personaje!: Detalle;

  constructor(private personajesService: Personajes, private modalCtrl: ModalController) {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    if (!this.id) {
      console.error('ID no recibido');
      return;
    }

    this.personajesService.getPersonajePorId(this.id).subscribe(resp => {
      this.personaje = resp.data;
      this.personaje.text = resp.support.text;
      console.log('Personaje cargado:', this.personaje);
    });
  }
}*/
