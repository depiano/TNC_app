import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ModificaprofiloPage} from "../modificaprofilo/modificaprofilo";
import {HTTP} from "@ionic-native/http";


@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})
export class ProfiloPage {
  user;
  items;
  errore;
  sessione;
  fullname;
  email;
  cf;
  telefono;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
      this.user =  {fullname:'' ,email: '',telefono:'',codice:''};
      this.sessione= this.sessione=sessionStorage.getItem('sessionCodice');

  }
    ionViewDidLoad() {
        this.send();
    }


    send(){
        let postParams = {
            'CF': this.sessione
        }

        let datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/profilo.php', postParams, headers)
            .then(data => {


                this.items=JSON.parse(data.data);
                this.errore= this.items.ERROR;


                if(this.errore==='yes'){

                }
                else{
                    if(this.errore==='none'){
                       this.user.fullname=this.items.RESULT.FULLNAME;
                       this.user.email=this.items.RESULT.EMAIL;
                       this.user.codice=this.items.RESULT.CF;
                       this.user.telefono=this.items.RESULT.PHONE;

                    }
                }

            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });


    }

    onModifica() {
        this.navCtrl.push(ModificaprofiloPage,{fullname:this.user.fullname,codiceFiscale:this.user.codice,
            email:this.user.email,telefono: this.user.telefono});
    }


}
