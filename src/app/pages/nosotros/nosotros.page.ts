import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

}
