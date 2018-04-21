import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AggiungicivicoPage} from "../aggiungicivico/aggiungicivico";

declare var google: any;
/**
 * Generated class for the MappaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mappa',
  templateUrl: 'mappa.html',
})
export class MappaPage {
    @ViewChild('map') mapRef: ElementRef;
    latitudine:any;
    longitudine:any;
    LastLat:any;
    LastLng:any;
    prova: string="";
    locations: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }



    ionViewDidLoad(){
      //Geocalizzazione
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            this.latitudine=resp.coords.latitude;
            this.longitudine=resp.coords.longitude;
            this.LastLat= this.latitudine;
            this.LastLng= this.longitudine;
        }).catch((error) => {
            console.log('Error getting location', error);
        });

        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
        });
            this.showMap();

    }

    confermaPosizione(){
        this.navCtrl.push(AggiungicivicoPage, {latitudine: this.LastLat, longitudine: this.LastLng});

    }

    showMapWithPosition(){
        const location= new google.maps.LatLng(this.latitudine, this.longitudine);
        this.LastLat= this.latitudine;
        this.LastLng= this.longitudine;
        const options={
            center: location,
            zoom: 15
        }
        const map= new google.maps.Map(this.mapRef.nativeElement, options);

        this.addMarker(location, map);

        var locations = [
            ['Via Cardinal Dell Olio, n°34', 40.759421962401554,14.692081450942965, 4],
            ['Via Rupe, n°13', 40.75958449497789, 14.692164897700309, 5],
            ['Via Kenney, n°12', 40.759761474604254, 14.69226503422658, 3],
            ['Via Kennedy, n°67', 40.75987587912256, 14.692322255408612, 2],
            ['MVia Sant ANtonio Abate, n°3', 40.76014473358941, 14.692460537247712, 1]
        ];

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
        var Roccapiemonte = [
            {lat:40.7657981158734, lng:14.6961246283405},
            {lat:40.7684736939535, lng:14.6943572742833},
            {lat:40.7670027105486, lng:14.6866980378971},
            {lat:40.766536663893,  lng:14.6776360781577},
            {lat:40.7667244623426, lng:14.6771141307328},
            {lat:40.7670457828174, lng:14.6756193683446},
            {lat:40.7679981277934, lng:14.6594882874894},
            {lat:40.7670438885875, lng:14.6563774577233},
            {lat:40.76596586391381,lng:14.657247397652},
            {lat:40.7659766396426, lng:14.6582180709581},
            {lat:40.7650346156357, lng:14.6620864938814},
            {lat:40.7648484274642, lng:14.6626685492568},
            {lat:40.763009152601,  lng:14.6656516027216},
            {lat:40.7624713193261, lng:14.6665188912293},
            {lat:40.76139466943971,lng:14.6675422542161},
            {lat:40.7608076765326, lng:14.6678540619316},
            {lat:40.7601071958191, lng:14.6680940382282},
            {lat:40.759269436998,  lng:14.6682882741261},
            {lat:40.75837850500201,lng:14.6686481545231},
            {lat:40.7576128717951, lng:14.6691141535224},
            {lat:40.75686864124351,lng:14.6698764453449},
            {lat:40.7536782308659, lng:14.6755189449492},
            {lat:40.75370127201741,lng:14.6803410889426},
            {lat:40.7537269738605, lng:14.6857275535856},
            {lat:40.7536372067753, lng:14.6883297091426},
            {lat:40.7535472374918, lng:14.6904698736429},
            {lat:40.7527319858736, lng:14.6960288748174},
            {lat:40.74724325291361,lng:14.7039725070869},
            {lat:40.74521620003811,lng:14.705733761767},
            {lat:40.7517985984509, lng:14.7138506743964},
            {lat:40.7542385364511, lng:14.7100354301736},
            {lat:40.7657981158734, lng:14.6961246283405},



        ];




        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
            paths: Roccapiemonte,
            strokeColor: '#1439ff',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#1439ff',
            fillOpacity: 0.03,
        });
        bermudaTriangle.setMap(map);



    }

   showMap(){
        const location= new google.maps.LatLng(40.759082323356765, 14.691781673339584);

        const options={
            zoom: 15,
            center: location
        }
        const map= new google.maps.Map(this.mapRef.nativeElement, options);

        this.addMarker(location, map);
    }



    addMarker(position, map) {
        let marker = new google.maps.Marker({
            position,
            map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: "Drag me!",
            label: "A",
        });
        this.lastLatLng(marker);

        return marker;
    }

    lastLatLng(marker){
        google.maps.event.addListener(marker, 'dragend', () =>{
            this.LastLat= marker.position.lat();
            this.LastLng= marker.position.lng();
            console.log("new position");
            console.log(this.LastLat);
            console.log(this.LastLng);

        });
    }
}
