import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Ejemplo de Alerta',
      message: 'Este es un componente Ion Alert.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
