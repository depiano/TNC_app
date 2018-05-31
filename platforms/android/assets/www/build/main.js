webpackJsonp([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungicivicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AggiungicivicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AggiungicivicoPage = /** @class */ (function () {
    function AggiungicivicoPage(viewCtrl, navCtrl, navParams, camera, transfer, http, nativeGeocoder, alertCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.http = http;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
        this.searchDUG = '';
        this.name = '';
        this.alert = false;
        this.foto = false;
        this.fotoNumeroCivico = '';
        this.fotoAbitazione = '';
        this.esponente = "";
        this.sessione = sessionStorage.getItem('sessionCodice');
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.selectedItems = [];
        this.filteredItems = [];
        this.autocompleteItems = [{ "id": 1, "name": "Accesso" }, { "id": 2, "name": "Alpe" },
            { "id": 3, "name": "Alto" }, { "id": 4, "name": "Alzaia" },
            { "id": 5, "name": "Androna" }, { "id": 6, "name": "Angiporto" },
            { "id": 7, "name": "Archivolto" }, { "id": 8, "name": "Arco" },
            { "id": 9, "name": "Area pedonale" }, { "id": 10, "name": "Autostrada" },
            { "id": 11, "name": "Baluardo" }, { "id": 12, "name": "Belvedere" },
            { "id": 13, "name": "Borgata" }, { "id": 14, "name": "Borgetto" },
            { "id": 15, "name": "Borgo" }, { "id": 16, "name": "Cal" }, { "id": 17, "name": "Cala" }, { "id": 18, "name": "Calata" },
            { "id": 19, "name": "Calle" }, { "id": 20, "name": "Castello" }, { "id": 21, "name": "Calto" },
            { "id": 22, "name": "Campiello" }, { "id": 23, "name": "Campo" }, { "id": 24, "name": "Canto" },
            { "id": 25, "name": "Canton" }, { "id": 26, "name": "Cantone" }, { "id": 27, "name": "Cascina" },
            { "id": 28, "name": "Case sparse" }, { "id": 29, "name": "Cavalcavia" }, { "id": 30, "name": "Centro Abitato" },
            { "id": 31, "name": "Chiassetto" }, { "id": 32, "name": "Chiassino" }, { "id": 33, "name": "Chiasso" },
            { "id": 34, "name": "chiassuolo" }, { "id": 35, "name": "Castello" }, { "id": 36, "name": "Descrizione" },
            { "id": 37, "name": "Circonvalazione" }, { "id": 38, "name": "Collegamento" }, { "id": 39, "name": "Complanare" },
            { "id": 40, "name": "Contrà" }, { "id": 41, "name": "Contrada" }, { "id": 42, "name": "Cupa" },
            { "id": 43, "name": "Discesa" }, { "id": 44, "name": "Emiciclo" }, { "id": 45, "name": "Esedra" },
            { "id": 46, "name": "Fondamenta" }, { "id": 47, "name": "Fornice" }, { "id": 48, "name": "Foro" },
            { "id": 49, "name": "Frazione" }, { "id": 50, "name": "Galleria" }, { "id": 51, "name": "Gradelle" },
            { "id": 52, "name": "Gradinata" }, { "id": 53, "name": "Gradini" }, { "id": 54, "name": "Gradoni" },
            { "id": 55, "name": "Larghetto" }, { "id": 56, "name": "Largo" }, { "id": 57, "name": "Lea" },
            { "id": 58, "name": "Leva" }, { "id": 59, "name": "Litoranea" }, { "id": 60, "name": "Località" },
            { "id": 61, "name": "Lungadda" }, { "id": 62, "name": "Lungadige" }, { "id": 63, "name": "Lungagno" },
            { "id": 64, "name": "Lungargine" }, { "id": 65, "name": "Lungarno" }, { "id": 66, "name": "Lungobisagno" },
            { "id": 67, "name": "Lungocastellano" }, { "id": 68, "name": "Lungocelano" }, { "id": 69, "name": "Lungocrati" },
            { "id": 70, "name": "Lungodora" }, { "id": 71, "name": "Lungofermulla" }, { "id": 72, "name": "Lungofiume" },
            { "id": 73, "name": "Lungofoglia" }, { "id": 74, "name": "Lungofrigido" }, { "id": 75, "name": "Lungogesso" },
            { "id": 76, "name": "Lungoglio" }, { "id": 77, "name": "Lungolago" }, { "id": 78, "name": "Lungolona" },
            { "id": 79, "name": "Lungomallero" }, { "id": 80, "name": "Lungomalone" }, { "id": 81, "name": "Lungomare" },
            { "id": 82, "name": "Lungomazaro" }, { "id": 83, "name": "Lungomella" }, { "id": 84, "name": "Lungomera" },
            { "id": 85, "name": "Lungomincio" }, { "id": 86, "name": "Lungomonte" }, { "id": 87, "name": "Lungonera" },
            { "id": 88, "name": "Lungoparco" }, { "id": 89, "name": "Lungopesa" }, { "id": 90, "name": "Lungolario" },
            { "id": 91, "name": "Lungopo" }, { "id": 92, "name": "Lungorio" }, { "id": 93, "name": "Lungosabato" },
            { "id": 94, "name": "Lungosile" }, { "id": 95, "name": "Lungostura" }, { "id": 96, "name": "Lungotanaro" },
            { "id": 97, "name": "Lungotartaro" }, { "id": 98, "name": "Lungotevere" }, { "id": 99, "name": "Lungotorrente" },
            { "id": 100, "name": "Lungotronto" }, { "id": 101, "name": "Molo" }, { "id": 102, "name": "Mura" },
            { "id": 103, "name": "Nucleo" }, { "id": 104, "name": "Nucleo abitato" }, { "id": 105, "name": "Parcheggio" },
            { "id": 106, "name": "Passaggio" }, { "id": 107, "name": "Passaggio pedonale" }, { "id": 108, "name": "Passaggio privato" },
            { "id": 107, "name": "Passante" }, { "id": 108, "name": "Passeggiata" }, { "id": 109, "name": "Passeggio " },
            { "id": 110, "name": "Passo" }, { "id": 111, "name": "Passo" }, { "id": 112, "name": "Pendio" },
            { "id": 113, "name": "Percorso ciclabile" }, { "id": 114, "name": "Percorso ciclopedonale" }, { "id": 115, "name": "Percorso pedonale" },
            { "id": 116, "name": "Piaggia" }, { "id": 117, "name": "Piano" }, { "id": 118, "name": "Piazza" },
            { "id": 119, "name": "Piazzale" }, { "id": 120, "name": "Piazzaletto" }, { "id": 121, "name": "Piazzetta" },
            { "id": 122, "name": "Piazzola" }, { "id": 123, "name": "Piazzolo" }, { "id": 124, "name": "Pista ciclabile" },
            { "id": 125, "name": "Podere" }, { "id": 128, "name": "Ponte" }, { "id": 129, "name": "Porta" },
            { "id": 130, "name": "Portichetti" }, { "id": 131, "name": "Portici" }, { "id": 132, "name": "Portico" },
            { "id": 133, "name": "Postierla" }, { "id": 134, "name": "Quadrato" }, { "id": 135, "name": "Quartiere" },
            { "id": 136, "name": "Raccordo" }, { "id": 137, "name": "Ramo" }, { "id": 138, "name": "Rampa" },
            { "id": 139, "name": "Rampari" }, { "id": 140, "name": "Recinto" }, { "id": 141, "name": "Recinto privato" },
            { "id": 142, "name": "Regione" }, { "id": 143, "name": "Rigaste" }, { "id": 144, "name": "Rione" },
            { "id": 145, "name": "Ripa" }, { "id": 146, "name": "Riva" }, { "id": 147, "name": "Riviera" },
            { "id": 148, "name": "Ronco" }, { "id": 149, "name": "Rotatoria" }, { "id": 150, "name": "Rotonda" },
            { "id": 151, "name": "Rua" }, { "id": 152, "name": "Ruga" }, { "id": 153, "name": "Salita" },
            { "id": 154, "name": "Scala" }, { "id": 155, "name": "Scale" }, { "id": 156, "name": "Scaletta" },
            { "id": 157, "name": "Scalette" }, { "id": 158, "name": "Scali" }, { "id": 159, "name": "Scalinata" },
            { "id": 200, "name": "Scalone" }, { "id": 201, "name": "Scesa" }, { "id": 202, "name": "Sdrucciolo" },
            { "id": 203, "name": "Selciato" }, { "id": 204, "name": "Sentiero" }, { "id": 205, "name": "Slargo" },
            { "id": 206, "name": "Sopportico" }, { "id": 207, "name": "Sottopassaggio" }, { "id": 208, "name": "Sottopasso" },
            { "id": 209, "name": "Sottoportico" }, { "id": 210, "name": "Sottovia" }, { "id": 211, "name": "Sovrapasso" },
            { "id": 212, "name": "Spalto" }, { "id": 213, "name": "Spianata" }, { "id": 214, "name": "Spiazzo" },
            { "id": 215, "name": "Strada" }, { "id": 216, "name": "Strada Antica" }, { "id": 217, "name": "Strada comunale" },
            { "id": 218, "name": "Strada consortile" }, { "id": 219, "name": "Strada nuova" }, { "id": 220, "name": "Strada panoramica" },
            { "id": 221, "name": "Strada poderale" }, { "id": 222, "name": "Strada privata" }, { "id": 223, "name": "Strada prvinciale" },
            { "id": 224, "name": "Strada regionale" }, { "id": 225, "name": "Strada statale" }, { "id": 226, "name": "Strada Vecchia" },
            { "id": 227, "name": "Strada Vicinale" }, { "id": 228, "name": "Stradella" }, { "id": 229, "name": "Stradello" },
            { "id": 230, "name": "Stradello Privato" }, { "id": 231, "name": "Stradina" }, { "id": 232, "name": "Stradone" },
            { "id": 233, "name": "Stretta" }, { "id": 234, "name": "Stretta" }, { "id": 235, "name": "Stretto" },
            { "id": 236, "name": "Strettoia" }, { "id": 237, "name": "Subborgo" }, { "id": 238, "name": "Supportico" },
            { "id": 239, "name": "Tangenziale" }, { "id": 240, "name": "Tetti" }, { "id": 241, "name": "Traforo" },
            { "id": 242, "name": "Tratturo" }, { "id": 243, "name": "Traversa" }, { "id": 244, "name": "Traversa privata" },
            { "id": 245, "name": "Trazzera" }, { "id": 246, "name": "Tresanda" }, { "id": 247, "name": "Vaglio" },
            { "id": 248, "name": "Vanella" }, { "id": 249, "name": "Via" }, { "id": 250, "name": "Via antica" },
            { "id": 251, "name": "Via belvedere" }, { "id": 252, "name": "Via centrale" }, { "id": 253, "name": "Via cieca" },
            { "id": 254, "name": "Via Comunale" }, { "id": 255, "name": "Via interna" }, { "id": 256, "name": "Via nazionale" },
            { "id": 257, "name": "Via nuova" }, { "id": 258, "name": "Via panoramica" }, { "id": 259, "name": "Via privata" },
            { "id": 260, "name": "Via provinciale" }, { "id": 261, "name": "Via statale" }, { "id": 262, "name": "Via stretta" },
            { "id": 263, "name": "Via vecchia" }, { "id": 264, "name": "Via vicinale" }, { "id": 265, "name": "Viadotto" },
            { "id": 266, "name": "Viale" }, { "id": 267, "name": "Viale belvedere" }, { "id": 268, "name": "Vialetto" },
            { "id": 269, "name": "Vico" }, { "id": 270, "name": "Vico chiuso" }, { "id": 271, "name": "Vico cieco" },
            { "id": 272, "name": "Vico privato" }, { "id": 273, "name": "Vico privato" }, { "id": 274, "name": "Vico storto" },
            { "id": 275, "name": "Vicoletto" }, { "id": 276, "name": "Vicoletto cieco" }, { "id": 277, "name": "Vicolo" },
            { "id": 278, "name": "Vicolo chiuso" }, { "id": 279, "name": "Vicolo cieco" }, { "id": 280, "name": "Vicolo dietro" },
            { "id": 281, "name": "Vicolo privato" }, { "id": 282, "name": "Vicolo storto" }, { "id": 283, "name": "Villaggio" },
            { "id": 284, "name": "Viottolo" }, { "id": 285, "name": "Viuzza" }, { "id": 286, "name": "Viuzzo" },
            { "id": 287, "name": "Vo'" }, { "id": 288, "name": "Vocabolo" }, { "id": 289, "name": "Volta" },
            { "id": 290, "name": "Volta" }, { "id": 291, "name": "Volte" }, { "id": 292, "name": "Volto" },
            { "id": 293, "name": "Voltone" }, { "id": 294, "name": "Zona" }, { "id": 295, "name": "Zona artigianale" },
            { "id": 296, "name": "Zona industriale" },];
        this.latitudine = this.navParams.get('latitudine');
        this.longitudine = this.navParams.get('longitudine');
        this.DUG = "";
        this.denominazione = "";
        this.paese = "";
        this.codicepostale = "";
        this.provincia = "";
        this.nativeGeocoder.reverseGeocode(this.latitudine, this.longitudine)
            .then(function (result) {
            _this.paese = result[0].locality.toUpperCase();
            _this.suggerimento = result[0].thoroughfare;
            _this.codicepostale = result[0].postalCode;
            _this.provincia = result[0].subAdministrativeArea;
        })
            .catch(function (error) { return console.log(error); });
    }
    AggiungicivicoPage.prototype.ionViewDidLoad = function () {
    };
    AggiungicivicoPage.prototype.onClear = function () {
        if (this.name === '') {
            this.filteredItems = [];
        }
    };
    AggiungicivicoPage.prototype.dismiss = function () {
        this.filteredItems = [];
        //this.viewCtrl.dismiss(this.selectedItems);
    };
    AggiungicivicoPage.prototype.close = function () {
        this.viewCtrl.dismiss(this.selectedItems);
    };
    AggiungicivicoPage.prototype.chooseItem = function (item) {
        // this.selectedItems.push(item);
        this.searchDUG = '' + item.name.toUpperCase();
        this.filteredItems = [];
    };
    AggiungicivicoPage.prototype.assignCopy = function () {
        this.filteredItems = Object.assign([], this.selectedItems);
    };
    AggiungicivicoPage.prototype.filterItem = function (value) {
        if (!value)
            this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.autocompleteItems).filter(function (item) { return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    AggiungicivicoPage.prototype.conferma = function () {
        // this.oncontrollaCampi();
        var _this = this;
        var data;
        var time = new Date();
        var giorno = '' + time.getDate();
        var anno = '' + time.getFullYear();
        var month = time.getMonth() + 1;
        var mese = '' + month;
        if (giorno.length === 1)
            giorno = '0' + giorno;
        if (mese.length === 1)
            mese = '0' + mese;
        data = giorno + '/' + mese + '/' + anno;
        if (this.latitudine === '' || this.longitudine === '' || this.searchDUG === '' || this.denominazione === '' || this.civico === '') {
            this.alert = true;
        }
        else {
            if (this.fotoNumeroCivico === '' || this.fotoAbitazione === '') {
                this.foto = true;
            }
            else {
                if (this.esponente === '') {
                    this.esponente = 'NON DISPONIBILE';
                }
                var postParams = {
                    'LONGITUDINE': this.longitudine,
                    'LATITUDINE': this.latitudine,
                    'CODISTAT': '065052',
                    'NOMECOMUNE': this.paese,
                    'DUG': this.searchDUG,
                    'DENOMINAZIONE': this.denominazione.toUpperCase(),
                    'CIVICO': this.civico,
                    'ESPONENTE': this.esponente.toUpperCase(),
                    'PATHFOTOCIVICO': 'http://tcnapp.altervista.org/uploads/' + this.fotoNumeroCivico,
                    'PATHFOTOABITAZIONE': 'http://tcnapp.altervista.org/uploads/' + this.fotoAbitazione,
                    'CF_USER': this.sessione,
                    'STATO': 'IN ATTESA',
                    'DATA': data
                };
                var headers = {
                    'Content-Type': 'application/json'
                };
                this.http.post('http://tcnapp.altervista.org/script_tncapp/addCivico.php', postParams, headers)
                    .then(function (data) {
                    _this.items = JSON.parse(data.data);
                    _this.errore = _this.items.ERROR;
                    if (_this.errore === 'none') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    }
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                });
            }
        }
    };
    AggiungicivicoPage.prototype.fotoCivico = function () {
        var _this = this;
        var data = new Date();
        var time = data.getTime();
        var options = {
            quality: 100
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.fotoNumeroCivico = time;
            var fileTransfer = _this.transfer.create();
            var options1 = {
                fileKey: 'file',
                fileName: _this.fotoNumeroCivico,
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://tcnapp.altervista.org/upload.php', options1)
                .then(function (data) {
                // success
                alert("success");
            }, function (err) {
                // error
                alert("error" + JSON.stringify(err));
            });
        });
    };
    AggiungicivicoPage.prototype.fotoCasa = function () {
        var _this = this;
        var data = new Date();
        var time = data.getTime();
        var options = {
            quality: 100
        };
        this.fotoAbitazione = time;
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var fileTransfer = _this.transfer.create();
            var options1 = {
                fileKey: 'file',
                fileName: _this.fotoAbitazione,
                headers: {}
            };
            fileTransfer.upload(imageData, 'http://tcnapp.altervista.org/upload.php', options1)
                .then(function (data) {
                // success
                alert("success");
            }, function (err) {
                // error
                alert("error" + JSON.stringify(err));
            });
        });
    };
    AggiungicivicoPage.prototype.onAnnulla = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    AggiungicivicoPage.prototype.oncontrollaCampi = function () {
        if (this.latitudine === '' || this.longitudine === '' || this.searchDUG === '' || this.denominazione === '' || this.civico === '') {
            this.alert = true;
        }
    };
    AggiungicivicoPage.prototype.onAlert = function () {
        this.foto = false;
        this.alert = false;
    };
    AggiungicivicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aggiungicivico',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/aggiungicivico/aggiungicivico.html"*/'<!--\n  Generated template for the AggiungicivicoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TNC - Censimento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Latitudine</ion-label>\n      <ion-input type="text" [(ngModel)]="latitudine" (change)="onAlert()" [readonly]="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Longitudine</ion-label>\n      <ion-input type="text" [(ngModel)]="longitudine" (change)="onAlert()" [readonly]="true"></ion-input>\n    </ion-item>\n\n      <ion-item>\n          <ion-label floating>Suggerimento Google maps</ion-label>\n          <ion-input type="text" [(ngModel)]="suggerimento" name="denominazione" (change)="onAlert()"></ion-input>\n      </ion-item>\n\n\n\n      <ion-list>\n\n\n\n          <ion-item>\n      <ion-label >DUG disponibili</ion-label>\n</ion-item>\n\n\n          <ion-toolbar>\n              <ion-searchbar  [(ngModel)]="name" (input)="filterItem(name)" [showCancelButton]=\'true\'  (ionCancel)="dismiss()" (change)="onClear()"></ion-searchbar>\n          </ion-toolbar>\n          <ion-list>\n              <ion-item *ngFor="let item of filteredItems" tappable   (click)="chooseItem(item)">\n                  {{ item.name }}\n              </ion-item>\n\n          </ion-list>\n      </ion-list>\n\n\n\n\n      <ion-item>\n          <ion-label floating>DUG</ion-label>\n          <ion-input type="text" [(ngModel)]="searchDUG" name="DUG" (change)="onAlert()" [readonly]="true"></ion-input>\n      </ion-item>\n\n\n\n\n      <ion-item>\n          <ion-label floating>Denominazione</ion-label>\n          <ion-input type="text" [(ngModel)]="denominazione" name="civico" (change)="onAlert()"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n          <ion-label floating>Civico</ion-label>\n        <ion-input type="number" [(ngModel)]="civico" name="civico" (change)="onAlert()"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>Esponente</ion-label>\n          <ion-input type="text" [(ngModel)]="esponente" name="civico" (change)="onAlert()"></ion-input>\n      </ion-item>\n      <div #alert align="center" *ngIf="alert">\n          <label  style="color:blue">Riempire tutti i campi</label>\n      </div>\n      <div #alert align="center" *ngIf="foto">\n          <label  style="color:blue">Foto non caricate</label>\n      </div>\n    <div padding>\n      <ion-row>\n        <ion-col>\n    <button ion-button color="primary" (click)="fotoCivico()" round>Foto civico</button>\n        </ion-col>\n        <ion-col>\n    <button ion-button color="primary" (click)="fotoCasa()" round>Foto casa</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" round (click)="onAnnulla()">Annulla</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" (click)="conferma()" round>Conferma</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/aggiungicivico/aggiungicivico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AggiungicivicoPage);
    return AggiungicivicoPage;
}());

//# sourceMappingURL=aggiungicivico.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzacivicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VisualizzacivicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisualizzacivicoPage = /** @class */ (function () {
    function VisualizzacivicoPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.latitudine = navParams.get("latitudine");
        this.longitudine = navParams.get("longitudine");
        this.read = true;
        this.viewButton = false;
    }
    VisualizzacivicoPage.prototype.ionViewDidLoad = function () {
        this.showMap();
        this.send();
    };
    VisualizzacivicoPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(this.latitudine, this.longitudine);
        var options = {
            zoom: 15,
            center: location
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    VisualizzacivicoPage.prototype.addMarker = function (position, map) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            title: "Drag me!",
            label: this.civico,
        });
        return marker;
    };
    VisualizzacivicoPage.prototype.elimina = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VisualizzacivicoPage.prototype.modificaCivico = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    VisualizzacivicoPage.prototype.send = function () {
        var _this = this;
        var postParams = {
            'LATITUDINE': this.latitudine,
            'LONGITUDINE': this.longitudine
        };
        var datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/visualizzaCivico.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            if (_this.errore === 'none') {
                _this.paese = _this.items.RESULT.NOMECOMUNE;
                _this.dug = _this.items.RESULT.DUG;
                _this.denominazione = _this.items.RESULT.DENOMINAZIONE;
                _this.civico = _this.items.RESULT.CIVICO;
                _this.esponente = "" + _this.items.RESULT.ESPONENTE;
                if (_this.items.RESULT.PATHFOTOCIVICO === null || _this.items.RESULT.PATHFOTOABITAZIONE === null) {
                    _this.fotoCivico = "assets/imgs/logoApp.png";
                    _this.fotoCasa = "assets/imgs/logoApp.png";
                }
                else {
                    _this.fotoCivico = _this.items.RESULT.PATHFOTOCIVICO;
                    _this.fotoCasa = _this.items.RESULT.PATHFOTOABITAZIONE;
                    //this.read=false;
                    // this.viewButton=true;
                }
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    VisualizzacivicoPage.prototype.onAnnulla = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VisualizzacivicoPage.prototype, "mapRef", void 0);
    VisualizzacivicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualizzacivico',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/visualizzacivico/visualizzacivico.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>visualizzacivico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n  <ion-row>\n\n    <ion-col>\n      <img src="{{fotoCivico}}"  style="width: 200px; height: 250px" alt="Immagine profilo">\n    </ion-col>\n    <ion-col>\n      <img src="{{fotoCasa}}" style="width: 200px; height: 250px" alt="Immagine profilo">\n    </ion-col>\n\n  </ion-row>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Latitudine</ion-label>\n      <ion-input type="text" [(ngModel)]="latitudine" [readonly]="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Longitudine</ion-label>\n      <ion-input type="text" [(ngModel)]="longitudine" [readonly]="true"></ion-input>\n    </ion-item>\n   <!-- <ion-item>\n      <ion-label floating>Regione</ion-label>\n      <ion-input type="text" [(ngModel)]="regione" [readonly]="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Provincia</ion-label>\n      <ion-input type="text" [(ngModel)]="provincia" [readonly]="true"></ion-input>\n    </ion-item>-->\n    <ion-item>\n      <ion-label floating>Comune</ion-label>\n      <ion-input type="text" [(ngModel)]="paese" [readonly]="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>DUG</ion-label>\n      <ion-input type="text" [(ngModel)]="dug" [readonly]="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Denominazione</ion-label>\n      <ion-input type="text" [(ngModel)]="denominazione" [readonly]="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Civico</ion-label>\n      <ion-input type="number" [(ngModel)]="civico" [readonly]="true"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Esponente</ion-label>\n      <ion-input type="text" [(ngModel)]="esponente" [readonly]="true"></ion-input>\n    </ion-item>\n\n<!--\n   <div padding *ngIf="viewButton">\n\n      <ion-row>\n         <ion-col>\n           <button ion-button color="primary" (click)="onAnnulla()" round>Annulla</button>\n         </ion-col>\n         <ion-col>\n           <button ion-button color="primary"  round>Modifica</button>\n         </ion-col>\n       </ion-row>\n    </div>\n    -->\n\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/visualizzacivico/visualizzacivico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], VisualizzacivicoPage);
    return VisualizzacivicoPage;
}());

//# sourceMappingURL=visualizzacivico.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5_typescript__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.user = { fullname: '', email: '', codiceF: '', telefono: '', password: '', confermaPassword: '' };
        this.alert = false;
        this.errorPass = false;
        this.presente = false;
        this.codice = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSignup = function () {
        this.onControl();
    };
    SignupPage.prototype.onAnnulla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.onControl = function () {
        if (this.user.fullname === '' || this.user.email === '' || this.user.telefono === '' || this.user.password === ''
            || this.user.confermaPassword === '' || this.user.codiceF === '') {
            this.alert = true;
        }
        else {
            this.onControllPass();
        }
    };
    SignupPage.prototype.onControllPass = function () {
        if (this.user.password !== this.user.confermaPassword) {
            this.errorPass = true;
        }
        else {
            if (this.user.codiceF.length !== 16) {
                this.codice = true;
            }
            else
                this.send();
        }
    };
    SignupPage.prototype.send = function () {
        var _this = this;
        var criptPassword = __WEBPACK_IMPORTED_MODULE_4_md5_typescript__["a" /* Md5 */].init(this.user.password);
        console.log(criptPassword);
        var postParams = {
            'FULLNAME': this.user.fullname,
            'EMAIL': this.user.email,
            'PASSWORD': criptPassword,
            'PHONE': this.user.telefono,
            'CF': this.user.codiceF,
            'TYPE': 'SIMPLE OPERATOR'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/signup.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            if (_this.errore === 'yes') {
                _this.presente = true;
            }
            else {
                if (_this.errore === 'none') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            }
        })
            .catch(function (error) {
        });
    };
    SignupPage.prototype.onAlert = function () {
        this.alert = false;
        this.errorPass = false;
        this.presente = false;
        this.codice = false;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-page">\n\n\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" name="fullname" placeholder="Fullname"  [(ngModel)]="user.fullname" required (change)="onAlert()"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-input type="text"  email [(ngModel)]="user.email" placeholder="Email" name="email" (change)="onAlert()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="user.codiceF" placeholder="Codice Fiscale" name="codiceF" (change)="onAlert()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text"  [(ngModel)]="user.telefono" placeholder="Telefono" name="telefono" (change)="onAlert()"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-input type="password" [(ngModel)]="user.password" placeholder="Password" name="password" (change)="onAlert()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Conferma password" [(ngModel)]="user.confermaPassword" name="confermaPass" (change)="onAlert()"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n  <div #alert1 align="center" *ngIf="alert">\n    <label  style="color:blue">Riempire tutti i campi</label>\n  </div>\n\n  <div #alert2 align="center" *ngIf="errorPass">\n    <label  style="color:blue">Le Password non corrispondono</label>\n  </div>\n  <div #alert3 align="center" *ngIf="presente">\n    <label  style="color:blue">Utente già  registrato</label>\n  </div>\n  <div #alert4 align="center" *ngIf="codice">\n    <label  style="color:blue">Controllare Codice Fiscale</label>\n  </div>\n  <div padding>\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="onAnnulla()" color="danger" block>Annulla</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="onSignup()" color="secondary"  block>Conferma</button>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificaprofiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo_profilo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5_typescript__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ModificaprofiloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModificaprofiloPage = /** @class */ (function () {
    function ModificaprofiloPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.user = { fullname: '', email: '', telefono: '', codice: '', password: '', confermaPassword: '' };
        this.user.fullname = navParams.get("fullname");
        this.user.codice = navParams.get("codiceFiscale");
        this.user.email = navParams.get("email");
        this.user.telefono = navParams.get("telefono");
        this.errorPass = false;
    }
    ModificaprofiloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModificaprofiloPage');
    };
    ModificaprofiloPage.prototype.onAnnulla = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profilo_profilo__["a" /* ProfiloPage */]);
    };
    ModificaprofiloPage.prototype.onConferma = function () {
        this.onControllaPass();
    };
    ModificaprofiloPage.prototype.onControllaPass = function () {
        if (this.user.password.length > 0 || this.user.confermaPassword.length > 0 || this.user.telefono.length > 0) {
            if (this.user.password !== this.user.confermaPassword) {
                this.errorPass = true;
            }
            else {
                this.send();
            }
        }
    };
    ModificaprofiloPage.prototype.send = function () {
        var _this = this;
        var criptPassword = __WEBPACK_IMPORTED_MODULE_4_md5_typescript__["a" /* Md5 */].init(this.user.password);
        var postParams = {
            'CF': this.user.codice,
            'PHONE': this.user.telefono,
            'PASSWORD': criptPassword
        };
        var datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/modificaProfilo.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            _this.telefono = _this.items.RESULT.PHONE;
            _this.password = _this.items.RESULT.PASSWORD;
            if (_this.errore === 'yes') {
            }
            else {
                if (_this.errore === 'none') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profilo_profilo__["a" /* ProfiloPage */]);
                }
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    ModificaprofiloPage.prototype.onAlert = function () {
        this.errorPass = false;
    };
    ModificaprofiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modificaprofilo',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/modificaprofilo/modificaprofilo.html"*/'<!--\n  Generated template for the ModificaprofiloPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n    <ion-title>TNC - Profilo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/avatar.png" alt="Immagine profilo"><br>\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Fullname</ion-label>\n        <ion-input type="text" name="fullname"  [(ngModel)]="user.fullname" [readonly]="true" #fullname></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text"    [(ngModel)]="user.email" name="email" [readonly]="true" #email></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Codice Fiscale</ion-label>\n        <ion-input type="text" [(ngModel)]="user.codice" name="codice" [readonly]="true"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Telefono</ion-label>\n        <ion-input type="text"   [(ngModel)]="user.telefono" name="telefono" #telefono (change)="onAlert()"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"  [(ngModel)]="user.password" name="password" (change)="onAlert()" #password></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Conferma Password</ion-label>\n        <ion-input type="password"    [(ngModel)]="user.confermaPassword" name="confpassword"\n                   (change)="onAlert()" #confpassword id="confpassword"></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n\n    <div #alert align="center" *ngIf="errorPass">\n      <label  style="color:blue">Le Password non corrispondono</label>\n    </div>\n\n    <div padding>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onConferma()" type="submit" block>Conferma</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="onAnnulla()" block>Annulla</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/modificaprofilo/modificaprofilo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModificaprofiloPage);
    return ModificaprofiloPage;
}());

//# sourceMappingURL=modificaprofilo.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizzamappaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisualizzamappaPage = /** @class */ (function () {
    function VisualizzamappaPage(navCtrl, navParams, nativeGeocoder, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.locations = [];
    }
    VisualizzamappaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisualizzamappaPage');
        this.showMap();
    };
    VisualizzamappaPage.prototype.send = function () {
        var _this = this;
        var postParams = {
            'CODISTAT': '065052'
        };
        var datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/visualizzaMappa.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            _this.items = _this.items.RESULT;
            var infowindow = new google.maps.InfoWindow();
            var i, marker;
            for (i = 0; i < _this.items.length; i++) {
                var counter = _this.items[i];
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(_this.items[i].LATITUDINE, _this.items[i].LONGITUDINE),
                    map: _this.map,
                    icon: "assets/imgs/marker_mappa.png"
                });
                /*   let alert = this.alertCtrl.create({
                       title: "marcatore",
                       subTitle:'',
                       buttons: ['Dismiss']
                   });
                   alert.present();*/
                google.maps.event.addListener(marker, 'click', (function (marker, counter) {
                    return function () {
                        infowindow.setContent(counter.DUG + " " + counter.DENOMINAZIONE + " " + counter.CIVICO);
                        infowindow.open(this.map, marker);
                    };
                })(marker, counter));
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    VisualizzamappaPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(40.7731935, 14.796560799999952);
        var options = {
            zoom: 13,
            center: location
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        var Fisciano = [
            { lat: 40.7569672387864, lng: 14.8469033932164 },
            { lat: 40.7548932018406, lng: 14.8440531838236 },
            { lat: 40.75460309534711, lng: 14.8434735532348 },
            { lat: 40.7543970452326, lng: 14.8424796062293 },
            { lat: 40.7572502249888, lng: 14.8358376567619 },
            { lat: 40.7644690742173, lng: 14.8205711954808 },
            { lat: 40.7753523414929, lng: 14.8144276698351 },
            { lat: 40.7759696457375, lng: 14.8185965360347 },
            { lat: 40.7768306464178, lng: 14.8215938018657 },
            { lat: 40.7770860903149, lng: 14.8221490467869 },
            { lat: 40.7777808228682, lng: 14.822917450509 },
            { lat: 40.7811907444461, lng: 14.825350828816 },
            { lat: 40.7835873101809, lng: 14.826552773831 },
            { lat: 40.7844887991609, lng: 14.8268820128328 },
            { lat: 40.79021181605331, lng: 14.8286098577924 },
            { lat: 40.7910419063102, lng: 14.8285716610082 },
            { lat: 40.7917264052915, lng: 14.8284755328428 },
            { lat: 40.7925348771965, lng: 14.8283310610717 },
            { lat: 40.7932809556526, lng: 14.8279967833361 },
            { lat: 40.7936785296411, lng: 14.8277007653922 },
            { lat: 40.7940855168954, lng: 14.8270413503017 },
            { lat: 40.7941551990348, lng: 14.8264656000153 },
            { lat: 40.7944147946612, lng: 14.8256947852795 },
            { lat: 40.7948817770413, lng: 14.8248281484863 },
            { lat: 40.8003093304545, lng: 14.8173691141031 },
            { lat: 40.8031436620117, lng: 14.8146344225689 },
            { lat: 40.8039196602481, lng: 14.8138857252676 },
            { lat: 40.8045291122828, lng: 14.8127811023978 },
            { lat: 40.8047199934392, lng: 14.8118712880723 },
            { lat: 40.80480779512491, lng: 14.8114527776093 },
            { lat: 40.8051418080726, lng: 14.8082271656103 },
            { lat: 40.8050412347875, lng: 14.8076341827317 },
            { lat: 40.8026580916892, lng: 14.7994732522797 },
            { lat: 40.8019108009578, lng: 14.7992976650185 },
            { lat: 40.799482953517, lng: 14.7913867218854 },
            { lat: 40.8011219421419, lng: 14.7860391630079 },
            { lat: 40.8017048252549, lng: 14.7810419768125 },
            { lat: 40.8054401952143, lng: 14.7743309989603 },
            { lat: 40.80465885183041, lng: 14.7650898745179 },
            { lat: 40.8042049422059, lng: 14.7652321183009 },
            { lat: 40.8036291889534, lng: 14.7653514864993 },
            { lat: 40.8030301579324, lng: 14.7654239995213 },
            { lat: 40.8023561724852, lng: 14.7654686138214 },
            { lat: 40.7927464198528, lng: 14.7656150610603 },
            { lat: 40.7920295681202, lng: 14.7656269676265 },
            { lat: 40.7917210545204, lng: 14.7656233598447 },
            { lat: 40.791310885349, lng: 14.7656154165859 },
            { lat: 40.7907116811508, lng: 14.7656034456002 },
            { lat: 40.78939808508691, lng: 14.7654228596773 },
            { lat: 40.7891134235096, lng: 14.7653838260127 },
            { lat: 40.7887724198636, lng: 14.7651879401476 },
            { lat: 40.7885793221815, lng: 14.7650708599837 },
            { lat: 40.7880666086997, lng: 14.7647599920637 },
            { lat: 40.7878029041954, lng: 14.7646001050772 },
            { lat: 40.7874671622524, lng: 14.7643619763465 },
            { lat: 40.786364844574, lng: 14.7633664000576 },
            { lat: 40.7861550557345, lng: 14.7631471864249 },
            { lat: 40.7855943062338, lng: 14.7625612540961 },
            { lat: 40.7854407123894, lng: 14.762400764736 },
            { lat: 40.7853175963032, lng: 14.7622721221207 },
            { lat: 40.7835511882686, lng: 14.7600824887407 },
            { lat: 40.7829558182788, lng: 14.759343276363 },
            { lat: 40.7823692811849, lng: 14.7585665082948 },
            { lat: 40.7801534381833, lng: 14.7580818824421 },
            { lat: 40.77992521812191, lng: 14.758054962062 },
            { lat: 40.7780294733186, lng: 14.7580426703552 },
            { lat: 40.77777983606111, lng: 14.7580529596206 },
            { lat: 40.7776053941879, lng: 14.7580723597328 },
            { lat: 40.77582884547091, lng: 14.75897988865 },
            { lat: 40.7756018901326, lng: 14.7591727815223 },
            { lat: 40.7753681482864, lng: 14.7593714406809 },
            { lat: 40.7732237490459, lng: 14.7636334041767 },
            { lat: 40.77284582531431, lng: 14.7646182129894 },
            { lat: 40.7695769156715, lng: 14.7737056091006 },
            { lat: 40.7611526492431, lng: 14.7678464150925 },
            { lat: 40.760494131727, lng: 14.7683227783251 },
            { lat: 40.7601086726543, lng: 14.7687392100911 },
            { lat: 40.7576282219195, lng: 14.7723366776105 },
            { lat: 40.757332711264, lng: 14.7732025861987 },
            { lat: 40.7571975543347, lng: 14.7738517948284 },
            { lat: 40.7571547826214, lng: 14.7740572389496 },
            { lat: 40.7570653575591, lng: 14.7744945866005 },
            { lat: 40.7578134203366, lng: 14.7778811842591 },
            { lat: 40.7568237167358, lng: 14.789328354844 },
            { lat: 40.7561373437229, lng: 14.7932165252023 },
            { lat: 40.752990316128, lng: 14.7970758425662 },
            { lat: 40.7453311302895, lng: 14.8054384586028 },
            { lat: 40.7382618875071, lng: 14.811734590122 },
            { lat: 40.7370282663681, lng: 14.8123657659526 },
            { lat: 40.7359449376189, lng: 14.8129619716392 },
            { lat: 40.7352194446652, lng: 14.8139584899271 },
            { lat: 40.7313710039602, lng: 14.8199257972324 },
            { lat: 40.7327523066259, lng: 14.8202906419241 },
            { lat: 40.7332217443562, lng: 14.8207976414578 },
            { lat: 40.7361844881657, lng: 14.8257527048592 },
            { lat: 40.7373657191739, lng: 14.8283783077788 },
            { lat: 40.7379436809474, lng: 14.8294074886308 },
            { lat: 40.7411497798517, lng: 14.8331064632597 },
            { lat: 40.7420154828927, lng: 14.8338747137511 },
            { lat: 40.7451327494351, lng: 14.8361283178519 },
            { lat: 40.7481806338386, lng: 14.8380631402456 },
            { lat: 40.7488314478887, lng: 14.8386307012894 },
            { lat: 40.7505363154513, lng: 14.8410426329012 },
            { lat: 40.7522535981954, lng: 14.8440949805267 },
            { lat: 40.7525406710424, lng: 14.8447342502695 },
            { lat: 40.752722700825, lng: 14.8456690980671 },
            { lat: 40.7531148046686, lng: 14.8478719739021 },
            { lat: 40.7569672387864, lng: 14.8469033932164 },
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
        limiteFisciano.setMap(this.map);
        this.send();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], VisualizzamappaPage.prototype, "mapRef", void 0);
    VisualizzamappaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visualizzamappa',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/visualizzamappa/visualizzamappa.html"*/'<!--\n  Generated template for the VisualizzamappaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>visualizzamappa</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/visualizzamappa/visualizzamappa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], VisualizzamappaPage);
    return VisualizzamappaPage;
}());

//# sourceMappingURL=visualizzamappa.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aggiungicivico/aggiungicivico.module": [
		289,
		7
	],
	"../pages/login/login.module": [
		290,
		6
	],
	"../pages/mappa/mappa.module": [
		291,
		5
	],
	"../pages/modificaprofilo/modificaprofilo.module": [
		292,
		4
	],
	"../pages/profilo/profilo.module": [
		293,
		3
	],
	"../pages/signup/signup.module": [
		294,
		2
	],
	"../pages/visualizzacivico/visualizzacivico.module": [
		295,
		1
	],
	"../pages/visualizzamappa/visualizzamappa.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profilo_profilo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modificaprofilo_modificaprofilo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mappa_mappa__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aggiungicivico_aggiungicivico__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacivico_visualizzacivico__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_visualizzamappa_visualizzamappa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mappa_mappa__["a" /* MappaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aggiungicivico_aggiungicivico__["a" /* AggiungicivicoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacivico_visualizzacivico__["a" /* VisualizzacivicoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_visualizzamappa_visualizzamappa__["a" /* VisualizzamappaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aggiungicivico/aggiungicivico.module#AggiungicivicoPageModule', name: 'AggiungicivicoPage', segment: 'aggiungicivico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mappa/mappa.module#MappaPageModule', name: 'MappaPage', segment: 'mappa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modificaprofilo/modificaprofilo.module#ModificaprofiloPageModule', name: 'ModificaprofiloPage', segment: 'modificaprofilo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo/profilo.module#ProfiloPageModule', name: 'ProfiloPage', segment: 'profilo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizzacivico/visualizzacivico.module#VisualizzacivicoPageModule', name: 'VisualizzacivicoPage', segment: 'visualizzacivico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizzamappa/visualizzamappa.module#VisualizzamappaPageModule', name: 'VisualizzamappaPage', segment: 'visualizzamappa', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profilo_profilo__["a" /* ProfiloPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mappa_mappa__["a" /* MappaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aggiungicivico_aggiungicivico__["a" /* AggiungicivicoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_visualizzacivico_visualizzacivico__["a" /* VisualizzacivicoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_visualizzamappa_visualizzamappa__["a" /* VisualizzamappaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mappa_mappa__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_visualizzamappa_visualizzamappa__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-out' },
            { title: 'Profilo', component: __WEBPACK_IMPORTED_MODULE_6__pages_profilo_profilo__["a" /* ProfiloPage */], icon: 'person' },
            { title: 'Mappa', component: __WEBPACK_IMPORTED_MODULE_8__pages_visualizzamappa_visualizzamappa__["a" /* VisualizzamappaPage */], icon: 'map' },
            { title: 'Aggiungi civico', component: __WEBPACK_IMPORTED_MODULE_7__pages_mappa_mappa__["a" /* MappaPage */], icon: 'add' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>TNCapp</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon item-start [name]="p.icon" ></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mappa_mappa__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizzacivico_visualizzacivico__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(http, navCtrl, alertCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.sessione = sessionStorage.getItem('sessionCodice');
        this.user = { email: '', password: '', fullname: sessionStorage.getItem('sessionFullname') };
        this.codice = navParams.get("codiceFiscale");
        this.email = navParams.get("email");
        this.marcatore = 'assets/imgs/marker.png';
        this.stato = '';
        this.validato = false;
        this.nonvalidato = false;
        this.inattesa = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.send();
    };
    HomePage.prototype.aggiungiCivico = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mappa_mappa__["a" /* MappaPage */]);
    };
    HomePage.prototype.visualizzaCivico = function (lat, long) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__visualizzacivico_visualizzacivico__["a" /* VisualizzacivicoPage */], { latitudine: lat, longitudine: long });
    };
    HomePage.prototype.send = function () {
        var _this = this;
        var postParams = {
            'CF': this.sessione,
        };
        var datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/home.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.rilievo = _this.items.RESULT;
            _this.errore = _this.items.ERROR;
            if (_this.errore = "none") {
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    HomePage.prototype.onCambiaStato = function (stato) {
        if (stato === 'VALIDATO') {
            return true;
        }
        return false;
    };
    HomePage.prototype.onAttesa = function (stato) {
        if (stato === 'IN ATTESA') {
            return true;
        }
        return false;
    };
    HomePage.prototype.onNonValidato = function (stato) {
        if (stato === 'NON VALIDATO') {
            return true;
        }
        return false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TNC - History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-list>\n    <ion-item *ngFor="let item of rilievo" (click)="visualizzaCivico(item.LATITUDINE,item.LONGITUDINE)" >\n\n        <ion-avatar item-start  *ngIf="onCambiaStato(item.STATO)">\n        <img src="assets/imgs/marker_validato.png"  >\n        </ion-avatar>\n\n      <ion-avatar item-start *ngIf="onAttesa(item.STATO)">\n        <img src="assets/imgs/marker_inAttesa.png"  >\n      </ion-avatar>\n\n      <ion-avatar item-start *ngIf="onNonValidato(item.STATO)">\n        <img src="assets/imgs/marker_non_validato.png"  >\n      </ion-avatar>\n\n      <h2>{{item.NOMECOMUNE}}</h2>\n      <h3>{{item.DUG}} {{item.DENOMINAZIONE}} </h3>\n      <p>n° {{item.CIVICO}}</p>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>  <button ion-fab color="primary" (click)="aggiungiCivico()"><ion-icon name="add"></ion-icon></button></ion-fab>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aggiungicivico_aggiungicivico__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MappaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MappaPage = /** @class */ (function () {
    function MappaPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.prova = "";
    }
    MappaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Geocalizzazione
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitudine = resp.coords.latitude;
            _this.longitudine = resp.coords.longitude;
            _this.LastLat = _this.latitudine;
            _this.LastLng = _this.longitudine;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
        });
        this.showMap();
    };
    MappaPage.prototype.confermaPosizione = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aggiungicivico_aggiungicivico__["a" /* AggiungicivicoPage */], { latitudine: this.LastLat, longitudine: this.LastLng });
    };
    MappaPage.prototype.showMapWithPosition = function () {
        var location = new google.maps.LatLng(this.latitudine, this.longitudine);
        this.LastLat = this.latitudine;
        this.LastLng = this.longitudine;
        var options = {
            center: location,
            zoom: 15
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
        var locations = [];
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i));
        }
        var Fisciano = [
            { lat: 40.7569672387864, lng: 14.8469033932164 },
            { lat: 40.7548932018406, lng: 14.8440531838236 },
            { lat: 40.75460309534711, lng: 14.8434735532348 },
            { lat: 40.7543970452326, lng: 14.8424796062293 },
            { lat: 40.7572502249888, lng: 14.8358376567619 },
            { lat: 40.7644690742173, lng: 14.8205711954808 },
            { lat: 40.7753523414929, lng: 14.8144276698351 },
            { lat: 40.7759696457375, lng: 14.8185965360347 },
            { lat: 40.7768306464178, lng: 14.8215938018657 },
            { lat: 40.7770860903149, lng: 14.8221490467869 },
            { lat: 40.7777808228682, lng: 14.822917450509 },
            { lat: 40.7811907444461, lng: 14.825350828816 },
            { lat: 40.7835873101809, lng: 14.826552773831 },
            { lat: 40.7844887991609, lng: 14.8268820128328 },
            { lat: 40.79021181605331, lng: 14.8286098577924 },
            { lat: 40.7910419063102, lng: 14.8285716610082 },
            { lat: 40.7917264052915, lng: 14.8284755328428 },
            { lat: 40.7925348771965, lng: 14.8283310610717 },
            { lat: 40.7932809556526, lng: 14.8279967833361 },
            { lat: 40.7936785296411, lng: 14.8277007653922 },
            { lat: 40.7940855168954, lng: 14.8270413503017 },
            { lat: 40.7941551990348, lng: 14.8264656000153 },
            { lat: 40.7944147946612, lng: 14.8256947852795 },
            { lat: 40.7948817770413, lng: 14.8248281484863 },
            { lat: 40.8003093304545, lng: 14.8173691141031 },
            { lat: 40.8031436620117, lng: 14.8146344225689 },
            { lat: 40.8039196602481, lng: 14.8138857252676 },
            { lat: 40.8045291122828, lng: 14.8127811023978 },
            { lat: 40.8047199934392, lng: 14.8118712880723 },
            { lat: 40.80480779512491, lng: 14.8114527776093 },
            { lat: 40.8051418080726, lng: 14.8082271656103 },
            { lat: 40.8050412347875, lng: 14.8076341827317 },
            { lat: 40.8026580916892, lng: 14.7994732522797 },
            { lat: 40.8019108009578, lng: 14.7992976650185 },
            { lat: 40.799482953517, lng: 14.7913867218854 },
            { lat: 40.8011219421419, lng: 14.7860391630079 },
            { lat: 40.8017048252549, lng: 14.7810419768125 },
            { lat: 40.8054401952143, lng: 14.7743309989603 },
            { lat: 40.80465885183041, lng: 14.7650898745179 },
            { lat: 40.8042049422059, lng: 14.7652321183009 },
            { lat: 40.8036291889534, lng: 14.7653514864993 },
            { lat: 40.8030301579324, lng: 14.7654239995213 },
            { lat: 40.8023561724852, lng: 14.7654686138214 },
            { lat: 40.7927464198528, lng: 14.7656150610603 },
            { lat: 40.7920295681202, lng: 14.7656269676265 },
            { lat: 40.7917210545204, lng: 14.7656233598447 },
            { lat: 40.791310885349, lng: 14.7656154165859 },
            { lat: 40.7907116811508, lng: 14.7656034456002 },
            { lat: 40.78939808508691, lng: 14.7654228596773 },
            { lat: 40.7891134235096, lng: 14.7653838260127 },
            { lat: 40.7887724198636, lng: 14.7651879401476 },
            { lat: 40.7885793221815, lng: 14.7650708599837 },
            { lat: 40.7880666086997, lng: 14.7647599920637 },
            { lat: 40.7878029041954, lng: 14.7646001050772 },
            { lat: 40.7874671622524, lng: 14.7643619763465 },
            { lat: 40.786364844574, lng: 14.7633664000576 },
            { lat: 40.7861550557345, lng: 14.7631471864249 },
            { lat: 40.7855943062338, lng: 14.7625612540961 },
            { lat: 40.7854407123894, lng: 14.762400764736 },
            { lat: 40.7853175963032, lng: 14.7622721221207 },
            { lat: 40.7835511882686, lng: 14.7600824887407 },
            { lat: 40.7829558182788, lng: 14.759343276363 },
            { lat: 40.7823692811849, lng: 14.7585665082948 },
            { lat: 40.7801534381833, lng: 14.7580818824421 },
            { lat: 40.77992521812191, lng: 14.758054962062 },
            { lat: 40.7780294733186, lng: 14.7580426703552 },
            { lat: 40.77777983606111, lng: 14.7580529596206 },
            { lat: 40.7776053941879, lng: 14.7580723597328 },
            { lat: 40.77582884547091, lng: 14.75897988865 },
            { lat: 40.7756018901326, lng: 14.7591727815223 },
            { lat: 40.7753681482864, lng: 14.7593714406809 },
            { lat: 40.7732237490459, lng: 14.7636334041767 },
            { lat: 40.77284582531431, lng: 14.7646182129894 },
            { lat: 40.7695769156715, lng: 14.7737056091006 },
            { lat: 40.7611526492431, lng: 14.7678464150925 },
            { lat: 40.760494131727, lng: 14.7683227783251 },
            { lat: 40.7601086726543, lng: 14.7687392100911 },
            { lat: 40.7576282219195, lng: 14.7723366776105 },
            { lat: 40.757332711264, lng: 14.7732025861987 },
            { lat: 40.7571975543347, lng: 14.7738517948284 },
            { lat: 40.7571547826214, lng: 14.7740572389496 },
            { lat: 40.7570653575591, lng: 14.7744945866005 },
            { lat: 40.7578134203366, lng: 14.7778811842591 },
            { lat: 40.7568237167358, lng: 14.789328354844 },
            { lat: 40.7561373437229, lng: 14.7932165252023 },
            { lat: 40.752990316128, lng: 14.7970758425662 },
            { lat: 40.7453311302895, lng: 14.8054384586028 },
            { lat: 40.7382618875071, lng: 14.811734590122 },
            { lat: 40.7370282663681, lng: 14.8123657659526 },
            { lat: 40.7359449376189, lng: 14.8129619716392 },
            { lat: 40.7352194446652, lng: 14.8139584899271 },
            { lat: 40.7313710039602, lng: 14.8199257972324 },
            { lat: 40.7327523066259, lng: 14.8202906419241 },
            { lat: 40.7332217443562, lng: 14.8207976414578 },
            { lat: 40.7361844881657, lng: 14.8257527048592 },
            { lat: 40.7373657191739, lng: 14.8283783077788 },
            { lat: 40.7379436809474, lng: 14.8294074886308 },
            { lat: 40.7411497798517, lng: 14.8331064632597 },
            { lat: 40.7420154828927, lng: 14.8338747137511 },
            { lat: 40.7451327494351, lng: 14.8361283178519 },
            { lat: 40.7481806338386, lng: 14.8380631402456 },
            { lat: 40.7488314478887, lng: 14.8386307012894 },
            { lat: 40.7505363154513, lng: 14.8410426329012 },
            { lat: 40.7522535981954, lng: 14.8440949805267 },
            { lat: 40.7525406710424, lng: 14.8447342502695 },
            { lat: 40.752722700825, lng: 14.8456690980671 },
            { lat: 40.7531148046686, lng: 14.8478719739021 },
            { lat: 40.7569672387864, lng: 14.8469033932164 },
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
    };
    MappaPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(40.759082323356765, 14.691781673339584);
        var options = {
            zoom: 15,
            center: location
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    MappaPage.prototype.addMarker = function (position, map) {
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            title: "Drag me!",
            label: "A",
        });
        this.lastLatLng(marker);
        return marker;
    };
    MappaPage.prototype.lastLatLng = function (marker) {
        var _this = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            _this.LastLat = marker.position.lat();
            _this.LastLng = marker.position.lng();
            console.log("new position");
            console.log(_this.LastLat);
            console.log(_this.LastLng);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MappaPage.prototype, "mapRef", void 0);
    MappaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mappa',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/mappa/mappa.html"*/'<!--\n  Generated template for the MappaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>mappa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n  <ion-fab left bottom>  <button ion-fab color="primary" (click)="showMapWithPosition()"><ion-icon name="locate"></ion-icon></button></ion-fab>\n  <ion-fab right top>  <button ion-fab color="primary" (click)="confermaPosizione()"><ion-icon name="add"></ion-icon></button></ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/mappa/mappa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MappaPage);
    return MappaPage;
}());

//# sourceMappingURL=mappa.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_md5_typescript__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.alert = false;
        sessionStorage.clear();
        this.user = { email: '', password: '' };
        this.error = false;
    }
    LoginPage.prototype.onLogin = function () {
        if (this.user.email === '' || this.user.password === '') {
            this.alert = true;
        }
        else {
            this.send();
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.send = function () {
        var _this = this;
        sessionStorage.clear();
        var criptPassword = __WEBPACK_IMPORTED_MODULE_5_md5_typescript__["a" /* Md5 */].init(this.user.password);
        var postParams = {
            'email': this.user.email,
            'password': criptPassword
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/login.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            _this.fullName = _this.items.RESULT.FULLNAME;
            _this.codice = _this.items.RESULT.CF;
            _this.e_mail = _this.items.RESULT.EMAIL;
            if (_this.errore === 'none') {
                localStorage.setItem('isLoggedin', 'true');
                sessionStorage.setItem('sessionCodice', '' + _this.codice);
                sessionStorage.setItem('sessionFullname', '' + _this.fullName);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { fullname: _this.fullName, codiceFiscale: _this.codice,
                    email: _this.e_mail });
            }
            else {
                if (_this.errore === 'yes') {
                    _this.error = true;
                }
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    LoginPage.prototype.onAlert = function () {
        this.alert = false;
        this.error = false;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TNCapp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      TNC\n\n    </div>\n  </div>\n  <div padding>\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="Email" [(ngModel)]="user.email" name="email" #email (change)="onAlert()" [readonly]="read"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password"  placeholder="Password" [(ngModel)]="user.password" name="password" #password (change)="onAlert()"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div #alert align="center" *ngIf="alert">\n      <label  style="color:blue">Riempire tutti i campi</label>\n    </div>\n    <div #alert align="center" *ngIf="error">\n      <label  style="color:blue">Credenziali errate</label>\n    </div>\n\n    <button ion-button block (click)="onLogin()"  color="primary">Login</button>\n    <button ion-button block (click)="onSignup()"   color="primary">Registrati</button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfiloPage = /** @class */ (function () {
    function ProfiloPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.user = { fullname: '', email: '', telefono: '', codice: '' };
        this.sessione = this.sessione = sessionStorage.getItem('sessionCodice');
    }
    ProfiloPage.prototype.ionViewDidLoad = function () {
        this.send();
    };
    ProfiloPage.prototype.send = function () {
        var _this = this;
        var postParams = {
            'CF': this.sessione
        };
        var datas = {
            'Action': 'Login',
            'UserName': 'bla',
            'Password': 'blabla'
        };
        var headers = {
            'Content-Type': 'application/json'
        };
        this.http.post('http://tcnapp.altervista.org/script_tncapp/profilo.php', postParams, headers)
            .then(function (data) {
            _this.items = JSON.parse(data.data);
            _this.errore = _this.items.ERROR;
            if (_this.errore === 'yes') {
            }
            else {
                if (_this.errore === 'none') {
                    _this.user.fullname = _this.items.RESULT.FULLNAME;
                    _this.user.email = _this.items.RESULT.EMAIL;
                    _this.user.codice = _this.items.RESULT.CF;
                    _this.user.telefono = _this.items.RESULT.PHONE;
                }
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    ProfiloPage.prototype.onModifica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modificaprofilo_modificaprofilo__["a" /* ModificaprofiloPage */], { fullname: this.user.fullname, codiceFiscale: this.user.codice,
            email: this.user.email, telefono: this.user.telefono });
    };
    ProfiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo',template:/*ion-inline-start:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/profilo/profilo.html"*/'<!--\n  Generated template for the ProfiloPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TNC - Profilo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  class="speaker-detail">\n  <div text-center>\n    <img src="assets/imgs/avatar.png" alt="Immagine profilo"><br>\n    <ion-list>\n      <ion-item>\n    <ion-label  >{{user.fullname}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label >{{user.email}}</ion-label>\n      </ion-item>\n    <ion-item>\n      <ion-label >{{user.telefono}}</ion-label>\n    </ion-item>\n   <ion-item>\n     <ion-label  >{{user.codice}}</ion-label>\n   </ion-item>\n    </ion-list>\n\n    <ion-buttons>\n      <button ion-button (click)="onModifica()" small>Modifica</button>\n    </ion-buttons>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vincenzobevilacqua/Desktop/TNCapp/src/pages/profilo/profilo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfiloPage);
    return ProfiloPage;
}());

//# sourceMappingURL=profilo.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map