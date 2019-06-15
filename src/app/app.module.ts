import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VueAssureurComponent } from './components/vue-assureur/vue-assureur.component';

import { OutilMetierComponent } from './components/outil-metier/outil-metier.component';

@NgModule({
  declarations: [
    AppComponent,
    VueAssureurComponent,
    OutilMetierComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
