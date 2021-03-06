import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {HTTP} from "@ionic-native/http";
declare var google: any;

/**
 * Generated class for the VisualizzacivicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizzacivico',
  templateUrl: 'visualizzacivico.html',
})
export class VisualizzacivicoPage {
    @ViewChild('map') mapRef: ElementRef;
items: any;
errore: any;
    latitudine:any;
    longitudine:any;
    dug:any;
    civico:any;
    denominazione:any;
    paese:any;
    esponente: any;
    fotoCasa:any;
    fotoCivico:any;
    read ;
    viewButton;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP, public alertCtrl: AlertController) {
      this.latitudine=  navParams.get ( "latitudine" ) ;
      this.longitudine= navParams.get ( "longitudine" ) ;
      this.read=true;
      this.viewButton=false;

  }

  ionViewDidLoad() {
      this.showMap();
      this.send();
  }
    showMap(){
        const location= new google.maps.LatLng(this.latitudine, this.longitudine);

        const options={
            zoom: 15,
            center: location
        }
        const map= new google.maps.Map(this.mapRef.nativeElement, options);

        this.addMarker(location, map);
    }

    addMarker(position, map){
        let marker= new google.maps.Marker({
            position,
            map,
            draggable:false,
            animation: google.maps.Animation.DROP,
            title: "Drag me!",
            label: this.civico,
        });

        return marker;
    }

    elimina(){
        this.navCtrl.setRoot(HomePage);

    }

    modificaCivico(){
        this.navCtrl.setRoot(HomePage);

    }


    send(){

        let postParams = {
            'LATITUDINE': this.latitudine,
            'LONGITUDINE': this.longitudine
        }

        let datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/visualizzaCivico.php', postParams, headers)
            .then(data => {


                this.items=JSON.parse(data.data);
                this.errore= this.items.ERROR;

                    if(this.errore==='none'){

                        this.paese=this.items.RESULT.NOMECOMUNE;
                        this.dug=this.items.RESULT.DUG;
                        this.denominazione=this.items.RESULT.DENOMINAZIONE;
                        this.civico=this.items.RESULT.CIVICO;
                        this.esponente=""+this.items.RESULT.ESPONENTE;


                        if(this.items.RESULT.PATHFOTOCIVICO===null || this.items.RESULT.PATHFOTOABITAZIONE===null){
                          this.fotoCivico="assets/imgs/logoApp.png";
                          this.fotoCasa="assets/imgs/logoApp.png";
                        }
                        else{
                     this.fotoCivico=this.items.RESULT.PATHFOTOCIVICO;
                     this.fotoCasa=this.items.RESULT.PATHFOTOABITAZIONE;
                            //this.read=false;
                           // this.viewButton=true;


                        }

                    }


            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });


    }

    onAnnulla(){
        this.navCtrl.setRoot(HomePage);
    }

   /* onModifica(){

        let postParams = {
            'ESPONENTE': this.esponente,
            'CIVICO': this.civico,
            'DENOOMINAZIONE': this.denominazione

        }

        let datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        let headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/modificaCivico.php', postParams, headers)
            .then(data => {


                this.items=JSON.parse(data.data);
                this.errore= this.items.ERROR;

                if(this.errore==='none'){

                    this.paese=this.items.RESULT.NOMECOMUNE;
                    this.dug=this.items.RESULT.DUG;
                    this.denominazione=this.items.RESULT.DENOMINAZIONE;
                    this.civico=this.items.RESULT.CIVICO;
                    this.esponente=""+this.items.RESULT.ESPONENTE;


                    if(this.items.RESULT.PATHFOTOCIVICO===null || this.items.RESULT.PATHFOTOABITAZIONE===null){
                        this.fotoCivico="assets/imgs/logoApp.png";
                        this.fotoCasa="assets/imgs/logoApp.png";
                    }
                    else{
                        this.fotoCivico=this.items.RESULT.PATHFOTOCIVICO;
                        this.fotoCasa=this.items.RESULT.PATHFOTOABITAZIONE;
                        this.read=false;
                        this.viewButton=true;


                    }

                }


            })
            .catch(error => {

                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });

    }*/

}
