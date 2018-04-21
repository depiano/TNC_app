import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
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

    latitudine:any;
    longitudine:any;
    dug:any;
    civico:any;
    denominazione:any;
    regione:any;
    provincia:any;
    paese:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.latitudine="41.9653395";
      this.longitudine="14.8964833";
      this.dug="Contrada";
      this.civico=56;
      this.denominazione="Cataldi";
      this.regione="Campania";
      this.provincia="Avellino";
      this.paese="Montefalcione";
  }

  ionViewDidLoad() {
      this.showMap();
  }
    showMap(){
        const location= new google.maps.LatLng(41.9653395, 14.8964833);

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
            draggable:true,
            animation: google.maps.Animation.DROP,
            title: "Drag me!",
            label: "A",
        });

        return marker;
    }

    elimina(){
        this.navCtrl.setRoot(HomePage);

    }

    modificaCivico(){
        this.navCtrl.setRoot(HomePage);

    }
}
