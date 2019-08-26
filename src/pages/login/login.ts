import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  password: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  goTo() {
    if (this.password === 'octoups') {
      this.navCtrl.setRoot(HomePage);
    } else {
      this.showAlert();
      this.password = '';
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: 'Password is not correct.',
      buttons: ['OK']
    });
    alert.present();
  }

}
