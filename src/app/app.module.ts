import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder} from '@ionic-native/native-geocoder';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from "../pages/login/login";
import { SignupPage} from "../pages/signup/signup";
import { ProfiloPage} from "../pages/profilo/profilo";
import { ModificaprofiloPage} from "../pages/modificaprofilo/modificaprofilo";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MappaPage} from "../pages/mappa/mappa";
import {AggiungicivicoPage} from "../pages/aggiungicivico/aggiungicivico";
import {VisualizzacivicoPage} from "../pages/visualizzacivico/visualizzacivico";
import {VisualizzamappaPage} from "../pages/visualizzamappa/visualizzamappa";
import {Camera} from "@ionic-native/camera";
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      LoginPage,
      SignupPage,
      ProfiloPage,
      ModificaprofiloPage,
      MappaPage,
      AggiungicivicoPage,
      VisualizzacivicoPage,
      VisualizzamappaPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      LoginPage,
      SignupPage,
      ProfiloPage,
      ModificaprofiloPage,
      MappaPage,
      AggiungicivicoPage,
      VisualizzacivicoPage,
      VisualizzamappaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
      Geolocation,
      Camera,
      HTTP,
      NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
