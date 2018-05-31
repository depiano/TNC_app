import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import {ViewController} from 'ionic-angular';
import {HTTP} from "@ionic-native/http";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {HomePage} from "../home/home";


/**
 * Generated class for the AggiungicivicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aggiungicivico',
  templateUrl: 'aggiungicivico.html',
})
export class AggiungicivicoPage {
    alert;
  latitudine:any;
  longitudine:any;
  DUG;
  civico;
  denominazione;
  paese;
  codicepostale;
  provincia;
  stringa:any;
  items;
  esponente;
  sessione;
  fotoAbitazione;
  fotoNumeroCivico;
  suggerimento;
  foto;
  errore;




    autocompleteItems;
    autocomplete;
    selectedItems;
    filteredItems;
    searchDUG= '';
    name='';



    constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer,  private http: HTTP,private nativeGeocoder: NativeGeocoder, public alertCtrl: AlertController) {
        this.alert=false;
        this.foto=false;
        this.fotoNumeroCivico='';
        this.fotoAbitazione='';
        this.esponente="";


        this.sessione=sessionStorage.getItem('sessionCodice');

        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.selectedItems = [];
        this.filteredItems = [];





        this.autocompleteItems =  [{"id":1,"name":"Accesso"},{"id":2,"name":"Alpe"},
            {"id":3,"name":"Alto"},{"id":4,"name":"Alzaia"},
            {"id":5,"name":"Androna"},{"id":6,"name":"Angiporto"},
            {"id":7,"name":"Archivolto"},{"id":8,"name":"Arco"},
            {"id":9,"name":"Area pedonale"},{"id":10,"name":"Autostrada"},
            {"id":11,"name":"Baluardo"},{"id":12,"name":"Belvedere"},
            {"id":13,"name":"Borgata"}, {"id":14,"name":"Borgetto"},
            {"id":15,"name":"Borgo"}, {"id":16,"name":"Cal"},{"id":17,"name":"Cala"},{"id":18,"name":"Calata"},
            {"id":19,"name":"Calle"},{"id":20,"name":"Castello"},{"id":21,"name":"Calto"},
            {"id":22,"name":"Campiello"},{"id":23,"name":"Campo"},{"id":24,"name":"Canto"},
            {"id":25,"name":"Canton"},{"id":26,"name":"Cantone"},{"id":27,"name":"Cascina"},
            {"id":28,"name":"Case sparse"},{"id":29,"name":"Cavalcavia"},{"id":30,"name":"Centro Abitato"},
            {"id":31,"name":"Chiassetto"},{"id":32,"name":"Chiassino"},{"id":33,"name":"Chiasso"},
            {"id":34,"name":"chiassuolo"},{"id":35,"name":"Castello"},{"id":36,"name":"Descrizione"},
            {"id":37,"name":"Circonvalazione"},{"id":38,"name":"Collegamento"},{"id":39,"name":"Complanare"},
            {"id":40,"name":"Contrà"},{"id":41,"name":"Contrada"},{"id":42,"name":"Cupa"},
            {"id":43,"name":"Discesa"},{"id":44,"name":"Emiciclo"},{"id":45,"name":"Esedra"},
            {"id":46,"name":"Fondamenta"},{"id":47,"name":"Fornice"},{"id":48,"name":"Foro"},
            {"id":49,"name":"Frazione"},{"id":50,"name":"Galleria"},{"id":51,"name":"Gradelle"},
            {"id":52,"name":"Gradinata"},{"id":53,"name":"Gradini"},{"id":54,"name":"Gradoni"},
            {"id":55,"name":"Larghetto"},{"id":56,"name":"Largo"},{"id":57,"name":"Lea"},
            {"id":58,"name":"Leva"},{"id":59,"name":"Litoranea"},{"id":60,"name":"Località"},
            {"id":61,"name":"Lungadda"},{"id":62,"name":"Lungadige"},{"id":63,"name":"Lungagno"},
            {"id":64,"name":"Lungargine"},{"id":65,"name":"Lungarno"},{"id":66,"name":"Lungobisagno"},
            {"id":67,"name":"Lungocastellano"},{"id":68,"name":"Lungocelano"},{"id":69,"name":"Lungocrati"},
            {"id":70,"name":"Lungodora"},{"id":71,"name":"Lungofermulla"},{"id":72,"name":"Lungofiume"},
            {"id":73,"name":"Lungofoglia"},{"id":74,"name":"Lungofrigido"},{"id":75,"name":"Lungogesso"},
            {"id":76,"name":"Lungoglio"},{"id":77,"name":"Lungolago"},{"id":78,"name":"Lungolona"},
            {"id":79,"name":"Lungomallero"},{"id":80,"name":"Lungomalone"},{"id":81,"name":"Lungomare"},
            {"id":82,"name":"Lungomazaro"},{"id":83,"name":"Lungomella"},{"id":84,"name":"Lungomera"},
            {"id":85,"name":"Lungomincio"},{"id":86,"name":"Lungomonte"},{"id":87,"name":"Lungonera"},
            {"id":88,"name":"Lungoparco"},{"id":89,"name":"Lungopesa"},{"id":90,"name":"Lungolario"},
            {"id":91,"name":"Lungopo"},{"id":92,"name":"Lungorio"},{"id":93,"name":"Lungosabato"},
            {"id":94,"name":"Lungosile"},{"id":95,"name":"Lungostura"},{"id":96,"name":"Lungotanaro"},
            {"id":97,"name":"Lungotartaro"},{"id":98,"name":"Lungotevere"},{"id":99,"name":"Lungotorrente"},
            {"id":100,"name":"Lungotronto"},{"id":101,"name":"Molo"},{"id":102,"name":"Mura"},
            {"id":103,"name":"Nucleo"},{"id":104,"name":"Nucleo abitato"},{"id":105,"name":"Parcheggio"},
            {"id":106,"name":"Passaggio"},{"id":107,"name":"Passaggio pedonale"},{"id":108,"name":"Passaggio privato"},
            {"id":107,"name":"Passante"},{"id":108,"name":"Passeggiata"},{"id":109,"name":"Passeggio "},
            {"id":110,"name":"Passo"},{"id":111,"name":"Passo"},{"id":112,"name":"Pendio"},
            {"id":113,"name":"Percorso ciclabile"},{"id":114,"name":"Percorso ciclopedonale"},{"id":115,"name":"Percorso pedonale"},
            {"id":116,"name":"Piaggia"},{"id":117,"name":"Piano"},{"id":118,"name":"Piazza"},
            {"id":119,"name":"Piazzale"},{"id":120,"name":"Piazzaletto"},{"id":121,"name":"Piazzetta"},
            {"id":122,"name":"Piazzola"},{"id":123,"name":"Piazzolo"},{"id":124,"name":"Pista ciclabile"},
            {"id":125,"name":"Podere"},{"id":128,"name":"Ponte"},{"id":129,"name":"Porta"},
            {"id":130,"name":"Portichetti"},{"id":131,"name":"Portici"},{"id":132,"name":"Portico"},
            {"id":133,"name":"Postierla"},{"id":134,"name":"Quadrato"},{"id":135,"name":"Quartiere"},
            {"id":136,"name":"Raccordo"},{"id":137,"name":"Ramo"},{"id":138,"name":"Rampa"},
            {"id":139,"name":"Rampari"},{"id":140,"name":"Recinto"},{"id":141,"name":"Recinto privato"},
            {"id":142,"name":"Regione"},{"id":143,"name":"Rigaste"},{"id":144,"name":"Rione"},
            {"id":145,"name":"Ripa"},{"id":146,"name":"Riva"},{"id":147,"name":"Riviera"},
            {"id":148,"name":"Ronco"},{"id":149,"name":"Rotatoria"},{"id":150,"name":"Rotonda"},
            {"id":151,"name":"Rua"},{"id":152,"name":"Ruga"},{"id":153,"name":"Salita"},
            {"id":154,"name":"Scala"},{"id":155,"name":"Scale"},{"id":156,"name":"Scaletta"},
            {"id":157,"name":"Scalette"},{"id":158,"name":"Scali"},{"id":159,"name":"Scalinata"},
            {"id":200,"name":"Scalone"},{"id":201,"name":"Scesa"},{"id":202,"name":"Sdrucciolo"},
            {"id":203,"name":"Selciato"},{"id":204,"name":"Sentiero"},{"id":205,"name":"Slargo"},
            {"id":206,"name":"Sopportico"},{"id":207,"name":"Sottopassaggio"},{"id":208,"name":"Sottopasso"},
            {"id":209,"name":"Sottoportico"},{"id":210,"name":"Sottovia"},{"id":211,"name":"Sovrapasso"},
            {"id":212,"name":"Spalto"},{"id":213,"name":"Spianata"},{"id":214,"name":"Spiazzo"},
            {"id":215,"name":"Strada"},{"id":216,"name":"Strada Antica"},{"id":217,"name":"Strada comunale"},
            {"id":218,"name":"Strada consortile"},{"id":219,"name":"Strada nuova"},{"id":220,"name":"Strada panoramica"},
            {"id":221,"name":"Strada poderale"},{"id":222,"name":"Strada privata"},{"id":223,"name":"Strada prvinciale"},
            {"id":224,"name":"Strada regionale"},{"id":225,"name":"Strada statale"},{"id":226,"name":"Strada Vecchia"},
            {"id":227,"name":"Strada Vicinale"},{"id":228,"name":"Stradella"},{"id":229,"name":"Stradello"},
            {"id":230,"name":"Stradello Privato"},{"id":231,"name":"Stradina"},{"id":232,"name":"Stradone"},
            {"id":233,"name":"Stretta"},{"id":234,"name":"Stretta"},{"id":235,"name":"Stretto"},
            {"id":236,"name":"Strettoia"},{"id":237,"name":"Subborgo"},{"id":238,"name":"Supportico"},
            {"id":239,"name":"Tangenziale"},{"id":240,"name":"Tetti"},{"id":241,"name":"Traforo"},
            {"id":242,"name":"Tratturo"},{"id":243,"name":"Traversa"},{"id":244,"name":"Traversa privata"},
            {"id":245,"name":"Trazzera"},{"id":246,"name":"Tresanda"},{"id":247,"name":"Vaglio"},
            {"id":248,"name":"Vanella"},{"id":249,"name":"Via"},{"id":250,"name":"Via antica"},
            {"id":251,"name":"Via belvedere"},{"id":252,"name":"Via centrale"},{"id":253,"name":"Via cieca"},
            {"id":254,"name":"Via Comunale"},{"id":255,"name":"Via interna"},{"id":256,"name":"Via nazionale"},
            {"id":257,"name":"Via nuova"},{"id":258,"name":"Via panoramica"},{"id":259,"name":"Via privata"},
            {"id":260,"name":"Via provinciale"},{"id":261,"name":"Via statale"},{"id":262,"name":"Via stretta"},
            {"id":263,"name":"Via vecchia"},{"id":264,"name":"Via vicinale"},{"id":265,"name":"Viadotto"},
            {"id":266,"name":"Viale"},{"id":267,"name":"Viale belvedere"},{"id":268,"name":"Vialetto"},
            {"id":269,"name":"Vico"},{"id":270,"name":"Vico chiuso"},{"id":271,"name":"Vico cieco"},
            {"id":272,"name":"Vico privato"},{"id":273,"name":"Vico privato"},{"id":274,"name":"Vico storto"},
            {"id":275,"name":"Vicoletto"},{"id":276,"name":"Vicoletto cieco"},{"id":277,"name":"Vicolo"},
            {"id":278,"name":"Vicolo chiuso"},{"id":279,"name":"Vicolo cieco"},{"id":280,"name":"Vicolo dietro"},
            {"id":281,"name":"Vicolo privato"},{"id":282,"name":"Vicolo storto"},{"id":283,"name":"Villaggio"},
            {"id":284,"name":"Viottolo"},{"id":285,"name":"Viuzza"},{"id":286,"name":"Viuzzo"},
            {"id":287,"name":"Vo'"},{"id":288,"name":"Vocabolo"},{"id":289,"name":"Volta"},
            {"id":290,"name":"Volta"},{"id":291,"name":"Volte"},{"id":292,"name":"Volto"},
            {"id":293,"name":"Voltone"},{"id":294,"name":"Zona"},{"id":295,"name":"Zona artigianale"},
            {"id":296,"name":"Zona industriale"},];






      this.latitudine=this.navParams.get('latitudine');
      this.longitudine=this.navParams.get('longitudine');
       this.DUG="";
       this.denominazione="";
       this.paese="";

       this.codicepostale="";
       this.provincia="";
        this.nativeGeocoder.reverseGeocode(this.latitudine, this.longitudine)
            .then((result: NativeGeocoderReverseResult) => {

                this.paese=result[0].locality.toUpperCase();
                this.suggerimento=result[0].thoroughfare;
                this.codicepostale=result[0].postalCode;
                this.provincia=result[0].subAdministrativeArea;

            })
            .catch((error: any) => console.log(error));



  }

  ionViewDidLoad() {

  }
onClear(){
        if(this.name===''){
            this.filteredItems=[];

        }
}

    dismiss() {
        this.filteredItems=[];
        //this.viewCtrl.dismiss(this.selectedItems);
    }

    close(){
        this.viewCtrl.dismiss(this.selectedItems);
    }

    chooseItem(item: any) {
       // this.selectedItems.push(item);
       this.searchDUG= '' +item.name.toUpperCase();
        this.filteredItems=[];
    }


    assignCopy(){
        this.filteredItems = Object.assign([], this.selectedItems);
    }

    filterItem(value){
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.autocompleteItems).filter(
            item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }






  conferma(){

   // this.oncontrollaCampi();

      var data;
      var time = new Date();
      var giorno= ''+time.getDate();
      var anno =''+time.getFullYear();
      var month= time.getMonth()+1;
      var mese=''+month;
      if(giorno.length===1)
          giorno='0'+giorno;
      if(mese.length===1)
          mese='0'+mese;
data=giorno+'/'+mese+'/'+anno;
      if(this.latitudine === ''||this.longitudine === ''||this.searchDUG === ''||this.denominazione === ''||this.civico === ''){
          this.alert=true;
      }
      else {

          if (this.fotoNumeroCivico === '' || this.fotoAbitazione === '') {
              this.foto = true;
          }
          else {
              if(this.esponente ===''){
                  this.esponente='NON DISPONIBILE';
              }
              let postParams = {
                  'LONGITUDINE': this.longitudine,
                  'LATITUDINE': this.latitudine,
                  'CODISTAT': '065052',
                  'NOMECOMUNE': this.paese,
                  'DUG': this.searchDUG,
                  'DENOMINAZIONE': this.denominazione.toUpperCase(),
                  'CIVICO': this.civico,
                  'ESPONENTE': this.esponente,
                  'PATHFOTOCIVICO': 'http://tcnapp.altervista.org/uploads/' + this.fotoNumeroCivico,
                  'PATHFOTOABITAZIONE': 'http://tcnapp.altervista.org/uploads/' + this.fotoAbitazione,
                  'CF_USER': this.sessione,
                  'STATO': 'IN ATTESA',
                  'DATA': data
              }

              let headers = {
                  'Content-Type': 'application/json'
              };
              this.http.post('http://tcnapp.altervista.org/script_tncapp/addCivico.php', postParams, headers)
                  .then(data => {
                      this.items = JSON.parse(data.data);
                      this.errore = this.items.ERROR;
                      if (this.errore === 'none') {
                          this.navCtrl.setRoot(HomePage);
                      }

                  })
                  .catch(error => {

                      console.log(error.status);
                      console.log(error.error); // error message as string
                      console.log(error.headers);

                  });
          }
      }
  }




    fotoCivico(){

        var data = new Date();


        var time =data.getTime();

        let options = {

            quality: 100
        };


        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.fotoNumeroCivico=time;

            const fileTransfer: FileTransferObject = this.transfer.create();

            let options1: FileUploadOptions = {
                fileKey: 'file',
                fileName: this.fotoNumeroCivico,
                headers: {}

            }

            fileTransfer.upload(imageData, 'http://tcnapp.altervista.org/upload.php', options1)
                .then((data) => {
                    // success
                    alert("success");
                }, (err) => {
                    // error
                    alert("error"+JSON.stringify(err));
                });


        });


    }


    fotoCasa(){
        var data = new Date();


        var time =data.getTime();


        let options = {

            quality: 100
        };

this.fotoAbitazione=time;
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:

            const fileTransfer: FileTransferObject = this.transfer.create();

            let options1: FileUploadOptions = {
                fileKey: 'file',
                fileName: this.fotoAbitazione,
                headers: {}

            }

            fileTransfer.upload(imageData, 'http://tcnapp.altervista.org/upload.php', options1)
                .then((data) => {
                    // success
                    alert("success");
                }, (err) => {
                    // error
                    alert("error"+JSON.stringify(err));
                });


        });


    }

onAnnulla(){
    this.navCtrl.setRoot(HomePage);
}

oncontrollaCampi(){
    if(this.latitudine === ''||this.longitudine === ''||this.searchDUG === ''||this.denominazione === ''||this.civico === ''){
        this.alert=true;
    }

}

    onAlert(){
        this.foto=false;
        this.alert=false;
    }

}
