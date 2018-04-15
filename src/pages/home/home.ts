import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { InicioPage } from '../inicio/inicio';

@Component({//juancarlos password de la base de datos 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];
  
  constructor(public nav :NavController) {
    
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 3000);
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
   console.log("doing some login stuffs");
   this.nav.setRoot(InicioPage);
  }

}
