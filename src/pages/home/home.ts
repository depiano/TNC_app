import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {MappaPage} from "../mappa/mappa";
import {VisualizzacivicoPage} from "../visualizzacivico/visualizzacivico";
import {HTTP} from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    user;
    items : any;
    rilievo:any;
public fullname;
public codice;
public email;
sessione;
marcatore;
stato;
errore;
inattesa;
validato;
nonvalidato;


  constructor(private http: HTTP, public navCtrl: NavController, public alertCtrl: AlertController, public   navParams: NavParams ) {
     this.sessione=sessionStorage.getItem('sessionCodice');
      this.user =  {email: '', password: '',fullname: sessionStorage.getItem('sessionFullname')};
      this.codice=navParams.get ( "codiceFiscale" ) ;

      this.email= navParams.get ( "email" ) ;
this.marcatore='assets/imgs/marker.png';
this.stato='';
this.validato=false;
this.nonvalidato=false;
this.inattesa=false;


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


                this.items=JSON.parse(data.data);
                this.rilievo=this.items.RESULT;
                this.errore=this.items.ERROR;
                if(this.errore="none"){



                }







            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });

    }


    onCambiaStato(stato: string){

        if(stato ==='VALIDATO'){
         return true;

        }
        return false;

        }


        onAttesa(stato: string){
            if(stato ==='IN ATTESA'){
                return true;
            }
            return false;
        }

    onNonValidato(stato: string){
        if(stato ==='NON VALIDATO'){
            return true;
        }
        return false;
    }





}
