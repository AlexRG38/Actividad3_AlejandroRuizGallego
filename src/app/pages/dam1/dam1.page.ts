import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class Dam1Page implements OnInit {

  checkP = true;
  checkD = true;
  checkE = false;
  checkL = false;
  checkS = false;
  checkF = false;
  checkI = false;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
