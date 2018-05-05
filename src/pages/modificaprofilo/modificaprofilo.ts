import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfiloPage} from "../profilo/profilo";
import {HomePage} from "../home/home";
import {AlertController} from "ionic-angular";
import {HTTP} from "@ionic-native/http";
import {Md5} from "md5-typescript";

/**
 * Generated class for the ModificaprofiloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificaprofilo',
  templateUrl: 'modificaprofilo.html',
})
export class ModificaprofiloPage {
user;
fullname;
email;
codice;
telefono;
errore;
errorPass;
    password;
    items;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
      this.user =  {fullname:'' ,email: '',telefono:'',codice:'', password: '', confermaPassword:''};
      this.user.fullname=  navParams.get ( "fullname" ) ;
      this.user.codice=navParams.get ( "codiceFiscale" ) ;
      this.user.email= navParams.get ( "email" ) ;
      this.user.telefono=  navParams.get ( "telefono" ) ;
      this.errorPass=false;
}

ionViewDidLoad() {
console.log('ionViewDidLoad ModificaprofiloPage');
}
onAnnulla() {
  this.navCtrl.setRoot(ProfiloPage);
}
onConferma() {
 this.onControllaPass();
}

onControllaPass(){

    if(this.user.password.length>0 || this.user.confermaPassword.length>0||this.user.telefono.length>0){
        if(this.user.password!==this.user.confermaPassword){
            this.errorPass=true;
        }
        else{

            this.send();
        }
    }

}

send(){

    const criptPassword = Md5.init(this.user.password);

  let postParams = {
      'CF': this.user.codice,
      'PHONE':this.user.telefono,
      'PASSWORD':criptPassword

  }



  let datas = {
      'Action': 'Login',
      'UserName': 'bla',
      'Password': 'blabla'
  };
  let headers = {
      'Content-Type': 'application/json'
  };
  this.http.post('http://tcnapp.altervista.org/script_tncapp/modificaProfilo.php', postParams, headers)
      .then(data => {


          this.items=JSON.parse(data.data);
          this.errore= this.items.ERROR;
          this.telefono=this.items.RESULT.PHONE;
          this.password=this.items.RESULT.PASSWORD;



          if(this.errore==='yes'){

          }
          else{
              if(this.errore==='none'){
 this.navCtrl.setRoot(ProfiloPage);
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
this.errorPass=false;
}
}
