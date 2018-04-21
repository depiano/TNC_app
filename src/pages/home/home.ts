import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MappaPage} from "../mappa/mappa";
import {VisualizzacivicoPage} from "../visualizzacivico/visualizzacivico";
import {HttpClient} from "@angular/common/http";
import {ProfiloPage} from "../profilo/profilo";
import {HTTP} from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    user;
    items : any;

  constructor(private http: HTTP, public navCtrl: NavController, public alertCtrl: AlertController) {
      this.user =  {email: '', password: ''};
      this.send();
  }

  aggiungiCivico(){
      this.navCtrl.setRoot(MappaPage);
  }

  visualizzaCivico(item){
     this.navCtrl.push(VisualizzacivicoPage, {item: item});
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
        this.http.post('http://tcnapp.altervista.org/script_tncweb/prova.php', postParams, headers)
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
