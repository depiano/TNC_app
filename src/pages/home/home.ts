import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {MappaPage} from "../mappa/mappa";
import {VisualizzacivicoPage} from "../visualizzacivico/visualizzacivico";
import {ProfiloPage} from "../profilo/profilo";
import {HTTP} from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    user;
    items : any;
public fullname;
public codice;
public email;
sessione;

  constructor(private http: HTTP, public navCtrl: NavController, public alertCtrl: AlertController, public   navParams: NavParams ) {
     this.sessione=sessionStorage.getItem('sessionCodice');
      this.user =  {email: '', password: '',fullname: sessionStorage.getItem('sessionFullname')};
      this.codice=navParams.get ( "codiceFiscale" ) ;
      this.email= navParams.get ( "email" ) ;

  }

    ionViewDidLoad() {
       this.send();
    }

  aggiungiCivico(){
      this.navCtrl.setRoot(MappaPage);
  }

  visualizzaCivico(lat,long){
     this.navCtrl.push(VisualizzacivicoPage, {latitudine: lat,longitudine: long});
  }

    send(){

        let postParams = {
            'CF':this.sessione,

        }

        let datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/home.php', postParams, headers)
            .then(data => {

                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                this.items=JSON.parse(data.data);
                this.items=this.items.result;


            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });

    }


}
