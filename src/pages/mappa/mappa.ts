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
        var Fisciano = [
            {lat:40.7569672387864, lng:14.8469033932164},
            {lat:40.7548932018406, lng:14.8440531838236},
            {lat:40.75460309534711,lng: 14.8434735532348},
            {lat:40.7543970452326, lng:14.8424796062293},
            {lat:40.7572502249888, lng:14.8358376567619},
            {lat:40.7644690742173, lng:14.8205711954808},
            {lat:40.7753523414929, lng:14.8144276698351},
            {lat:40.7759696457375, lng:14.8185965360347},
            {lat:40.7768306464178, lng:14.8215938018657},
            {lat:40.7770860903149, lng: 14.8221490467869},
            {lat:40.7777808228682, lng:14.822917450509},
            {lat:40.7811907444461, lng:14.825350828816},
            {lat:40.7835873101809, lng:14.826552773831},
            {lat:40.7844887991609, lng:14.8268820128328},
            {lat:40.79021181605331,lng:14.8286098577924},
            {lat:40.7910419063102, lng: 14.8285716610082},
            {lat:40.7917264052915, lng: 14.8284755328428},
            {lat:40.7925348771965, lng:14.8283310610717},
            {lat:40.7932809556526, lng:14.8279967833361},
            {lat:40.7936785296411, lng:14.8277007653922},
            {lat:40.7940855168954, lng:14.8270413503017},
            {lat:40.7941551990348, lng:14.8264656000153},
            {lat:40.7944147946612, lng:14.8256947852795},
            {lat:40.7948817770413, lng:14.8248281484863},
            {lat:40.8003093304545, lng:14.8173691141031},
            {lat:40.8031436620117, lng:14.8146344225689},
            {lat:40.8039196602481, lng:14.8138857252676},
            {lat:40.8045291122828, lng: 14.8127811023978},
            {lat:40.8047199934392, lng:14.8118712880723},
            {lat:40.80480779512491,lng:14.8114527776093},
            {lat:40.8051418080726, lng: 14.8082271656103},
            {lat:40.8050412347875, lng:14.8076341827317},
            {lat:40.8026580916892, lng:14.7994732522797},
            {lat:40.8019108009578, lng:14.7992976650185},
            {lat:40.799482953517,  lng:14.7913867218854},
            {lat:40.8011219421419, lng: 14.7860391630079},
            {lat:40.8017048252549, lng:14.7810419768125},
            {lat:40.8054401952143, lng: 14.7743309989603},
            {lat:40.80465885183041,lng:14.7650898745179},
            {lat:40.8042049422059, lng:14.7652321183009},
            {lat:40.8036291889534, lng:14.7653514864993},
            {lat:40.8030301579324, lng: 14.7654239995213},
            {lat:40.8023561724852, lng:14.7654686138214},
            {lat:40.7927464198528, lng:14.7656150610603},
            {lat:40.7920295681202, lng:14.7656269676265},
            {lat:40.7917210545204, lng:14.7656233598447},
            {lat:40.791310885349,  lng: 14.7656154165859},
            {lat:40.7907116811508, lng:14.7656034456002},
            {lat:40.78939808508691,lng:14.7654228596773},
            {lat:40.7891134235096, lng:14.7653838260127},
            {lat:40.7887724198636, lng:14.7651879401476},
            {lat:40.7885793221815, lng:14.7650708599837},
            {lat:40.7880666086997, lng: 14.7647599920637},
            {lat:40.7878029041954, lng:14.7646001050772},
            {lat:40.7874671622524, lng:14.7643619763465},
            {lat:40.786364844574,  lng:14.7633664000576},
            {lat:40.7861550557345, lng:14.7631471864249},
            {lat:40.7855943062338, lng:14.7625612540961},
            {lat:40.7854407123894, lng: 14.762400764736},
            {lat:40.7853175963032, lng:14.7622721221207},
            {lat:40.7835511882686, lng:14.7600824887407},
            {lat:40.7829558182788, lng:14.759343276363},
            {lat:40.7823692811849, lng:14.7585665082948},
            {lat:40.7801534381833, lng:14.7580818824421},
            {lat:40.77992521812191,lng: 14.758054962062},
            {lat:40.7780294733186, lng:14.7580426703552},
            {lat:40.77777983606111,lng: 14.7580529596206},
            {lat:40.7776053941879, lng: 14.7580723597328},
            {lat:40.77582884547091,lng: 14.75897988865},
            {lat:40.7756018901326, lng: 14.7591727815223},
            {lat:40.7753681482864, lng:14.7593714406809},
            {lat:40.7732237490459, lng:14.7636334041767},
            {lat:40.77284582531431,lng:14.7646182129894},
            {lat:40.7695769156715, lng:14.7737056091006},
            {lat:40.7611526492431, lng:14.7678464150925},
            {lat:40.760494131727,  lng: 14.7683227783251},
            {lat:40.7601086726543, lng:14.7687392100911},
            {lat:40.7576282219195, lng:14.7723366776105},
            {lat:40.757332711264,  lng:14.7732025861987},
            {lat:40.7571975543347, lng:14.7738517948284},
            {lat:40.7571547826214, lng:14.7740572389496},
            {lat:40.7570653575591, lng:14.7744945866005},
            {lat:40.7578134203366, lng: 14.7778811842591},
            {lat:40.7568237167358, lng:14.789328354844},
            {lat:40.7561373437229, lng: 14.7932165252023},
            {lat:40.752990316128,  lng:14.7970758425662},
            {lat:40.7453311302895, lng:14.8054384586028},
            {lat:40.7382618875071, lng: 14.811734590122},
            {lat:40.7370282663681, lng:14.8123657659526},
            {lat:40.7359449376189, lng:14.8129619716392},
            {lat:40.7352194446652, lng:14.8139584899271},
            {lat:40.7313710039602, lng:14.8199257972324},
            {lat:40.7327523066259, lng:14.8202906419241},
            {lat:40.7332217443562, lng:14.8207976414578},
            {lat:40.7361844881657, lng:14.8257527048592},
            {lat:40.7373657191739, lng:14.8283783077788},
            {lat:40.7379436809474, lng:14.8294074886308},
            {lat:40.7411497798517, lng: 14.8331064632597},
            {lat:40.7420154828927, lng:14.8338747137511},
            {lat:40.7451327494351, lng:14.8361283178519},
            {lat:40.7481806338386, lng: 14.8380631402456},
            {lat:40.7488314478887, lng:14.8386307012894},
            {lat:40.7505363154513, lng:14.8410426329012},
            {lat:40.7522535981954, lng:14.8440949805267},
            {lat:40.7525406710424, lng:14.8447342502695},
            {lat:40.752722700825, lng:14.8456690980671},
            {lat:40.7531148046686, lng:14.8478719739021},
            {lat:40.7569672387864, lng:14.8469033932164},
        ];




        // Construct the polygon.
        var limiteFisciano = new google.maps.Polygon({
            paths: Fisciano,
            strokeColor: '#1439ff',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#1439ff',
            fillOpacity: 0.10,
        });
        limiteFisciano.setMap(map);



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
