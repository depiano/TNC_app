import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HTTP} from "@ionic-native/http";

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
    errorPass;
    items: any;
    errore;
    presente;
    codice;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
        this.user =  {fullname:'',email: '', codiceF:'',telefono:'',password: '', confermaPassword:''};
        this.alert= false;
        this.errorPass= false;
        this.presente=false;
        this.codice=false;
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
        }
        else{
            this.onControllPass()
        }

    }


    onControllPass(){
        if(this.user.password!==this.user.confermaPassword){
            this.errorPass=true;

        }
        else{
            if(this.user.codiceF.length!==16){

                this.codice=true;

            }else
                this.send();
        }
    }




    send(){


        let postParams = {
            'FULLNAME':this.user.fullname,
            'EMAIL': this.user.email,
            'PASSWORD': this.user.password,
            'PHONE': this.user.telefono,
            'CF': this.user.codiceF,
            'TYPE': 'SIMPLE OPERATOR'

        }
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/signup.php', postParams, headers)
            .then(data => {

                this.items=JSON.parse(data.data);
                this.errore= this.items.ERROR;

                if(this.errore==='yes'){
                    this.presente=true;

                }
                else{
                    if(this.errore==='none'){
                        this.navCtrl.setRoot(LoginPage);

                    }
                }
            })
            .catch(error => {

            });

    }
    onAlert(){
        this.alert=false;
        this.errorPass=false;
        this.presente=false;
        this.codice=false;
    }
}
