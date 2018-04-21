import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModificaprofiloPage} from "../modificaprofilo/modificaprofilo";

/**
 * Generated class for the ProfiloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})
export class ProfiloPage {
    fullname: string;
    email: string;
    telefono: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fullname="Fabio De Cicco";
    this.email="fabiodecicco@gmail.com";
    this.telefono="3481478361";
  }

    onSignup() {
        this.navCtrl.push(ModificaprofiloPage);
    }


}
