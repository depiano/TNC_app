import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SignupPage} from "../signup/signup";
import { HTTP } from '@ionic-native/http';



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'login.html',
})
export class LoginPage {
    user;
    items: any;
    errore: any;
    error;
    alert=false;
    fullName;
    e_mail;
    codice;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
      sessionStorage.clear();
      this.user =  {email: '', password: ''};
this.error=false;
  }

    onLogin() {
        if(this.user.email==='' || this.user.password===''){
        this.alert=true;
        }
        else{

            this.send();

        }
    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }

    send(){
        sessionStorage.clear();
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
        this.http.post('http://tcnapp.altervista.org/script_tncapp/login.php', postParams, headers)
            .then(data => {


                this.items=JSON.parse(data.data);
                this.errore= this.items.ERROR;
               this.fullName=this.items.RESULT.FULLNAME;
                this.codice=this.items.RESULT.CF;
                this.e_mail=this.items.RESULT.EMAIL;


    if(this.errore==='none'){

        localStorage.setItem('isLoggedin', 'true');
        sessionStorage.setItem('sessionCodice' , '' + this.codice);
        sessionStorage.setItem('sessionFullname' , '' + this.fullName);
         this.navCtrl.setRoot(HomePage,{fullname:this.fullName,codiceFiscale:this.codice,
         email:this.e_mail});
    }
    else{
        if(this.errore==='yes'){
            this.error=true;
        }

    }


            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });


    }

    onAlert(){
        this.alert=false;
        this.error=false;
    }

}
