import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Animations 02 de octubre 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MaterialModule} from './material';
import { EspService } from '../services/esp.service';
import { LoginComponent } from './login/login.component';
import { GraficasComponent } from './graficas/graficas.component';

// mas graficas pros
import { ChartsModule } from 'ng2-charts';
//import { LineaComponent } from './linea.component';
import { BarraComponent } from './barra/barra.component';

const firebaseDb:any={
    apiKey: "AIzaSyCp2KZ9XgH7q3OFYfIG9SofNUONJ-4KvYY",
    authDomain: "esp8266-eb09e.firebaseapp.com",
    databaseURL: "https://esp8266-eb09e.firebaseio.com",
    projectId: "esp8266-eb09e",
    storageBucket: "esp8266-eb09e.appspot.com",
    messagingSenderId: "285203496363"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficasComponent,
//    LineaComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseDb),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ChartsModule,

  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})
export class AppModule { }


