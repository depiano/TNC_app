import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SignupPage} from "../signup/signup";
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import { HTTP } from '@ionic-native/http';
import {ProfiloPage} from "../profilo/profilo";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'login.html',
})
export class LoginPage {
    user;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
      sessionStorage.clear();
      this.user =  {email: '', password: ''};

  }

    onLogin() {
        //this.navCtrl.setRoot(HomePage);
        console.log('email: ', this.user.email);
        console.log('password: ', this.user.password);
        /*
        if(this.user.email==='' || this.user.password===''){
            //errore
        }
        else{
        */
            this.send();
            /*
        }
        */
    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }

    send(){

        let postParams = {
            'email': this.user.email,
            'password': this.user.password
        }

        let datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncweb/login.php', postParams, headers)
            .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                let alert = this.alertCtrl.create({
                    title: data.data,
                    subTitle: data.data,
                    buttons: ['Dismiss']
                });
                alert.present();

            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });
        this.navCtrl.setRoot(ProfiloPage);

    }

}
