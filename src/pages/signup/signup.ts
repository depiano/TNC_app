import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    user;
    alert;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user =  {fullname:'',email: '', codiceF:'',telefono:'',password: '', confermaPassword:''};
        this.alert= false;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }


    onSignup(){
        this.onControl();


    }
    onAnnulla() {
        this.navCtrl.push(LoginPage);
    }
    onControl(){
        if(this.user.fullname===''||this.user.email===''||this.user.telefono===''||this.user.password===''
            ||this.user.confermaPassword ===''||this.user.codiceF === ''){
            this.alert=true;
        }else{
            this.navCtrl.setRoot(LoginPage);
        }
    }
    onAlert(){
        this.alert=false;
    }
}
