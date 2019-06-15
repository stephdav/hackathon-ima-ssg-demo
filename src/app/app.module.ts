import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutilMetierComponent } from './components/outil-metier/outil-metier.component';
import { VueAssureurComponent } from './components/vue-assureur/vue-assureur.component';

@NgModule({
  declarations: [
    AppComponent,
    OutilMetierComponent,
    VueAssureurComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
