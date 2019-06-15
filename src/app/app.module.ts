import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutilMetierComponent } from './components/outil-metier/outil-metier.component';
import { VueAssureurComponent } from './components/vue-assureur/vue-assureur.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BasketComponent } from './components/vue-assureur/basket/basket.component';
import { ClientOverviewComponent } from './components/vue-assureur/client-overview/client-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OutilMetierComponent,
    VueAssureurComponent,
    BasketComponent,
    ClientOverviewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
