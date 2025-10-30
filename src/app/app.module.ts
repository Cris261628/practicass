import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideHttpClient } from '@angular/common/http';

import { makeEnvironmentProviders } from '@angular/core';
import {initializeApp , provideFirebaseApp} from '@angular/fire/app';
import {provideFirestore,getFirestore } from '@angular/fire/firestore';
import {provideAuth,getAuth} from '@angular/fire/auth';
import { firebaseConfig } from 'src/environments/firebaseconfig';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  makeEnvironmentProviders([
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=> getAuth()),
    provideHttpClient(),
   ]) 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
